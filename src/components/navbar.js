import React from 'react';
import { Link } from 'gatsby';

import "./navbar.css";

const NavBar = () => (
    <div aria-label="Menu"
        style={{
            width: `100%`,
            backgroundColor: '#3d1e5b',
            margin: `0 auto`,
        }}
    >
        <ul
            style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-evenly',
                marginBottom: `2em`,
                marginLeft: "0"
            }}
        >
            <li className="navitem">
                <Link to="/" aria-label="Home" 
                style={{
                    display:'block',
                    
                    color: `white`,
                    textDecoration: `none`,
                    
                    
                }} >Home</Link>
            </li>
            <li className="navitem" >
                <Link to="/blog" aria-label="Blog"
                style={{
                    display:'block',
                    color: `white`,
                    textDecoration: `none`,
                }}>Blog</Link>
            </li>
            <li className="navitem" >
                <Link to="/about" aria-label="About"
                style={{
                    display:'block',
                    color: `white`,
                    textDecoration: `none`,
                }}>About</Link>
            </li>
        </ul>

    </div>
)

export default NavBar;