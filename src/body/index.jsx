import React from "react";
import topImg from "../assets/top-img.png";
import recangle2 from "../assets/Rectangle2.png";
import livingroom from "../assets/livingroom.png";
import workspace from "../assets/workspace.png";
import library from "../assets/library.png";

// import recangle2 from '../assets/Recangle2.png'
import {
  Main,
  BodyLeft,
  Top,
  Center,
  Bottom,
  BodyBg,
  BodyImg,
  Inbutton,
  //   body2
  Main2,
  MainTitle,
  SpiceUp,
  MainRectangle,
  Rectangle,
  Provide,
  SeeVideo,
  MainRectangle2,
  Rectangle2,
  OurMission,
  ContMain,
  Applying,
  Main3,
  OurProject,
  Introducing,
  Line1,
  Line2,
  ContProject,
  TitleLivingroom,
  Livingroom,
  TextLivingroom,
  ImgLivingroom,
  Workspace,
  WorkspaceImg,
  WorkspaceTitle,
  WorkspaceText,
  Library,
  LibraryTitle,
  LibraryText,
  LibraryImg,
} from "./style";

const Body = () => {
  return (
    <>
      {/* body1 */}
      <Main>
        <BodyLeft>
          <Top>
            Get the inspiration <br />
            of interior design
            <br /> here
          </Top>
          <Center>
            architecture not only about engineering, it even lands to art and
            aesthetics. With us, you will get a residentical design with an
            extraordinary touch of art.
          </Center>
          <Bottom>
            <Inbutton>Let's go</Inbutton>
          </Bottom>
        </BodyLeft>
        <BodyBg>
          <BodyImg src={topImg} />
        </BodyBg>
      </Main>
      {/*body2  */}
      <Main2>
        <MainTitle>How it works</MainTitle>
        <SpiceUp>Spice up your space even simpler than you think</SpiceUp>
        <MainRectangle>
          <Rectangle />
          <>
            <Provide>
              We provide design and build for commercial building, interior and
              furniture to improve the better life.
              <SeeVideo>SEE VIDEO</SeeVideo>
            </Provide>
          </>
        </MainRectangle>
        <MainRectangle2>
          <Rectangle2 src={recangle2} />
          <ContMain>
            <OurMission>
              Our mission is to deliver aesthetic visual for your home
            </OurMission>
            <Applying>
              By applying bacis psychology principles, we are going to explain
              how perception works and how we can use this understanding to
              maximise the space that we occupy in our homes.
            </Applying>
          </ContMain>
        </MainRectangle2>
      </Main2>
      <Main3>
        <OurProject>Our project</OurProject>
        <Introducing>Introducing our first official project</Introducing>
        <Line1 />
        <Line2 />
        <ContProject>
          <Livingroom>
            <TitleLivingroom>Project Livingroom</TitleLivingroom>
            <TextLivingroom>
              A simple guide to create the perfect livingro- om for . Night Watc
              works beautifully in a wi- de gamut of arrangements.
            </TextLivingroom>
            <ImgLivingroom src={livingroom} />
          </Livingroom>
          <Workspace>
            <WorkspaceImg src={workspace} />
            <WorkspaceTitle>Project workspace</WorkspaceTitle>
            <WorkspaceText>
              A simple guide to create the perfect livingro- om for . Night Watc
              works beautifully in a wi- de gamut of arrangements.
            </WorkspaceText>
          </Workspace>
          <Library>
            <LibraryTitle>Library</LibraryTitle>
            <LibraryText>
              A simple guide to create the perfect livingro- om for . Night Watc
              works beautifully in a wi- de gamut of arrangements.
            </LibraryText>
            <LibraryImg src={library} />
          </Library>
        </ContProject>
      </Main3>
    </>
  );
};
export default Body;
