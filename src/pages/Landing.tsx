import { IoMdArrowDown } from 'react-icons/io';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('background.webp');
  background-size: cover;
  background-position: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Greeting = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;
const Line = styled.div`
  font-size: 32pt;
  line-height: 36pt;
  text-align: center;
`;
const Name = styled.span`
  color: ${(props) => props.theme.blue};
  font-weight: 600;
`;
const ViewWork = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 12px;
  font-size: 20px;
  width: 200px;
  border: solid 2px white;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background-color: ${(props) => props.theme.red};
  }
`;
export default function Landing() {
  return (
    <Wrapper>
      <Greeting>
        <Line>
          Hello, I'm
          <Name> Jinsoo Son</Name>,
          <br />
          I'm a front-end developer.
        </Line>
        <ViewWork>
          View my work <IoMdArrowDown />
        </ViewWork>
      </Greeting>
    </Wrapper>
  );
}
