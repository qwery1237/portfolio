import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FiExternalLink, FiX } from 'react-icons/fi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { Fragment } from 'react/jsx-runtime';
import styled from 'styled-components';
interface IModal {
  title: string;
  tag: string;
  detail: string;
  maxIndex: number;
  links: string[];
}
interface IModalProps {
  crrModal: number;
  closeModal: (event: React.MouseEvent<HTMLDivElement>) => void;
  setShowModal: (showModal: boolean) => void;
}
interface SlideProps {
  direction: 'right' | 'left';
  width: number;
}
const MODALS: IModal[] = [
  {
    title: 'Kokoa Chat',
    tag: 'HTML/CSS Clone',
    detail: '   HTML & CSS practice: KakaoTalk-style UI clone.',
    maxIndex: 6,
    links: [
      'https://earnest-licorice-3a1b49.netlify.app/',
      'https://github.com/qwery1237/kokoa-clone-2021',
    ],
  },
  {
    title: 'Code Crack',
    tag: 'React Practice',
    detail: 'Practice project for React + API (coding quizzes).',
    maxIndex: 5,
    links: [
      'https://jinsquizapp.netlify.app/',
      'https://github.com/qwery1237/Quiz-App---React',
    ],
  },
  {
    title: 'Fuel Go',
    tag: 'Graduation Project',
    detail: 'Team capstone: gas-station finder with map, list, and reviews.',
    maxIndex: 11,
    links: [
      'https://cstp-2204-jin-harinder.netlify.app/',
      'https://github.com/qwery1237/CSTP-2204-Client',
      'https://www.figma.com/community/file/1425250046832718731',
    ],
  },
  {
    title: 'Quick List',
    tag: 'TypeScript Practice',
    detail: 'Practice project for TypeScript + React.',
    maxIndex: 3,
    links: [
      'https://qwery1237.github.io/react-tsx-todo/',
      'https://github.com/qwery1237/react-tsx-todo',
    ],
  },
  {
    title: 'Flix Spot',
    tag: 'Animation Practice',
    detail: 'TypeScript + Framer Motion to recreate Netflix-style animations.',
    maxIndex: 7,
    links: [
      'https://qwery1237.github.io/react-tsx-netflix-clone/',
      'https://github.com/qwery1237/react-tsx-netflix-clone',
    ],
  },
  {
    title: 'Quantum Trading',
    tag: 'Food Packaging Website',
    detail:
      'Developed an ordering site for food takeout containers with a custom email order flow and responsive design.',
    maxIndex: 10,
    links: ['https://quantum-market.vercel.app/'],
  },
  {
    title: 'Olympus',
    tag: 'Apparel Website',
    detail:
      'Built a simple introduction site to showcase custom team uniforms and generate client inquiries.',
    maxIndex: 4,
    links: ['https://quantum-olympus-git-main-qwery1237s-projects.vercel.app/'],
  },
];
const Wrapper = styled(motion.div)`
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
  overflow-x: hidden;
`;
const ModalWrapper = styled(motion.div)`
  width: 700px;
  position: relative;
  overflow-x: hidden;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
  background-color: white;
  @media (max-width: 800px) {
    width: calc(700 * 100vw / 800);
    box-shadow: rgba(0, 0, 0, 0.75) 0px calc(3 * 100vw / 800)
      calc(10 * 100vw / 800);
  }
`;
const Slide = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 400px;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.3);
  user-select: none;
  @media (max-width: 800px) {
    height: calc(400 * 100vw / 800);
  }
`;
const SlideButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 364px;
  width: 100%;
  @media (max-width: 800px) {
    top: calc(364 * 100vw / 800);
  }
`;
const SlideButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: ${(props) => props.theme.blue};
  font-size: 32px;
  transition: scale 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    scale: 1.5;
  }

  @media (max-width: 800px) {
    width: calc(36 * 100vw / 800);
    height: calc(36 * 100vw / 800);
  }
`;
const AppTitle = styled.div`
  padding: 0 24px;
  margin-top: 440px;
  font-size: 24px;
  font-weight: 700;
  @media (max-width: 800px) {
    padding: 0 calc(24 * 100vw / 800);
    margin-top: calc(440 * 100vw / 800);
    font-size: calc(24 * 100vw / 800);
  }
`;
const AppTag = styled.div`
  padding: 0 24px;
  margin-top: 4px;
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.blue};
  @media (max-width: 800px) {
    padding: 0 calc(24 * 100vw / 800);
    margin-top: calc(4 * 100vw / 800);
    font-size: calc(20 * 100vw / 800);
  }
`;
const AppDetail = styled.div`
  padding: 0 24px;
  margin-top: 40px;
  @media (max-width: 800px) {
    padding: 0 calc(24 * 100vw / 800);
    margin-top: calc(40 * 100vw / 800);
    font-size: calc(16 * 100vw / 800);
  }
`;
const Links = styled.div`
  display: flex;
  overflow: hidden;
  gap: 0;
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
  @media (max-width: 800px) {
    padding: calc(12 * 100vw / 800) calc(24 * 100vw / 800);
    margin: calc(40 * 100vw / 800) 0 calc(30 * 100vw / 800)
      calc(24 * 100vw / 800);
    gap: calc(8 * 100vw / 800);
    font-size: calc(16 * 100vw / 800);
  }
`;
const CloseBtn = styled(FiX)`
  font-size: 28px;
  position: absolute;
  right: 24px;
  top: 24px;
  color: ${(props) => props.theme.red};
  cursor: pointer;
  @media (max-width: 800px) {
    font-size: calc(28 * 100vw / 800);
    right: calc(36 * 100vw / 800);
    bottom: calc(36 * 100vw / 800);
  }
`;
const slideVariants = {
  enter: ({ direction, width }: SlideProps) => {
    return {
      x: direction === 'right' ? width : -width,
    };
  },
  visible: {
    x: 0,
  },
  exit: ({ direction, width }: SlideProps) => {
    return {
      x: direction === 'right' ? -width : width,
    };
  },
};
export default function Modal({
  closeModal,
  setShowModal,
  crrModal,
}: IModalProps) {
  const [crrIndex, setCrrIndex] = useState(0);
  const [direction, setDirection] = useState<'right' | 'left'>('right');
  const [leaving, setLeaving] = useState(false);
  const [width, setWidth] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const showPrev = (maxIndex: number) => {
    if (leaving) return;
    setLeaving(true);
    setDirection('left');
    if (crrIndex === 0) {
      setCrrIndex(maxIndex - 1);
      return;
    }
    setCrrIndex((prev) => prev - 1);
  };
  const showNext = () => {
    if (leaving) return;
    setLeaving(true);
    setDirection('right');
    setCrrIndex((prev) => prev + 1);
  };
  useEffect(() => {
    const updateWidth = () => {
      if (slideRef.current) {
        setWidth(slideRef.current.getBoundingClientRect().width);
      }
    };
    setTimeout(() => updateWidth(), 400);
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'tween', duration: 0.3 }}
      onClick={closeModal}
    >
      {MODALS.map((modal, i) => (
        <Fragment key={modal.title}>
          {i === crrModal ? (
            <ModalWrapper
              ref={slideRef}
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.2 }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <AnimatePresence
                initial={false}
                onExitComplete={() => setLeaving(false)}
              >
                <Slide
                  key={crrIndex}
                  custom={{
                    width,
                    direction,
                  }}
                  src={modal.title + (crrIndex % modal.maxIndex) + '.png'}
                  variants={slideVariants}
                  initial='enter'
                  animate='visible'
                  exit='exit'
                  transition={{ type: 'tween', duration: 0.5 }}
                />
              </AnimatePresence>

              <SlideButtonWrapper>
                <SlideButton
                  onMouseEnter={() => setDirection('left')}
                  onClick={() => showPrev(modal.maxIndex)}
                >
                  <HiChevronLeft />
                </SlideButton>
                <SlideButton
                  onMouseEnter={() => setDirection('right')}
                  onClick={showNext}
                >
                  <HiChevronRight />
                </SlideButton>
              </SlideButtonWrapper>
              <AppTitle>{modal.title}</AppTitle>
              <AppTag>{modal.tag}</AppTag>
              <AppDetail>{modal.detail}</AppDetail>
              <Links>
                <Visit href={modal.links[0]} target='_blank'>
                  <FiExternalLink />
                  Visit Site
                </Visit>
                {modal.links[1] && (
                  <Visit href={modal.links[1]} target='_blank'>
                    <FiExternalLink />
                    Visit Github
                  </Visit>
                )}
                {modal.links[2] && (
                  <Visit href={modal.links[2]} target='_blank'>
                    Visit Figma
                  </Visit>
                )}
              </Links>
              <CloseBtn onClick={() => setShowModal(false)} />
            </ModalWrapper>
          ) : null}
        </Fragment>
      ))}
    </Wrapper>
  );
}
