import styled from "styled-components";

const HeaderWrapper = styled.header`
    transition: 0.5s;
    background-color: ${props => props.colors.backgroundColor};
    color:  ${props => props.colors.color};

   .logo {
        height: 40px;
    }
`

export default HeaderWrapper