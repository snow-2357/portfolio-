import styled from "styled-components";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <Footers>
        <h4 className="fr">snoWhit3</h4>
        <div >
          <img src="/github.svg" alt="" />
          <img src="/linkedin.svg" alt="" />
          <img src="/instagram.svg" alt="" />
          <img src="/twitter.svg" alt="" />
        </div>


        <p>SNOW 2021</p>
        <p>❤️</p>
        <p>The design files of this website are shared as open source. If you want to examine the design, you can download it <a href="https://github.com/">here</a></p>
      </Footers>
    </div>
  );
};

export default Footer;
const Footers = styled.div`
  display: flex;
  flex-direction: column;
 
  padding-top: 10px;
  padding: 10px;

  background-color: #0e0310;
  color: #fff;
  text-align: center;
  align-items: center;
 
div{
    margin-bottom:25px;
}
  div img {
    background-color: #fff;
    height: 50px;
    padding: 5px;
    margin: 0 10px;
    border-radius: 10%;
  }
  p{
    font-size:10px;
    margin:-1px
    a{
      color: red;
    }  
  }
`;
