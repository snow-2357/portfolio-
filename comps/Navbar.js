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
        </Link>{" "}
        <Link href="/about">
          <Links>ABOUT</Links>
        </Link>
        <Link href="/work">
          <Links>WORK</Links>
        </Link>
      </div>
    </Nav>
  );
}

export default Navbar;
const Nav = styled.nav`
  
  margin: 0px;
  padding: 25px;
  height: 50px;
  overflow: hidden;
  background-color: #0e0310;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 750px) {
  div {
    display:none;
    
  }
}
`;
const Links = styled.a`
  position: relative;
  margin: 15px;
  color: white;
  cursor: pointer;
  text-align: center;
  padding: 50px 16px;
  text-decoration: none;
  &:last-child{
    margin-right: 100px;
  }

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
  padding: 0px 100px;
  color: #fff;
`;
