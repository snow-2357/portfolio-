import styled from "styled-components";
export default function About() {
  return (
    <Xabout>
      <div className="text">
        <h1>About Me</h1>
        <p>
          An inquisitive Computer Science Engineering student, skilled in
          leadership, seeking to leverage solid development skills with focus on
          collaboration, communication and passion.
        </p>
        <button>Download CV</button>
         <p>Tech stack I've been working with:</p>
      </div>

      <Skills>
       
        <div>
          <p>Javascript</p>
          <div className="big">
            <div className="small"></div>
          </div>
          <p>NodeJS</p>
          <div className="big1">
            <div className="small1"></div>
          </div>
          <p>ReactJS</p>
          <div className="big2">
            <div className="small2"></div>
          </div>
        </div>
        <div>
          <p>MongoDB</p>
          <div className="big3">
            <div className="small3"></div>
          </div>
          <p>Express</p>
          <div className="big4">
            <div className="small4"></div>
          </div>
          <p>Figma</p>
          <div className="big5">
            <div className="small5"></div>
          </div>
        </div>
      </Skills>
    </Xabout>
  );
}
const Xabout = styled.div`
  padding-top: 10vh;
  height: 80vh;
  background-color: #1a0120;
  padding: 30px 20%;
  font-size: 100%;
  color: white;
  z-index: 1;
  p{
    margin-top: 25px;
  }
  button {
    padding: 10px 25px;
    background-color: transparent;
    color: white;
    letter-spacing: 1.03px;
    border: 2px solid #f49b5a;
    border-radius: 5px;
    font-weight: 650;
    &:hover {
      background-color: #f49b5a;
      color: #110e22;
    }
  }
`;
const Skills = styled.div`
display: flex;
p{
  font-size: 15px;
  font-weight: 700;
  &:hover {
      
      color: #f49b5a;
    }
}
  align-items: center;
div{
  height: 10px;
  width: 100%;
}
  .big {
    margin: 10px;
    position: relative;
    width: 60%;
    height: 25px;
    background: #fff;
    border-radius: 20px;
    align-items: center;
    .small {position:absolute;
      top:2.5px;
      left: 5px;
      width: 80%;
      height: 20px;
      background: #000;
      border-radius: 20px;
    
    }
  }
  .big1 {
    margin: 10px;
    position: relative;
    width: 60%;
    height: 25px;
    background: #fff;
    border-radius: 20px;
    align-items: center;
    .small1 {position:absolute;
      top:2.5px;
      left: 5px;
      width: 60%;
      height: 20px;
      background: #000;
      border-radius: 20px;
    
    }
  }
  .big2 {
    margin: 10px;
    position: relative;
    width: 60%;
    height: 25px;
    background: #fff;
    border-radius: 20px;
    align-items: center;
    .small2 {position:absolute;
      top:2.5px;
      left: 5px;
      width: 70%;
      height: 20px;
      background: #000;
      border-radius: 20px;
    
    }
  }
  .big3 {
    margin: 10px;
    position: relative;
    width: 60%;
    height: 25px;
    background: #fff;
    border-radius: 20px;
    align-items: center;
    .small3 {position:absolute;
      top:2.5px;
      left: 5px;
      width: 40%;
      height: 20px;
      background: #000;
      border-radius: 20px;
    
    }
  }
  .big4 {
    margin: 10px;
    position: relative;
    width: 60%;
    height: 25px;
    background: #fff;
    border-radius: 20px;
    align-items: center;
    .small4 {position:absolute;
      top:2.5px;
      left: 5px;
      width: 40%;
      height: 20px;
      background: #000;
      border-radius: 20px;
    
    }
  }
  .big5 {
    margin: 10px;
    position: relative;
    width: 60%;
    height: 25px;
    background: #fff;
    border-radius: 20px;
    align-items: center;
    .small5 {position:absolute;
      top:2.5px;
      left: 5px;
      width: 80%;
      height: 20px;
      background: #000;
      border-radius: 20px;
    
    }
  }
`;