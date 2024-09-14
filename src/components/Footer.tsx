import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #171717;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  gap: 20px;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
const Icon = styled.a`
  width: 55px;
  height: 55px;
  background-color: #212121;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 28px;
  transition: background-color 0.5s;
  &:hover {
    background-color: ${(props) => props.theme.red};
  }
`;
const Note = styled.div`
  display: flex;
`;
const Name = styled.div``;
const Year = styled.div`
  color: ${(props) => props.theme.blue};
`;
export default function Footer() {
  return (
    <Wrapper>
      <Links>
        <Icon>
          <AiFillGithub />
        </Icon>
        <Icon>
          <AiFillLinkedin />
        </Icon>
      </Links>
      <Note>
        <Name>Jinsoo Son</Name>&nbsp;<Year>©2024</Year>
      </Note>
    </Wrapper>
  );
}
