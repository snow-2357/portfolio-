import Link from "next/link";
import styled from "styled-components";

function Navbar() {
  return (
    <Nav>
      <Logo>
        <Link href="/">SNOW</Link>
      </Logo>
      <div>
        <Link href="/">
          <Links>HOME</Links>
        </Link>

        <Link href="/work">
          <Links>WORK</Links>
        </Link>

        <Link href="/about">
          <Links>ABOUT</Links>
        </Link>

        <Link href="/contact">
          <Links>CONTANT</Links>
        </Link>
      </div>
    </Nav>
  );
}

export default Navbar;
const Nav = styled.nav`
  margin: 0;
  padding: 0;
  height: 50px;
  overflow: hidden;
  background-color: #0e0310;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Links = styled.a`
  position: relative;
  color: white;
  cursor: pointer;
  text-align: center;
  padding: 50px 16px;
  text-decoration: none;

  ::after {
    content: "";
    height: 2px;
    width: 80%;
    background: white;
    position: absolute;
    left: 9px;
    right: 0;
    top: 80px;
    transition: all 250ms cubic-bezier(1, 0.01, 0, 0.98) 0s;
    transform-origin: left;
    transform: scaleX(0);
    opacity: 0;
  }

  &:hover {
    ::after {
      transform: scaleX(1);
      opacity: 1;
    }
  }
`;
const Logo = styled.h4`
  padding: 0px 10px;
  color: #fff;
`;
