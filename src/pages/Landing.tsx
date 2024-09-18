import { useScroll } from 'framer-motion';
import { forwardRef, RefObject } from 'react';
import { IoMdArrowDown } from 'react-icons/io';
import styled from 'styled-components';
interface ILandingProps {
  aboutRef: RefObject<HTMLDivElement>;
}
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
  @media (max-width: 550px) {
    gap: calc(18 * 100vw / 550);
  }
`;
const Line = styled.div`
  font-size: 42px;
  line-height: 48px;
  text-align: center;
  @media (max-width: 550px) {
    font-size: calc(42 * 100vw / 550);
    line-height: calc(48 * 100vw / 550);
  }
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
  transition: background-color 0.5s;
  &:hover {
    background-color: ${(props) => props.theme.red};
  }
  @media (max-width: 550px) {
    padding: calc(12 * 100vw / 550);
    font-size: calc(20 * 100vw / 550);
    width: calc(200 * 100vw / 550);
    border-width: calc(2 * 100vw / 550);
  }
`;
const Landing = forwardRef<HTMLDivElement, ILandingProps>(
  ({ aboutRef }, ref) => {
    const { scrollY } = useScroll();
    const scrollToAbout = () => {
      if (aboutRef.current == null) return;
      const top =
        aboutRef.current.getBoundingClientRect().top + scrollY.get() - 71.98;
      window.scrollTo({ top, behavior: 'smooth' });
    };
    return (
      <Wrapper ref={ref}>
        <Greeting>
          <Line>
            Hello, I'm
            <Name> Jinsoo Son</Name>,
            <br />
            I'm a front-end developer.
          </Line>
          <ViewWork onClick={scrollToAbout}>
            View my work <IoMdArrowDown />
          </ViewWork>
        </Greeting>
      </Wrapper>
    );
  }
);
export default Landing;
