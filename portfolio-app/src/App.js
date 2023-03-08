import styled from "styled-components";

const Wrapper = styled.div`
    width : 100%;
    background: tomato;
`;
const Container = styled.div`
    box-sizing: border-box;
    width : 1200px;
    padding: 0 48px;
    margin: 0 auto;
    background: skyblue;
`;
const Header = styled.div`
  width: 100%;
  height: 30px;
  background: lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Name = styled.div`
  width: 57px;
  height: 20px;
  margin-left: 20px;
`
const Move = styled.div`
  display: flex;
`
const MoveItem = styled.a`
  display: inline-block;
  font-size: 14px;
  margin-left: 50px;  
`
const Section = styled.div`
    display: flex;
    width: 100%;
    overflow-x: scroll;
`
const Introduce = styled.div`
    width: 65%;
    height : 500px;
    margin: 10px;
    border-radius: 20px;
    background: firebrick;
`;
const Profile = styled.div`
  width: 35%;
  height : 500px;
  margin: 10px;
  border-radius: 20px;
  background: aquamarine;
`
const Project = styled.div`
  width: 45%;
  height : 500px;
  margin: 10px;
  border-radius: 20px;
  background: sienna;
  flex-shrink: 0;
`
const Record = styled.div`
  width: 100%;
  height : 350px;
  margin: 10px;
  border-radius: 20px;
  background: cornflowerblue;
`
function App() {
  return (
    <div className="App">
        <Wrapper>
            <Container>
                <Header>
                    <Name>김동현</Name>
                    <Move>
                        <MoveItem>홈</MoveItem>
                        <MoveItem>프로젝트</MoveItem>
                        <MoveItem>컨택트</MoveItem>
                    </Move>
                </Header>
                <Section>
                    <Introduce>
                    </Introduce>
                    <Profile>
                    </Profile>
                </Section>
                <Section>
                    <Project></Project>
                    <Project></Project>
                    <Project></Project>
                    <Project></Project>
                </Section>
                <Section>
                    <Record></Record>
                </Section>
            </Container>

        </Wrapper>
    </div>
  );
}

export default App;
