import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #171717;
  display: flex;
  justify-content: center;
  height: 72px;
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
    </Wrapper>
  );
}
