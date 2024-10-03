import { motion } from 'framer-motion';
import { FiExternalLink, FiX } from 'react-icons/fi';
import { Fragment } from 'react/jsx-runtime';
import styled from 'styled-components';
interface IModal {
  title: string;
  tag: string;
  detail: string;
}
interface IModalProps {
  crrModal: number;
  closeModal: (event: React.MouseEvent<HTMLDivElement>) => void;
  setShowModal: (showModal: boolean) => void;
}
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
`;
const ModalWrapper = styled(motion.div)`
  width: 700px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
  background-color: white;
  @media (max-width: 800px) {
    width: calc(700 * 100vw / 800);
    box-shadow: rgba(0, 0, 0, 0.75) 0px calc(3 * 100vw / 800)
      calc(10 * 100vw / 800);
  }
`;
const Slide = styled.div`
  background-color: red;
  width: 100%;
  height: 400px;
  @media (max-width: 800px) {
    height: calc(400 * 100vw / 800);
  }
`;
const AppTitle = styled.div`
  padding: 0 24px;
  margin-top: 40px;
  font-size: 24px;
  font-weight: 700;
  @media (max-width: 800px) {
    padding: 0 calc(24 * 100vw / 800);
    margin-top: calc(40 * 100vw / 800);
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
  right: 36px;
  bottom: 36px;
  color: ${(props) => props.theme.red};
  cursor: pointer;
  @media (max-width: 800px) {
    font-size: calc(28 * 100vw / 800);
    right: calc(36 * 100vw / 800);
    bottom: calc(36 * 100vw / 800);
  }
`;
export default function Modal({
  closeModal,
  setShowModal,
  crrModal,
}: IModalProps) {
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
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.2 }}
              transition={{ type: 'tween', duration: 0.3 }}
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
            </ModalWrapper>
          ) : null}
        </Fragment>
      ))}
    </Wrapper>
  );
}
