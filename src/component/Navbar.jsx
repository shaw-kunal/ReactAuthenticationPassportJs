import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {
  return (
    <div className='navbar'>
        <span className="logo">
          <Link to="/"  className='link'>Lama App</Link>
        </span>
        {
          user ?(
            <ul className="list">
            <li className="listItem">
                <img src="https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?w=1060&t=st=1684734464~exp=1684735064~hmac=023bbcb8f8112ead4392c38966cf8d91be5fe1c517ef193f7eda88f0b4f37bd1" alt=""  className='avatar'/>
            </li>
            <li className="listItem">Meloni Deo</li>
            <li className="listItem">LogOut</li>
        </ul>

          ):(
            <Link to="/login" className='link'>Login</Link>

          )
        }
        
    </div>
  )
}

export default Navbar