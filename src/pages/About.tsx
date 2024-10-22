import { motion, useAnimation } from 'framer-motion';
import { forwardRef, useEffect, useRef } from 'react';
import { FaCrosshairs } from 'react-icons/fa';
import { GiBookmarklet, GiPuzzle } from 'react-icons/gi';
import { MdHexagon } from 'react-icons/md';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`;
const Title = styled(motion.div)`
  font-size: 40px;
  font-weight: 600;
`;
const Underline = styled(motion.div)`
  width: 70px;
  border-bottom: 3px solid ${(props) => props.theme.black};
  margin-top: 8px;
`;
const ProfileWrapper = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const FirstLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 160px;

  @media (max-width: 780px) {
    flex-direction: column;
    gap: 36px;
  }
`;
const Right = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;
const Photo = styled(motion.img)`
  width: 260px;
  height: 340px;
`;
const Intro = styled.div`
  width: 300px;
  text-align: center;
`;
const Techs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const Tech = styled.img`
  width: 100px;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 80px;
  margin-bottom: 80px;
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
    margin-top: 36px;
    gap: 36px;
  }
`;
const InfoItem = styled(motion.div)`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 950px) {
    font-size: 14px;
  }
  @media (max-width: 780px) {
    font-size: 16px;
  }
`;
const HexWrapper = styled(motion.div)`
  display: flex;
  position: relative;
`;
const Hexagon = styled(MdHexagon)`
  color: ${(props) => props.theme.red};
  font-size: 100px;
`;
const Icon = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
`;
const Label = styled.div`
  font-weight: 600;
  font-size: 24px;
  margin-top: 12px;
`;
const Detail = styled.div`
  margin-top: 12px;
`;
const titleVariants = {
  initial: { opacity: 0, x: -300 },
  enter: { opacity: 1, x: 0, transition: { type: 'tween', duration: 0.45 } },
};
const underlineVariants = {
  initial: { opacity: 0, x: -200 },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      type: 'tween',
      duration: 0.3,
    },
  },
};
const photoVariants = {
  initial: { opacity: 0, x: -300 },
  enter: {
    opacity: 1,
    x: 0,
    transition: { type: 'tween', duration: 0.45, delay: 0.5 },
  },
};
const rightBoxVariants = {
  initial: { opacity: 0, x: 300 },
  enter: {
    opacity: 1,
    x: 0,
    transition: { type: 'tween', duration: 0.45, delay: 0.5 },
  },
};
const infoVariants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
  },
};
const logoVariants = {
  initial: { scale: 0.2 },
  enter: {
    scale: 1,
  },
};
const About = forwardRef<HTMLDivElement>((_, ref) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const titleAnimation = useAnimation();
  const infoAnimation = useAnimation();
  useEffect(() => {
    const currentWrapperRef = (ref as React.RefObject<HTMLDivElement>).current;

    const currentTitleRef = titleRef.current;
    const currentInfoRef = infoRef.current;
    if (!currentTitleRef || !currentInfoRef || !currentWrapperRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === currentTitleRef) {
            if (entry.intersectionRatio >= 0.1) {
              titleAnimation.start('enter');
              return;
            }
          }

          if (entry.target === currentInfoRef) {
            if (entry.intersectionRatio >= 0.1) {
              infoAnimation.start('enter');
              return;
            }
          }
          if (entry.target === currentWrapperRef && !entry.isIntersecting) {
            titleAnimation.start('initial');
            infoAnimation.start('initial');
            return;
          }
        });
      },
      { threshold: [0.1] }
    );
    observer.observe(currentWrapperRef);
    observer.observe(currentTitleRef);
    observer.observe(currentInfoRef);
    return () => {
      observer.unobserve(currentWrapperRef);
      observer.unobserve(currentTitleRef);
      observer.unobserve(currentInfoRef);
    };
  }, []);
  return (
    <Wrapper ref={ref}>
      <Title
        variants={titleVariants}
        animate={titleAnimation}
        initial='initial'
      >
        ABOUT
      </Title>
      <Underline
        variants={underlineVariants}
        animate={titleAnimation}
        initial='initial'
      />
      <ProfileWrapper ref={titleRef}>
        <FirstLine>
          <Photo
            src='profile.jpeg'
            variants={photoVariants}
            animate={titleAnimation}
            initial='initial'
          />
          <Right
            variants={rightBoxVariants}
            animate={titleAnimation}
            initial='initial'
          >
            <Intro>
              I'm a Front-End Developer based in Calgary, freshly graduated and
              ready to dive i nto the world of web development.
              <br /> I’m passionate about learning new things and using that
              knowledge to create error-free and user-friendly solutions.
            </Intro>

            <Techs>
              <Tech src='html.png' />
              <Tech src='css.png' />
              <Tech src='javascript.png' />
              <Tech src='typescript.png' />
              <Tech src='react.png' />
              <Tech src='figma.png' />
            </Techs>
          </Right>
        </FirstLine>
        <Info>
          <InfoItem
            variants={infoVariants}
            initial='initial'
            animate={infoAnimation}
            transition={{ type: 'tween', duration: 0.45 }}
          >
            <HexWrapper
              variants={logoVariants}
              initial='initial'
              animate={infoAnimation}
              transition={{
                type: 'spring',
                duration: 0.45,
                bounce: 10,
                damping: 10,
              }}
            >
              <Hexagon />
              <Icon>
                <FaCrosshairs />
              </Icon>
            </HexWrapper>
            <Label>Precision</Label>
            <Detail ref={infoRef}>
              Every part, from pixels to code, is carefully designed to create
              smooth and perfect user experiences.
            </Detail>
          </InfoItem>
          <InfoItem
            variants={infoVariants}
            initial='initial'
            animate={infoAnimation}
            transition={{ type: 'tween', duration: 0.45, delay: 0.3 }}
          >
            <HexWrapper
              variants={logoVariants}
              initial='initial'
              animate={infoAnimation}
              transition={{
                type: 'spring',
                duration: 0.45,
                delay: 0.3,
                bounce: 10,
                damping: 10,
              }}
            >
              <Hexagon />
              <Icon>
                <GiPuzzle />
              </Icon>
            </HexWrapper>
            <Label>Solver</Label>
            <Detail>
              Challenges are seen as opportunities, and complex problems are
              solved with smart and effective solutions.
            </Detail>
          </InfoItem>
          <InfoItem
            variants={infoVariants}
            initial='initial'
            animate={infoAnimation}
            transition={{ type: 'tween', duration: 0.45, delay: 0.6 }}
          >
            <HexWrapper
              variants={logoVariants}
              initial='initial'
              animate={infoAnimation}
              transition={{
                type: 'spring',
                duration: 0.45,
                delay: 0.6,
                bounce: 10,
                damping: 10,
              }}
            >
              <Hexagon />
              <Icon>
                <GiBookmarklet />
              </Icon>
            </HexWrapper>
            <Label>Learner</Label>
            <Detail>
              Eager to learn, always exploring new technologies and quickly
              adapting to new frameworks and languages to grow as a developer.
            </Detail>
          </InfoItem>
        </Info>
      </ProfileWrapper>
    </Wrapper>
  );
});
export default About;
