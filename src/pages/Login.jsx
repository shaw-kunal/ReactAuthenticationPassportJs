import React from 'react'
import Facebook from "./../img/facebook.png"
import Google from "./../img/google.png"
import Github from "./../img/github.png"

const Login = () => {
    return (
        <div className='login'>
            <h1 className='loginTitle'>Choose your login method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton facebook">
                        <img src={Facebook} alt="not found " />
                        FaceBook
                    </div>
                    <div className="loginButton google">
                        <img src={Google} alt="not found " />
                        Google
                    </div>
                    <div className="loginButton github">
                        <img src={Github} alt="not found " />
                        Github
                    </div>

                </div>
                <div className="center">
                    <div className='line'></div>
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <div className="inputItem">
                        <input type="text" placeholder='username' className='loginInput' />
                        <input type="text" placeholder='password' className="loginInput" />
                        <div><button className='loginbtn'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login