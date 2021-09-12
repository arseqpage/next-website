import styled from 'styled-components';

const FooterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60px;

  background: #000;

  color: #fff;
`;

const Footer = () => {
  return (
    <FooterSection>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, eaque.
    </FooterSection>
  );
};

export default Footer;
