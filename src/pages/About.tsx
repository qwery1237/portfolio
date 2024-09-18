import { forwardRef } from 'react';
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
  flex-direction: column;
`;
const FirstLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 36px;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;
const Photo = styled.img`
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
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    margin-top: 36px;
    gap: 36px;
  }
`;
const InfoItem = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 950px) {
    font-size: 14px;
  }
  @media (max-width: 650px) {
    font-size: 16px;
  }
`;
const HexWrapper = styled.div`
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

const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Wrapper ref={ref}>
      <Title>ABOUT</Title>
      <Underline />
      <ProfileWrapper>
        <FirstLine>
          <Photo src='profile.JPG' />
          <Right>
            <Intro>
              I'm a Front-End Developer based in Calgary, freshly graduated and
              ready to dive into the world of web development.
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
              Challenges are seen as opportunities, and complex problems are
              solved with smart and effective solutions.
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
      </ProfileWrapper>
    </Wrapper>
  );
});
export default About;
