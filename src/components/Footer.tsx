import { motion, useAnimation } from 'framer-motion';
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
const Icon = styled(motion.a)`
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
const IconWrapper = styled(motion.a)`
  position: absolute;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Note = styled.div`
  display: flex;
`;
const Name = styled.div``;
const Year = styled.div`
  color: ${(props) => props.theme.blue};
`;

const iconVariants = {
  initial: { y: 0, opacity: 1 },
  hover: {
    y: [0, 40, -40, 0],
    opacity: [1, 0, 0, 1],
    transition: {
      y: { times: [0, 0.5, 0.5, 1] },
      opacity: { times: [0, 0.3, 0.85, 1] },
    },
  },
};
export default function Footer() {
  const iconAnimations = [useAnimation(), useAnimation()];
  const onHover = (index: number) => iconAnimations[index].start('hover');
  const hoverEnd = (index: number) => iconAnimations[index].start('initial');
  return (
    <Wrapper>
      <Links>
        <Icon onMouseEnter={() => onHover(0)} onMouseLeave={() => hoverEnd(0)}>
          <IconWrapper
            href='https://github.com/qwery1237'
            target='_blank'
            variants={iconVariants}
            animate={iconAnimations[0]}
            initial='initial'
          >
            <AiFillGithub />
          </IconWrapper>
        </Icon>
        <Icon onMouseEnter={() => onHover(1)} onMouseLeave={() => hoverEnd(1)}>
          <IconWrapper
            href='https://www.linkedin.com/in/jinsooson/'
            target='_blank'
            variants={iconVariants}
            animate={iconAnimations[1]}
            initial='initial'
          >
            <AiFillLinkedin />
          </IconWrapper>
        </Icon>
      </Links>
      <Note>
        <Name>Jinsoo Son</Name>&nbsp;<Year>©2024</Year>
      </Note>
    </Wrapper>
  );
}
