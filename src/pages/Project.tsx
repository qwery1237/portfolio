import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useAnimation,
} from 'framer-motion';
import { forwardRef, Fragment, useEffect, useRef, useState } from 'react';
import { FiExternalLink, FiX } from 'react-icons/fi';
import styled from 'styled-components';
interface IProject {
  src: string;
  name: string;
  techs: string[];
  createdAt: string;
}
interface IModal {
  title: string;
  tag: string;
  detail: string;
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
const MODALS: IModal[] = [
  {
    title: 'Kokoa Chat',
    tag: 'Chat app',
    detail:
      '   This project was created to improve my HTML and CSS skills by replicating the design of a well-known app. The goal was to focus on recreating the user interface, understanding layout techniques, and enhancing my design accuracy and attention to detail.',
  },
  {
    title: 'Code Crack',
    tag: 'Coding Quiz App',
    detail:
      ' Code Crack is a coding quiz app designed to improve my skills in React and API integration. Using Axios to fetch quiz challenges from an API, the app allows users to solve coding quizzes, review detailed explanations for each question, and track their score. This project helped me practice data fetching, state management, and creating a seamless user experience.',
  },
  {
    title: 'Fuel Go',
    tag: 'Gas Station Finder & Review App',
    detail:
      'Fuel Go is an app designed to help users find nearby gas stations based on their location, displaying results in both map and list formats. This project was a collaborative effort with a friend from school, where our main goals were to build a responsive web design, create a user-friendly interface, and ensure the app was error-free. Through this project, I gained experience in collaborating via GitHub, connecting backend APIs with the frontend, building a responsive and convenient UI, and troubleshooting issues during development.',
  },
  {
    title: 'Quick List',
    tag: 'To-Do App',
    detail:
      '    Quick List is a to-do app built to improve my proficiency with TypeScript while also learning new React libraries. I used React Hook Form to simplify form state management, implemented drag-and-drop functionality using hello-pangea/dnd, and managed global state efficiently with Recoil. This project helped me become more familiar with TypeScript and advanced React concepts.',
  },
  {
    title: 'Flix Spot',
    tag: 'Netflix Clone',
    detail:
      'Flix Spot is a Netflix-inspired project designed to help me get more comfortable with TypeScript and explore animations. I chose Netflix due to its elegant animations and UI, which I aimed to replicate. I built several core features, including the homepage, movie page, TV show page, search page, and detail modal. To implement these, I used Framer Motion for smooth animations and Styled Components for styling.',
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
const Modals = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
`;
const Modal = styled(motion.div)`
  width: 700px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
  background-color: white;
`;
const Slide = styled.div`
  background-color: red;
  width: 100%;
  height: 400px;
`;
const AppTitle = styled.div`
  padding: 0 24px;
  margin-top: 40px;
  font-size: 24px;
  font-weight: 700;
`;
const AppTag = styled.div`
  padding: 0 24px;
  margin-top: 4px;
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.blue};
`;
const AppDetail = styled.div`
  padding: 0 24px;
  margin-top: 40px;
`;
const Links = styled.div`
  display: flex;
`;
const Visit = styled.a`
  cursor: pointer;
  width: fit-content;
  padding: 12px 24px;
  margin: 40px 0 30px 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${(props) => props.theme.blue};
  color: white;
  transition: background-color 0.5s, color 0.5s;
  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.blue};
  }
`;
const CloseBtn = styled(FiX)`
  font-size: 28px;
  position: absolute;
  right: 36px;
  bottom: 36px;
  color: ${(props) => props.theme.red};
  cursor: pointer;
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
          <Modals
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
            onClick={closeModal}
          >
            {MODALS.map((modal, i) => (
              <Fragment key={modal.title}>
                {i === crrModal ? (
                  <Modal
                    initial={{ opacity: 0, scale: 0.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.2 }}
                    transition={{ type: 'tween', duration: 0.45 }}
                  >
                    <Slide />
                    <AppTitle>{modal.title}</AppTitle>
                    <AppTag>{modal.tag}</AppTag>
                    <AppDetail>{modal.detail}</AppDetail>
                    <Links>
                      <Visit>
                        <FiExternalLink />
                        Visit Site
                      </Visit>
                      <Visit>
                        <FiExternalLink />
                        Visit Github
                      </Visit>
                    </Links>
                    <CloseBtn onClick={() => setShowModal(false)} />
                  </Modal>
                ) : null}
              </Fragment>
            ))}
          </Modals>
        )}
      </AnimatePresence>
    </Wrapper>
  );
});
export default Project;
