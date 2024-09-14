import { FiExternalLink, FiX } from 'react-icons/fi';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  background-color: #f5f5f5;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
`;
const Underline = styled.div`
  width: 70px;
  border-bottom: 3px solid ${(props) => props.theme.black};
  margin-top: 8px;
`;
const Projects = styled.div`
  margin-top: 80px;
`;
const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 120px;
  margin-bottom: 36px;
  font-size: 20px;
  @media (max-width: 780px) {
    gap: 60px;
    margin-bottom: 24px;
    font-size: 16px;
  }
  @media (max-width: 390px) {
    gap: calc(60 * 100vw / 390);
    margin-bottom: calc(24 * 100vw / 390);
    font-size: calc(16 * 100vw / 390);
  }
`;
const Filter = styled.button`
  text-transform: uppercase;

  cursor: pointer;
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1170px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 780px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Card = styled.img`
  width: 390px;
  height: 300px;
  @media (max-width: 390px) {
    width: 100vw;
    height: calc(100vw * (10 / 13));
  }
`;
const CardBack = styled.div`
  width: 390px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  justify-content: space-evenly;
  @media (max-width: 390px) {
    width: 100vw;
    height: calc(100vw * (10 / 13));
    font-size: calc(16 * 100vw / 390);
  }
`;
const Tag = styled.div`
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
const LearnMore = styled.button`
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
const Modals = styled.div``;
const Modal = styled.div`
  width: 700px;
  position: relative;
`;
const Slide = styled.div`
  background-color: red;
  width: 100%;
  height: 450px;
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
  margin: 40px 0 40px 24px;
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
  right: 24px;
  bottom: 48px;
  color: ${(props) => props.theme.red};
  cursor: pointer;
`;
export default function Project() {
  return (
    <Wrapper>
      <Title>JOURNEY</Title>
      <Underline />
      <Projects>
        <FilterWrapper>
          <Filter>all</Filter>
          <Filter>2022</Filter>
          <Filter>2023</Filter>
          <Filter>2024</Filter>
        </FilterWrapper>
        <Cards>
          <CardWrapper>
            <Card src='chatapp.png' />
            <CardBack>
              <Tag>
                <Name>Kokoa Chat</Name>
                <Techs>HTML / CSS</Techs>
              </Tag>
              <LearnMore>Learn more</LearnMore>
            </CardBack>
          </CardWrapper>
          <CardWrapper>
            <Card src='quiz.png' />
            <CardBack>
              <Tag>
                <Name>Code Crack</Name>
                <Techs>React</Techs>
              </Tag>
              <LearnMore>Learn more</LearnMore>
            </CardBack>
          </CardWrapper>
          <CardWrapper>
            <Card src='fuelgo.png' />
            <CardBack>
              <Tag>
                <Name>Fuel Go</Name>
                <Techs>React / Node.js</Techs>
              </Tag>
              <LearnMore>Learn more</LearnMore>
            </CardBack>
          </CardWrapper>
          <CardWrapper>
            <Card src='todo.png' />
            <CardBack>
              <Tag>
                <Name>Quick List</Name>
                <Techs>React / TS</Techs>
              </Tag>
              <LearnMore>Learn more</LearnMore>
            </CardBack>
          </CardWrapper>
          <CardWrapper>
            <Card src='netflix.png' />
            <CardBack>
              <Tag>
                <Name>Flix Spot</Name>
                <Techs>React / TS</Techs>
              </Tag>
              <LearnMore>Learn more</LearnMore>
            </CardBack>
          </CardWrapper>
        </Cards>
      </Projects>
      <Modals>
        <Modal>
          <Slide />
          <AppTitle>Kokoa Chat</AppTitle>
          <AppTag>UI Design Practice</AppTag>
          <AppDetail>
            This project was created to improve my HTML and CSS skills by
            replicating the design of a well-known app. The goal was to focus on
            recreating the user interface, understanding layout techniques, and
            enhancing my design accuracy and attention to detail.
          </AppDetail>
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
          <CloseBtn />
        </Modal>
        <Modal>
          <Slide />
          <AppTitle>Code Crack</AppTitle>
          <AppTag>Coding Quiz App</AppTag>
          <AppDetail>
            Code Crack is a coding quiz app that retrieves challenges from a
            quiz API using Axios, allowing users to solve quizzes, review
            explanations for each question, and view their score. Built as a
            project to get familiar with React and API integration, it focuses
            on data fetching, state management, and enhancing user interaction
            within the app.
          </AppDetail>
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
          <CloseBtn />
        </Modal>
        <Modal>
          <Slide />
          <AppTitle>Fuel Go</AppTitle>
          <AppTag>Gas Station Finder & Review App</AppTag>
          <AppDetail>
            <p>
              Fuel Go is an app that helps users find nearby gas stations based
              on their current location, displaying results in either a map or
              list format. Users can leave reviews, update information like
              prices, and save gas stations to their favorites for easy access
              later. Additionally, users can earn points by writing reviews or
              inviting friends, which can be redeemed for avatars, profile
              frames, or gift cards. Users can also upload their own photos as
              avatars to personalize their profile.
            </p>

            <p>
              As part of a team, I contributed to the Figma design, backend API
              integration with the frontend, implementing several key frontend
              pages, merging my code with teammates' code, and performing
              frontend testing and bug fixing. Additionally, when issues arose
              in the backend code, I reviewed the code, identified problems, and
              suggested solutions to fix them.
            </p>
          </AppDetail>
          <Links>
            <Visit>
              <FiExternalLink />
              Visit Site
            </Visit>
            <Visit>
              <FiExternalLink />
              Visit Github
            </Visit>
            <Visit>
              <FiExternalLink />
              Visit Figma
            </Visit>
          </Links>
          <CloseBtn />
        </Modal>
        <Modal>
          <Slide />
          <AppTitle>Quick List</AppTitle>
          <AppTag>To-Do App</AppTag>
          <AppDetail>
            Quick List is a to-do app built to improve my proficiency with
            TypeScript while also learning new React libraries. I used React
            Hook Form to simplify form state management, implemented
            drag-and-drop functionality using hello-pangea/dnd, and managed
            global state efficiently with Recoil. This project helped me become
            more familiar with TypeScript and advanced React concepts.
          </AppDetail>
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
          <CloseBtn />
        </Modal>
        <Modal>
          <Slide />
          <AppTitle>Flix Spot</AppTitle>
          <AppTag>Netflix Clone</AppTag>
          <AppDetail>
            Flix Spot is a Netflix-inspired project designed to help me get more
            comfortable with TypeScript and explore animations. I chose Netflix
            due to its elegant animations and UI, which I aimed to replicate. I
            built several core features, including the homepage, movie page, TV
            show page, search page, and detail modal. To implement these, I used
            Framer Motion for smooth animations and Styled Components for
            styling.
          </AppDetail>
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
          <CloseBtn />
        </Modal>
      </Modals>
    </Wrapper>
  );
}
