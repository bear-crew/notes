const router = require('express').Router() // импортируем роутер

// импортируем модуль bcrypt для шифрования паролей (мы же не собираемся хранить их в БД в открытом виде?)
const bcrypt = require('bcryptjs')

// импортируем JWT для декодирования web-token'ов 
const jwt = require('jwt-simple')
// импортируем модель пользователя
const User = require('./models/user')

// импортируем файл конфигурации (баловство, конечно, надо генерировать это на лету и хранить где-нибудь)
const config = require('../config')


/**
 * При поступлении запроса типа POST эта функция шифрует пароль с помощью bcrypt и сохраняет результат в БД.
 * При любых ошибках выдает статус 500 - Internal Server Error
 * При удаче - возвращает 201
 */
router.post('/user', function (req, res, next){
    const user = new User
    user.username = req.body.username
    const password = req.body.password
    bcrypt.hash(password, 10, function(err, hash){
        if (err){res.sendStatus(500)}
        else {
            user.password = hash
            user.save(function (err) {
                if (err) {res.sendStatus(500)}
                else {
                    res.sendStatus(201)
                }
            })
        }
    })
})


/**
 * При поступлении запроса типа GET эта функция проверяет наличие заголовка типа x-auth, при его отсутствии
 * возвращает 401 - Unauthorized. При наличии расшифровывает токен, содержащийся в заголовке с помощью jwt, 
 * затем ищет пользователя с оным именем в базе данных. 
 * При любых ошибках возвращает 500 - Internal Server Error
 * При успехе возвращает JSON объекта user (без пароля, естественно)
 */
router.get('/user', function (req, res, next) {
    if(!req.headers['x-auth']) {
        return res.sendStatus(401)
    }
    try {
        const auth = jwt.decode(req.headers['x-auth'], config.secretkey)
    } catch (err) {
        return res.sendStatus(401)
    }
    User.findOne({username: auth.username}, function(err, user) {
        if (err) {return res.sendStatus(500)}
        else {
            res.json(user)
        }
    })
})

module.exports = router