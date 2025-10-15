import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { forwardRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';

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
const WorkWrapper = styled.div`
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
  margin-bottom: 100px;

  @media (max-width: 780px) {
    flex-direction: column;
    gap: 36px;
  }
`;

const CardWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  width: 400px;
  @media (max-width: 1200px) {
    width: 350px;
  }
  @media (max-width: 780px) {
    width: 90vw;
    max-width: 400px;
  }
`;

const Card = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const CardBack = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
`;

const Tag = styled(motion.div)`
  text-align: center;
`;
const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
  @media (max-width: 390px) {
    font-size: calc(20 * 100vw / 390);
  }
`;
const Techs = styled.div`
  color: ${(props) => props.theme.red};
`;
const LearnMore = styled(motion.button)`
  text-transform: uppercase;
  cursor: pointer;
  border: solid 2px ${(props) => props.theme.red};
  padding: 12px 24px;
  transition: background-color 0.5s, color 0.5s;
  &:hover {
    background-color: ${(props) => props.theme.red};
    color: white;
  }
  @media (max-width: 390px) {
    padding: calc(12 * 100vw / 390) calc(24 * 100vw / 390);
    border-width: calc(2 * 100vw / 390);
  }
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

const leftBoxVariants = {
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

const cardImgVariants = {
  initial: {
    opacity: 1,
  },
  hover: {
    opacity: 0,
  },
};

const cardBackVariants = {
  initial: { zIndex: -1, transition: { delay: 0.45, duration: 0 } },
  hover: {
    zIndex: 1,
    transition: { duration: 0 },
  },
};
const tagVariants = {
  initial: { y: -60, opacity: 0 },
  hover: { y: 0, opacity: 1 },
};
const btnVariants = {
  initial: { y: 60, opacity: 0 },
  hover: { y: 0, opacity: 1 },
};

const Work = forwardRef<HTMLDivElement>((_, ref) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleAnimation = useAnimation();
  const [showModal, setShowModal] = useState(false);
  const [crrModal, setCrrModal] = useState(0);

  const openModal = (modalIndex: number) => {
    setCrrModal(modalIndex);
    if (!showModal) {
      setShowModal(true);
    }
  };
  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget !== event.target) return;
    setShowModal(false);
  };

  useEffect(() => {
    const currentWrapperRef = (ref as React.RefObject<HTMLDivElement>).current;

    const currentTitleRef = titleRef.current;

    if (!currentTitleRef || !currentWrapperRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === currentTitleRef) {
            if (entry.intersectionRatio >= 0.1) {
              titleAnimation.start('enter');
              return;
            }
          }

          if (entry.target === currentWrapperRef && !entry.isIntersecting) {
            titleAnimation.start('initial');
            return;
          }
        });
      },
      { threshold: [0.1] }
    );
    observer.observe(currentWrapperRef);
    observer.observe(currentTitleRef);
    return () => {
      observer.unobserve(currentWrapperRef);
      observer.unobserve(currentTitleRef);
    };
  }, []);
  return (
    <Wrapper ref={ref}>
      <Title
        variants={titleVariants}
        animate={titleAnimation}
        initial='initial'
      >
        WORK
      </Title>
      <Underline
        variants={underlineVariants}
        animate={titleAnimation}
        initial='initial'
      />
      <WorkWrapper ref={titleRef}>
        <FirstLine>
          <CardWrapper
            variants={leftBoxVariants}
            animate={titleAnimation}
            initial='initial'
            whileHover='hover'
          >
            <Card
              src='QuantumBanner.png'
              variants={cardImgVariants}
              alt='Quantum'
            />
            <CardBack variants={cardBackVariants}>
              <Tag
                variants={tagVariants}
                transition={{ duration: 0.45, type: 'tween' }}
              >
                <Name>Quantum Trading</Name>
                <Techs>
                  React / TS / React Router 7 / Supabase / PostgreSQL
                </Techs>
              </Tag>
              <LearnMore
                variants={btnVariants}
                transition={{ duration: 0.45, type: 'tween' }}
                onClick={() => openModal(5)}
              >
                Learn more
              </LearnMore>
            </CardBack>
          </CardWrapper>
          <CardWrapper
            variants={rightBoxVariants}
            animate={titleAnimation}
            initial='initial'
            whileHover='hover'
          >
            <Card
              src='OlympusBanner.png'
              alt='Olympus'
              variants={cardImgVariants}
            />
            <CardBack variants={cardBackVariants}>
              <Tag
                variants={tagVariants}
                transition={{ duration: 0.45, type: 'tween' }}
              >
                <Name>Olympus</Name>
                <Techs>React / TS</Techs>
              </Tag>
              <LearnMore
                variants={btnVariants}
                transition={{ duration: 0.45, type: 'tween' }}
                onClick={() => openModal(6)}
              >
                Learn more
              </LearnMore>
            </CardBack>
          </CardWrapper>
        </FirstLine>
      </WorkWrapper>
      <AnimatePresence>
        {showModal && (
          <Modal
            crrModal={crrModal}
            closeModal={closeModal}
            setShowModal={setShowModal}
          />
        )}
      </AnimatePresence>
    </Wrapper>
  );
});
export default Work;
