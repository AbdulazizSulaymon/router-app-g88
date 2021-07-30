import "./Header.css";
import React from 'react'

const Header = () => {
    return (
        <header className="bg-dark text-white shadow">
            <div className="container py-3 d-flex align-items-center">
                <img src="logo192.png" className="logo me-3" alt="" />
            </div>
        </header >
    )
}

export default Header
