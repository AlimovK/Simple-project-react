import styled, { css } from "styled-components";
import bg from "../assets/top-bg.png";
import recangle from "../assets/Rectangle.png";
const common = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const line = css`
  width: 135px;
  height: 0px;
  border: 5px solid #58a9a5;
`;
const project = css`
  width: 386px;
  height: 60px;
  font-weight: bold;
  font-size: 40px;
  line-height: 60px;
  color: #58a9a5;
`;
const projectText = css`
  width: 453px;
  height: 90px;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #486958;
  margin-top: 5px;
`;
export const Main = styled.div`
  display: flex;
  margin-top: 105px;
  width: 100%;
`;
export const BodyLeft = styled.div``;
export const Top = styled.div`
  width: 674px;
  height: 315px;
  font-weight: 800;
  font-size: 70px;
  line-height: 105px;
  color: #1c2323;
`;
export const Center = styled.div`
  width: 743px;
  height: 180px;
  font-weight: normal;
  font-size: 30px;
  line-height: 45px;
  color: #404242;
`;
export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 271px;
  height: 80px;
  background: #58a9a5;
  border-radius: 20px 20px 20px 0px;
  cursor: pointer;
`;
export const Inbutton = styled.span`
  width: 98px;
  height: 38px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 37px;
  color: #fff;
`;

export const BodyBg = styled.div`
  text-align: center;
  width: 833.87px;
  height: 782px;
  background: #ccf0e6;
  border-radius: 120px;
  background-image: url(${bg});
`;
export const BodyImg = styled.img`
  width: 723px;
  height: 723px;
`;

// body2
export const Main2 = styled.div`
  ${common}
  margin-top: 120px;
`;
export const MainTitle = styled.div`
  width: 460px;
  height: 105px;
  font-weight: 800;
  font-size: 70px;
  line-height: 105px;
  text-align: center;
  color: #1c2323;
`;
export const SpiceUp = styled.div`
  width: 506px;
  height: 90px;
  font-size: 30px;
  line-height: 45px;
  text-align: center;
  color: #404242;
`;
export const MainRectangle = styled.div`
  display: flex;
  margin-top: 71px;
`;

export const Rectangle = styled.div`
  width: 1063px;
  height: 350px;
  background: url(${recangle});
  border-radius: 10px 0px 0px 10px;
`;
export const Provide = styled.div`
  width: 549px;
  height: 350px;
  background: #ccf0e6;
  border-radius: 0px 10px 10px 0px;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #486958;
  padding: 115px 160px 115px 106px;
`;

export const SeeVideo = styled.div`
  width: 130px;
  height: 30px;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #486958;
  margin-top: 45px;
`;
export const MainRectangle2 = styled.div`
  display: flex;
  margin-top: 150px;
  width: 100%;
`;
export const Rectangle2 = styled.img`
  width: 642px;
  height: 650px;
`;
export const ContMain = styled.div`
  margin-left: 145px;
`;
export const OurMission = styled.div`
  width: 487px;
  height: 180px;
  font-weight: bold;
  font-size: 40px;
  line-height: 60px;
  color: #1c2323;
`;
export const Applying = styled.div`
  width: 708px;
  margin-top: 50px;
  height: 225px;
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;
  color: #486958;
`;
export const Main3 = styled.div`
  ${common}
  margin-top: 120px;
`;
export const OurProject = styled.h1`
  width: 408px;
  height: 105px;
  font-weight: 800;
  font-size: 70px;
  line-height: 105px;
  text-align: center;
  color: #1c2323;
`;

export const Introducing = styled.div`
  width: 515px;
  margin-top: 20px;
  height: 45px;
  font-size: 30px;
  line-height: 45px;
  text-align: center;
  color: #404242;
`;
export const Line1 = styled.div`
  ${line}
  margin-top: 51px;
`;
export const Line2 = styled.div`
  ${line}
  margin-top: 15px;
`;
export const ContProject = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 94px;
`;
export const Livingroom = styled.div``;
export const TitleLivingroom = styled.div`
  ${project}
`;
export const TextLivingroom = styled.div`
  ${projectText}
  margin-top: 5px;
`;
export const ImgLivingroom = styled.img`
  width: 450px;
  height: 450px;
  border-radius: 0px 0px 225px 225px;
  margin-top: 35px;
`;
export const Workspace = styled.div`
  /* text-align: center; */
`;
export const WorkspaceImg = styled.img`
  width: 450px;
  height: 450px;
  border-radius: 225px;
`;
export const WorkspaceTitle = styled.div`
  ${project}
  margin-top: 35px;
`;
export const WorkspaceText = styled.div`
  ${projectText}
`;
export const Library = styled.div``;
export const LibraryTitle = styled.div`
  ${project}
`;
export const LibraryText = styled.div`
  ${projectText}
`;
export const LibraryImg = styled.img`
  width: 450px;
  height: 450px;
  border-radius: 0px 0px 225px 225px;
  margin-top: 35px;
`;
