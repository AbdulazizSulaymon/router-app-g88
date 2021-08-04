import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-image: ${p => p.colors.footerBack};

  a {
    color: ${p => p.colors.color};
    display: block;
    font-weight: bold;
  }
`;

export default FooterWrapper;