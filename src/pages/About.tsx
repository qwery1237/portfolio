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
const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
`;
const Underline = styled.div`
  width: 70px;
  border-bottom: 3px solid ${(props) => props.theme.black};
  margin-top: 8px;
`;
const ProfileWrapper = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const Photo = styled.img`
  width: 260px;
  height: 340px;
`;
const Intro = styled.div``;
const Info = styled.div``;
const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HexWrapper = styled.div`
  display: flex;
  position: relative;
`;
const Hexagon = styled(MdHexagon)`
  color: ${(props) => props.theme.blue};
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
`;
const Detail = styled.div``;
const Techs = styled.div``;
const Tech = styled.img`
  width: 100px;
`;
export default function About() {
  return (
    <Wrapper>
      <Title>ABOUT</Title>
      <Underline />
      <ProfileWrapper>
        <Photo src='profile.JPG' />
        <Intro>
          I'm a Front-End Developer based in Calgary, freshly graduated and
          ready to dive into the world of web development. I’m passionate about
          learning new things and using that knowledge to create error-free and
          user-friendly solutions.
        </Intro>
        <Info>
          <InfoItem>
            <HexWrapper>
              <Hexagon />
              <Icon>
                <FaCrosshairs />
              </Icon>
            </HexWrapper>
            <Label>Precision</Label>
            <Detail>
              Every part, from pixels to code, is carefully designed to create
              smooth and perfect user experiences.
            </Detail>
          </InfoItem>
          <InfoItem>
            <HexWrapper>
              <Hexagon />
              <Icon>
                <GiPuzzle />
              </Icon>
            </HexWrapper>
            <Label>Solver</Label>
            <Detail>
              Challenges are seen as hidden opportunities, and complex problems
              are solved with smart and effective solutions.
            </Detail>
          </InfoItem>
          <InfoItem>
            <HexWrapper>
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
        <Techs>
          <Tech src='html.png' />
          <Tech src='css.png' />
          <Tech src='javascript.png' />
          <Tech src='typescript.png' />
          <Tech src='react.png' />
          <Tech src='figma.png' />
        </Techs>
      </ProfileWrapper>
    </Wrapper>
  );
}
