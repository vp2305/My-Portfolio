import React from 'react';
import "./Header.css"
function Header() {
    return (
        <div className = "header">
            <img 
                className = "my-logo"
                src = "https://firebasestorage.googleapis.com/v0/b/instagram-clone-9babf.appspot.com/o/images%2FYAY-removebg-preview.png?alt=media&token=ad63e9b1-1f40-48de-935f-e8eb93fce061"
                alt = ""
            />
            <div>
                <nav>
                    <ul className = "nav__list">
                        <li className = "nav__items">
                            <a className = "nav__links" href = "#home">
                                Home
                            </a>
                        </li>
                        <li className = "nav__items">
                            <a className = "nav__links" href = "#about">
                                About
                            </a>
                        </li>
                        <li className = "nav__items">
                            <a className = "nav__links" href = "#talents">
                                Talents
                            </a>
                        </li>
                        <li className = "nav__items">
                            <a className = "nav__links" href = "#experience">
                                Experience
                            </a>
                        </li>
                        
                        <li className = "nav__items">
                            <a className = "nav__links" href = "#projects">
                                Projects
                            </a>
                        </li>
                        
                        {/* <li className = "nav__items">
                            <a className = "nav__links" href = "#blog">
                                Blog
                            </a>
                        </li> */}
                        <li className = "nav__items">
                            <a className = "nav__links" href = "#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header