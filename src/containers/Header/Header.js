import React, { useContext } from 'react'
import ThemeContext from "../../theme-context";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import HeaderWrapper from './HeaderWrapper';


const Header = () => {
    const { theme, setTheme, colors } = useContext(ThemeContext);

    const toggle = () => {
        setTheme(theme == "light" ? "dark" : "light");
    }

    return (
        <HeaderWrapper className={`shadow`} colors={colors}>
            <div className="container py-3 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <img src="logo192.png" className="logo me-3" alt="" />
                    <p className="m-0 ms-2 fw-bold">Olx.uz</p>
                </div>
                <Button color={theme} onClick={toggle}><FontAwesomeIcon icon={theme == "light" ? faMoon : faSun} /></Button>
            </div>
        </HeaderWrapper >
    )
}

export default Header
