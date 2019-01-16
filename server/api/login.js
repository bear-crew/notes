// импортируем роутер
const router = require('express').Router()

// импортируем bcrypt, здесь он нужен для сверки пароля с хешем из БД
const bcrypt = require('bcryptjs')

// импортируем jwt чтобы создавать web-token'ы для последующей отправки пользователю
const jwt = require('jsonwebtoken')

// импортируем файл конфигурации
const config = require('../config')

// импортируем модельку user
const User = require('./models/user')

/**
 * Этот модуль имеет единственный метод. При получении запроса типа POST, в котором содержится логин и пароль,
 * эта функция ищет в БД пользователя с таким username, получает хеш его пароля и сверяет с помощью bcrypt с полученным
 * в запросе паролем. При ошибках обработки возвращает статус 500. При неправильных данных - 401 - Unauthorized.
 * При успехе возвращает токен.
 */

router.post ('/login', function(req, res, next){
    if (!req.body.email || !req.body.password) {
        return res.sendStatus(400) // если один или оба параметра запроса опущены, возвращаем 400 - Bad Request
    } else {
        const email = req.body.email
        const password = req.body.password
        User.findOne({username: email})
        .select('password') // указываем явно, что нам нужно значение поля password (ибо его выборка отключена в модели)
        .exec(function(err, user){
            if (err) {
                return res.sendStatus(500)
            } 
            if (!user) {return res.sendStatus(401)}
            bcrypt.compare(password, user.password, function(err, valid){
                if (err) {
                    return res.sendStatus(500)
                }
                if (!valid){ return res.sendStatus(401)}
                const token = jwt.sign({exp: Math.floor(Date.now() / 1000) + (60*60*36), data: email}, config.secretkey)
                res.send(token)
            })
        })
    } 
})

module.exports = router