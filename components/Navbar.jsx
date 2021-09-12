import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 80px;

  background: #000;

  color: #fff;
`;

const StyledLink = styled.a`
  padding: 0 2rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href="/" passHref>
          <StyledLink>NEXT</StyledLink>
        </Link>
      </div>
      <div>
        <Link href="/" passHref>
          <StyledLink> Home</StyledLink>
        </Link>
        <Link href="/about" passHref>
          <StyledLink> About</StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink> Contact</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
