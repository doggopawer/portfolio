import styled from "styled-components";
import P1 from "./assets/p1.jpeg";
import P2 from "./assets/p2.jpeg";
import P3 from "./assets/p3.jpeg";
import P4 from "./assets/p4.jpeg";
import ProfileImg from "./assets/profile2.webp";
import IntroImg from "./assets/intro.jpg";
import JsImg from "./assets/node3.png";
import ReactImg from "./assets/react.png";
import VueImg from "./assets/vue.png";
import JavaImg from "./assets/java.png";
import SpringImg from "./assets/spring.png";
import MySqlImg from "./assets/mysql2.png";
import {useEffect, useRef} from "react";

const Wrapper = styled.div`
    width : 100%;
`;
const Container = styled.div`
    box-sizing: border-box;
    width : 1200px;
    padding: 0 48px;
    margin: 0 auto;
`;
const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  background: white;
  border-bottom: 1px solid lightgray;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.5s ease;
`
const Move = styled.div`
  display: flex;
  margin-right: 20px;
`
const MoveItem = styled.a`
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  margin-left: 50px;  
  cursor: pointer;
`
const Section = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`
const FlexWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  transition: 0.5s ease-in;
  margin-bottom: 50px;
`
const Introduce = styled.div`
    box-sizing: border-box;
    width: 62%;
    height : 500px;
    padding: 40px;
    margin: 10px;
    border-radius: 20px;
    background-image: url(${IntroImg});
    background-size: cover;
    transition: 0.5s ease-out;
    opacity: 0;
    transform: scale(0.9);
`;
const Big = styled.p`
  font-size: 40px;
  font-weight: bolder;
  line-height: 55px;
`
const Small = styled.p`
  margin-top: 24px;
  font-size: 16px;
  line-height: 24px;
`
const Bottom = styled.div`
  margin-top: 150px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: blue;
  color: white;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
`

const Profile = styled.div`
  width: 34%;
  height : 500px;
  margin: 10px;
  border-radius: 20px;
  background-image: url(${ProfileImg});
  background-size: cover;
  background-repeat: no-repeat;
  filter : blur(1.5px);
  opacity: 0;
  transition: 0.5s ease-out;
}
`
const Project = styled.div`
  width: 48%;
  height : 400px;
  border-radius: 20px;
  cursor: pointer;
  flex-shrink: 0;
  box-shadow: 1px 10px 10px lightgray;
  position: relative;
  margin-bottom: 45px;
`
const ProjectImg = styled.img`
  position: relative;
  width : 100%;
  height : 400px;
  border-radius: 20px;
  cursor: pointer;
  flex-shrink: 0;
  object-fit: cover;
  &:hover {
    transform: translateY(-10%);
    transition: 0.5s ease;
  } 
  z-index: 2;
`
const ProjectTitle = styled.h2`
    position: absolute;
    bottom: 5px;
    left : 15px;
    font-size: 16px;
    padding-top: 30px;
    text-align: center;
    z-index: 1;
`
const ScrollX = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height : 300px;
  overflow-x: scroll;
  border-radius: 20px;
  opacity: 0;
  transition: 0.5s ease-in;
  margin-bottom: 40px ;
`

const Skill = styled.img`
  display : inline-block;
  background: #FFF;
  width: 40%;
  height : 90%;
  object-fit: contain;
  margin: 10px;
  border-radius: 20px;
  flex-shrink: 0;
  box-shadow: 10px 5px 5px lightgray;
  &:hover {
    transform: scale(1.02);
    transition: 0.5s ease;
  }
`

function App() {
    const headerEl = useRef(null);
    const profileEl = useRef(null);
    const introEl = useRef(null);
    const skillEl = useRef(null);
    const projectEl = useRef(null);
    const move = (value) => {
        if(value === "home") introEl.current.scrollIntoView({ behavior: 'smooth' });
        else if(value === "project") projectEl.current.scrollIntoView({ behavior: 'smooth' });
        else if(value === "skill") skillEl.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        setTimeout(() => {
            headerEl.current.style = "opacity:1;";
        }, 1000);
        setTimeout(() => {
            profileEl.current.style = "opacity:1;"
        }, 2500);
        setTimeout(() => {
            introEl.current.style = "opacity: 1; transform: scale(1.0);";
        }, 2900);
        setTimeout(() => {
            skillEl.current.style = "opacity: 1;";
        }, 3300);
    },[]);


  return (
    <div className="App">
        <Wrapper>
            <Container>
                <Header ref={headerEl}>
                    <Move>
                        <MoveItem onClick={() => move("home")}>HOME</MoveItem>
                        <MoveItem onClick={() => move("skill")}>SKILL</MoveItem>
                        <MoveItem onClick={() => move("project")}>PROJECT</MoveItem>
                    </Move>
                </Header>
                <Section>
                    <Introduce ref={introEl}>
                        <Big>
                            안녕하세요.<br/>
                            프론트엔드 신입 개발자<br/>
                            김동현 입니다.
                        </Big>
                        <Small>
                            사용자 경험 증대와 웹 성능 향상을 위주로 부단히 공부해 왔습니다.<br/>
                            믿고 써주시면 후회하지 않습니다.
                        </Small>
                        <Bottom>
                            이력 확인
                        </Bottom>
                    </Introduce>
                    <Profile src = {ProfileImg} ref={profileEl}>
                    </Profile>
                </Section>
                <ScrollX ref={skillEl}>
                    <Skill src ={JsImg}></Skill>
                    <Skill src={JavaImg}></Skill>
                    <Skill src ={MySqlImg}></Skill>
                    <Skill src={ReactImg}></Skill>
                    <Skill src={VueImg}></Skill>
                    <Skill src ={SpringImg}></Skill>
                </ScrollX>
                <FlexWrap ref = {projectEl}>
                    <Project>
                        <ProjectImg src = {P1}></ProjectImg>
                        <ProjectTitle>어드민 페이지</ProjectTitle>
                    </Project>
                    <Project>
                        <ProjectImg src = {P2}></ProjectImg>
                        <ProjectTitle>유튜브 성능 개선</ProjectTitle>
                    </Project>
                    <Project>
                        <ProjectImg src = {P3}></ProjectImg>
                        <ProjectTitle>해커 뉴스 리뉴얼</ProjectTitle>
                    </Project>
                    <Project>
                        <ProjectImg src = {P4}></ProjectImg>
                        <ProjectTitle>페인트 회사 외주</ProjectTitle>
                    </Project>
                </FlexWrap>
            </Container>
        </Wrapper>
    </div>
  );
}

export default App;
