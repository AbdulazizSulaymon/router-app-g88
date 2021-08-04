// import "./Container.css"
import React, { useContext } from 'react'
import Header from "../Header"
import Footer from "../Footer"
import ThemeContext from "../../theme-context";
import ContainerWrapper from './ContainerWrapper';

const Container = (props) => {
    const { colors } = useContext(ThemeContext);

    return (
        <ContainerWrapper colors={colors}>
            <Header />
            <div className="content">{props.children}</div>
            <Footer />
        </ContainerWrapper>
    )
}

export default Container
