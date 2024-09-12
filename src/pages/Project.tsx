import { FiExternalLink } from 'react-icons/fi';
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
const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
`;
const Filter = styled.button`
  text-transform: uppercase;
  cursor: pointer;
`;
const Cards = styled.div``;
const CardWrapper = styled.div``;
const Card = styled.img`
  width: 390px;
  height: 300px;
`;
const CardBack = styled.div`
  width: 390px;
  height: 300px;
`;
const Name = styled.div``;
const Techs = styled.div``;
const LearnMore = styled.button`
  text-transform: uppercase;
  cursor: pointer;
`;
const Modals = styled.div``;
const Modal = styled.div`
  width: 700px;
`;
const Slide = styled.div`
  background-color: red;
  width: 100%;
  height: 450px;
`;
const AppTitle = styled.div``;
const AppTag = styled.div``;
const AppDetail = styled.div``;
const Visit = styled.a`
  cursor: pointer;
`;

export default function Project() {
  return (
    <Wrapper>
      <Title>JOURNEY</Title>
      <Underline />
      <FilterWrapper>
        <Filter>all</Filter>
        <Filter>2022</Filter>
        <Filter>2023</Filter>
        <Filter>2024</Filter>
        <Cards>
          <CardWrapper>
            <Card src='chatapp.png' />
            <CardBack>
              <Name>Kokoa Chat</Name>
              <Techs>HTML/CSS</Techs>
              <LearnMore>Learn more</LearnMore>
            </CardBack>
          </CardWrapper>
          <CardWrapper>
            <Card src='quiz.png' />
            <CardBack>
              <Name>Code Crack</Name>
              <Techs>React</Techs>
              <LearnMore>Learn more</LearnMore>
            </CardBack>
          </CardWrapper>
          <CardWrapper>
            <Card src='fuelgo.png' />
            <CardBack>
              <Name>Fuel Go</Name>
              <Techs>React/Node.js</Techs>
              <LearnMore>Learn more</LearnMore>
            </CardBack>
          </CardWrapper>
          <CardWrapper>
            <Card src='todo.png' />
            <CardBack>
              <Name>Quick List</Name>
              <Techs>React/TS</Techs>
              <LearnMore>Learn more</LearnMore>
            </CardBack>
          </CardWrapper>
          <CardWrapper>
            <Card src='netflix.png' />
            <CardBack>
              <Name>Flix Spot</Name>
              <Techs>React/TS</Techs>
              <LearnMore>Learn more</LearnMore>
            </CardBack>
          </CardWrapper>
        </Cards>
        <Modals>
          <Modal>
            <Slide />
            <AppTitle>Kokoa Chat</AppTitle>
            <AppTag>UI Design Practice</AppTag>
            <AppDetail>
              This project was created to improve my HTML and CSS skills by
              replicating the design of a well-known app. The goal was to focus
              on recreating the user interface, understanding layout techniques,
              and enhancing my design accuracy and attention to detail.
            </AppDetail>
            <Visit>
              <FiExternalLink />
              Visit Site
            </Visit>
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
            <Visit>
              <FiExternalLink />
              Visit Site
            </Visit>
          </Modal>
          <Modal>
            <Slide />
            <AppTitle>Fuel Go</AppTitle>
            <AppTag>Gas Station Finder & Review App</AppTag>
            <AppDetail>
              <p>
                Fuel Go is an app that helps users find nearby gas stations
                based on their current location, displaying results in either a
                map or list format. Users can leave reviews, update information
                like prices, and save gas stations to their favorites for easy
                access later. Additionally, users can earn points by writing
                reviews or inviting friends, which can be redeemed for avatars,
                profile frames, or gift cards. Users can also upload their own
                photos as avatars to personalize their profile.
              </p>

              <p>
                As part of a team, I contributed to the Figma design, backend
                API integration with the frontend, implementing several key
                frontend pages, merging my code with teammates' code, and
                performing frontend testing and bug fixing. Additionally, when
                issues arose in the backend code, I reviewed the code,
                identified problems, and suggested solutions to fix them.
              </p>
            </AppDetail>
            <Visit>
              <FiExternalLink />
              Visit Site
            </Visit>
            <Visit>
              <FiExternalLink />
              Visit Figma
            </Visit>
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
              global state efficiently with Recoil. This project helped me
              become more familiar with TypeScript and advanced React concepts.
            </AppDetail>
            <Visit>
              <FiExternalLink />
              Visit Site
            </Visit>
          </Modal>
          <Modal>
            <Slide />
            <AppTitle>Flix Spot</AppTitle>
            <AppTag>Netflix Clone</AppTag>
            <AppDetail>
              Flix Spot is a Netflix-inspired project designed to help me get
              more comfortable with TypeScript and explore animations. I chose
              Netflix due to its elegant animations and UI, which I aimed to
              replicate. I built several core features, including the homepage,
              movie page, TV show page, search page, and detail modal. To
              implement these, I used Framer Motion for smooth animations and
              Styled Components for styling.
            </AppDetail>
            <Visit>
              <FiExternalLink />
              Visit Site
            </Visit>
          </Modal>
        </Modals>
      </FilterWrapper>
    </Wrapper>
  );
}
