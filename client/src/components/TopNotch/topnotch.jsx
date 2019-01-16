import React, { Component } from 'react';
import '../Search/search.css';
import UserMenu from '../UserMenu/usermenu';
import './topnotch.css';

class TopNotch extends Component {

    render() {
        const login = !this.props.loginState && <a href="/signin"><button type="button" className="login-button">Login</button></a>
        const userpic = this.props.loginState && <button type="button" className="user-button"><img src="photo.jpg" className="user-pic"/></button>
        const username = this.props.loginState && <div className="user-name">fowku</div>  
        return(
            <div className="top-notch">
                <div className="left-edit">
                    {login}
                    {userpic}
                    {username}
                    <UserMenu/>
                </div>
                <div className="right-edit">
                    <button type="button"><svg width="26" height="25" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="evenodd"><path d="M24.321 23.913h-8.008a.54.54 0 0 0-.538.544c0 .3.241.543.538.543h8.008A1.667 1.667 0 0 0 26 23.348V7.07a.547.547 0 0 0-.13-.355L20.282.188A.534.534 0 0 0 19.876 0H7.767A1.666 1.666 0 0 0 6.09 1.652v13.022c0 .3.24.543.537.543a.541.541 0 0 0 .539-.543V1.652a.585.585 0 0 1 .602-.565h11.197l.04 5.716a1.356 1.356 0 0 0 1.346 1.35h4.574v15.195a.586.586 0 0 1-.603.565zm-4.24-17.12l-.036-5.225 4.701 5.497H20.35a.27.27 0 0 1-.27-.272zM5.171 16.735a1.914 1.914 0 0 0-1.05-.73c-.273-.074-.858-.111-1.755-.111H0v7.45h1.475v-2.81h.961c.668 0 1.178-.036 1.53-.107.259-.057.514-.175.765-.353.25-.178.457-.423.62-.734.163-.312.244-.697.244-1.154 0-.593-.141-1.077-.424-1.45zm-1.263 2.05a.971.971 0 0 1-.46.367c-.196.078-.585.117-1.166.117h-.807v-2.115h.712c.532 0 .885.017 1.061.051a.974.974 0 0 1 .827 1.001c0 .22-.055.414-.167.58z" fill-rule="nonzero"/><path d="M12.762 17.93a3.274 3.274 0 0 0-.693-1.208 2.42 2.42 0 0 0-1.095-.686c-.317-.095-.778-.142-1.382-.142h-2.68v7.45H9.67c.542 0 .974-.052 1.298-.157.433-.142.776-.34 1.03-.595.337-.335.596-.774.778-1.316.149-.444.223-.972.223-1.586 0-.698-.08-1.285-.238-1.76zm-1.427 3.059c-.099.334-.227.573-.384.719a1.341 1.341 0 0 1-.592.31c-.181.047-.477.071-.886.071H8.378v-4.935h.659c.597 0 .999.024 1.204.072.274.06.5.177.678.35.179.173.317.414.416.722.1.308.149.75.149 1.326 0 .576-.05 1.031-.149 1.365z" fill-rule="nonzero"/><path d="M19.089 17.154v-1.26h-4.937v7.45h1.454v-3.166h3.006v-1.26h-3.006v-1.764z"/></g></svg></button>
                    <button type="button"><svg width="26" height="21" xmlns="http://www.w3.org/2000/svg"><path d="M15.081.624a.6.6 0 0 0-.57-.089c-.173.062-.27.184-.27.3v4.938l-.482.016c-2.276.078-4.21.477-5.816 1.098-1.033.399-1.765.819-2.223 1.171-2.56 1.798-4.301 4.295-4.933 7.063A10.627 10.627 0 0 0 .62 19.17l.004.019.207 1.02c.026.128.167.25.37.283.218.035.432-.047.528-.184l.621-.887c1.97-2.805 4.44-4.674 7.333-5.542a12.338 12.338 0 0 1 4.08-.512l.479.02v5.094c0 .116.096.239.27.3.198.07.43.03.57-.09L25.39 9.822c.147-.126.147-.295-.002-.42L15.081.622z" fill-rule="nonzero" stroke="#000" fill="none"/></svg></button>
                </div>
            </div>
        )
    }
}

export default TopNotch