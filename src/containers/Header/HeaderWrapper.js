import styled from "styled-components";

const colors = {
    dark: "rgb(53, 53, 53)",
    light: "white"
}

const HeaderWrapper = styled.header`
    transition: 0.5s;

   .logo {
        height: 40px;
    }

    &.dark {
        background-color: ${colors.dark};
        color: ${colors.light} ;
    }

    &.light {
        background-color: ${colors.light} ;
        color: ${colors.dark} ;
    }
`

export default HeaderWrapper