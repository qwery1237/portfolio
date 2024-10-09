import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useAnimation,
} from 'framer-motion';
import { forwardRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';
import { isMobileDevice } from '../utils';
interface IProject {
  src: string;
  name: string;
  techs: string[];
  createdAt: string;
}

const FILTERS = ['all', '2022', '2023', '2024'];
const PROJECTS: IProject[] = [
  {
    src: 'chatapp.png',
    name: 'Kokoa Chat',
    techs: ['HTML', 'CSS'],
    createdAt: '2022',
  },
  { src: 'quiz.png', name: 'Code Crack', techs: ['React'], createdAt: '2023' },
  {
    src: 'fuelgo.png',
    name: 'Fuel Go',
    techs: ['React', 'Node.js'],
    createdAt: '2023',
  },
  {
    src: 'todo.png',
    name: 'Quick List',
    techs: ['React', 'TS'],
    createdAt: '2024',
  },
  {
    src: 'netflix.png',
    name: 'Flix Spot',
    techs: ['React', 'TS'],
    createdAt: '2024',
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  background-color: #f5f5f5;
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
const Projects = styled.div`
  margin: 80px 0;
`;
const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 120px;
  margin-bottom: 36px;
  font-size: 20px;
  @media (max-width: 780px) {
    gap: 10px;
    margin-bottom: 24px;
    font-size: 16px;
  }
  @media (max-width: 390px) {
    gap: calc(10 * 100vw / 390);
    margin-bottom: calc(24 * 100vw / 390);
    font-size: calc(16 * 100vw / 390);
  }
`;
const Filter = styled(motion.button)<{ isSelected: boolean }>`
  position: relative;
  z-index: ${(props) => (props.isSelected ? 0 : 1)};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;
  padding: 6px 28px;
  ${(props) => (props.isSelected ? 'pointer-events: none;' : '')}
  @media (max-width: 390px) {
    padding: calc(6 * 100vw / 390) calc(28 * 100vw / 390);
  }
`;
const Text = styled(motion.div)`
  position: relative;
  z-index: 2;
  cursor: pointer;
`;
const Selected = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.blue};
  color: white;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  @media (max-width: 1170px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 780px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const CardWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Card = styled(motion.img)`
  width: 390px;
  height: 300px;
  @media (max-width: 390px) {
    width: 100vw;
    height: calc(100vw * (10 / 13));
  }
`;
const CardBack = styled(motion.div)`
  width: 390px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  @media (max-width: 390px) {
    width: 100vw;
    height: calc(100vw * (10 / 13));
    font-size: calc(16 * 100vw / 390);
  }
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
  color: ${(props) => props.theme.blue};
`;
const LearnMore = styled(motion.button)`
  text-transform: uppercase;
  cursor: pointer;
  border: solid 2px ${(props) => props.theme.blue};
  padding: 12px 24px;
  transition: background-color 0.5s, color 0.5s;
  &:hover {
    background-color: ${(props) => props.theme.blue};
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

const filterVariants = {
  initial: { opacity: 0, x: -120 },
  enter: { opacity: 1, x: 0 },
};
const projectVariants = {
  initial: { opacity: 0, scale: 0.4, y: 300 },
  enter: (custom: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.45,
      type: 'tween',
      delay: custom,
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.4,
    transition: { duration: 0.45, type: 'tween' },
  },
};
const textVariants = {
  black: {
    color: 'rgba(68, 70, 73, 1)',
    transition: { duration: 0, type: 'tween' },
  },
  white: {
    color: 'rgba(255, 255, 255, 1)',
    transition: { duration: 0, type: 'tween' },
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
const Project = forwardRef<HTMLDivElement>((_, ref) => {
  const [filter, setFilter] = useState('all');
  const [leaving, setLeaving] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [crrModal, setCrrModal] = useState(0);
  const isMobile = isMobileDevice();

  const titleRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const titleAnimation = useAnimation();
  const projectAnimation = useAnimation();
  const textAnimations = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const cardAnimations = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const onClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (leaving) return;
    setLeaving(true);
    const prevFilterI = FILTERS.indexOf(filter);
    const crrFilter = event.currentTarget.innerText.toLowerCase();
    const crrFilterI = FILTERS.indexOf(crrFilter);
    setFilter(crrFilter);

    if (Math.abs(prevFilterI - crrFilterI) === 1) {
      textAnimations[prevFilterI].start('black', { delay: 0.1 });
      await textAnimations[crrFilterI].start('white', { delay: 0.8 });
      setLeaving(false);
      return;
    }
    if (Math.abs(prevFilterI - crrFilterI) === 2) {
      textAnimations[prevFilterI].start('black', { delay: 0.05 });
      textAnimations[crrFilterI].start('white', { delay: 1 });
      if (prevFilterI > crrFilterI) {
        await textAnimations[prevFilterI - 1].start('white', { delay: 0.25 });
        textAnimations[prevFilterI - 1].start('black', { delay: 0.05 });

        return;
      }
      await textAnimations[prevFilterI + 1].start('white', { delay: 0.25 });
      textAnimations[prevFilterI + 1].start('black', { delay: 0.05 });

      return;
    }
    textAnimations[prevFilterI].start('black', { delay: 0.03 });
    textAnimations[crrFilterI].start('white', { delay: 1.1 });
    if (prevFilterI > crrFilterI) {
      await textAnimations[prevFilterI - 1].start('white', { delay: 0.1 });
      textAnimations[prevFilterI - 1].start('black', { delay: 0 });
      await textAnimations[prevFilterI - 2].start('white', { delay: 0.1 });
      textAnimations[prevFilterI - 2].start('black', { delay: 0 });

      return;
    }
    await textAnimations[prevFilterI + 1].start('white', { delay: 0.1 });
    textAnimations[prevFilterI + 1].start('black', { delay: 0 });
    await textAnimations[prevFilterI + 2].start('white', { delay: 0.1 });
    textAnimations[prevFilterI + 2].start('black', { delay: 0 });

    return;
  };
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
    const currentProjectRef = projectRef.current;
    if (!currentTitleRef || !currentProjectRef || !currentWrapperRef) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === currentTitleRef) {
            if (entry.intersectionRatio >= 0.1) {
              titleAnimation.start('enter');
              return;
            }
          }

          if (entry.target === currentProjectRef) {
            if (entry.intersectionRatio >= 0.1) {
              projectAnimation.start('enter');
              setShouldAnimate(false);
              return;
            }
          }
          if (entry.target === currentWrapperRef && !entry.isIntersecting) {
            titleAnimation.start('initial');
            projectAnimation.start('initial');
            return;
          }
        });
      },
      { threshold: [0.1] }
    );
    observer.observe(currentWrapperRef);
    observer.observe(currentTitleRef);
    observer.observe(currentProjectRef);
    return () => {
      observer.unobserve(currentWrapperRef);
      observer.unobserve(currentTitleRef);
      observer.unobserve(currentProjectRef);
    };
  }, []);
  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'visible';
    document.documentElement.style.overflow = showModal ? 'hidden' : 'visible';
    return () => {
      document.body.style.overflow = 'visible';
      document.documentElement.style.overflow = 'visible';
    };
  }, [showModal]);
  return (
    <Wrapper ref={ref}>
      <Title
        variants={titleVariants}
        animate={titleAnimation}
        initial='initial'
      >
        JOURNEY
      </Title>
      <Underline
        variants={underlineVariants}
        animate={titleAnimation}
        initial='initial'
      />
      <Projects>
        <FilterWrapper ref={titleRef}>
          {FILTERS.map((f, i) => (
            <Filter
              key={f}
              isSelected={f === filter}
              onClick={onClick}
              variants={filterVariants}
              initial='initial'
              animate={projectAnimation}
              transition={{
                type: 'tween',
                duration: 0.45,
                delay: 0.3 * (i + 1),
              }}
            >
              <Text
                variants={textVariants}
                animate={textAnimations[i]}
                initial={f === filter ? 'white' : 'black'}
              >
                {f}
              </Text>
              {f === filter ? (
                <Selected
                  layoutId='filter'
                  transition={{ type: 'tween', duration: 1.5 }}
                  onLayoutAnimationComplete={() => setLeaving(false)}
                />
              ) : null}
            </Filter>
          ))}
        </FilterWrapper>
        <Cards ref={projectRef}>
          <LayoutGroup>
            {PROJECTS.map((project, i) => (
              <AnimatePresence key={project.name}>
                {filter === 'all' || project.createdAt === filter ? (
                  <CardWrapper
                    variants={projectVariants}
                    custom={0.45 + 0.15 * i}
                    initial='initial'
                    animate={shouldAnimate ? projectAnimation : 'enter'}
                    exit='exit'
                    layoutId={project.name}
                  >
                    <Card
                      src={project.src}
                      variants={cardImgVariants}
                      animate={cardAnimations[i]}
                      onHoverStart={() => {
                        cardAnimations.map((animation, j) => {
                          if (i === j) return;
                          animation.start('initial');
                        });
                        cardAnimations[i].start('hover');
                      }}
                      onClick={() => isMobile && openModal(i)}
                      initial='initial'
                      transition={{ duration: 0.45, type: 'tween' }}
                    />
                    <CardBack
                      variants={cardBackVariants}
                      animate={cardAnimations[i]}
                      onHoverEnd={() => cardAnimations[i].start('initial')}
                      initial='initial'
                    >
                      <Tag
                        variants={tagVariants}
                        transition={{ duration: 0.45, type: 'tween' }}
                      >
                        <Name>{project.name}</Name>
                        <Techs>
                          {project.techs.reduce(
                            (prev, next) => prev + ' / ' + next
                          )}
                        </Techs>
                      </Tag>
                      <LearnMore
                        variants={btnVariants}
                        transition={{ duration: 0.45, type: 'tween' }}
                        onClick={() => openModal(i)}
                      >
                        Learn more
                      </LearnMore>
                    </CardBack>
                  </CardWrapper>
                ) : null}
              </AnimatePresence>
            ))}
          </LayoutGroup>
        </Cards>
      </Projects>
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
export default Project;
