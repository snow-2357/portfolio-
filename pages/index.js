
import styled from "styled-components";
export default function Home() {
  return (
    <Main>
      <Text>
        
        <h1>Hi, my </h1>
        <h2>name is Simanta"SNOW"Ray</h2>
        <h4>I’m a frontend developer with React & a crapy Illustrator</h4>
        <button>Contact Me</button>
      </Text>
      <img src="/main.png" alt="" />
    </Main>
  );
}
const Main = styled.div`
height: calc(100vh);
background-color: #1a0120;
display: flex;
justify-content: space-between;
  align-items: center;
position: relative;

padding: 30px 20%;
font-size: 100%;
color: white;

img{
  height: 80%;
  padding: auto;
}
@media only screen and (max-width: 1000px) {
  img {
    display:none;
    
  }
}

`;
const Text = styled.div`
button{
  padding: 10px 25px;
  background-color: transparent;
  color: white;
  letter-spacing: 1.03px;
  border:2px solid #f49b5a ;
  border-radius: 5px;
  font-weight:650 ;
  &:hover {
    background-color: #f49b5a;
    color: #110e22;
  }
}
`;

