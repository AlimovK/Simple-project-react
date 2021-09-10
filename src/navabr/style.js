import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
`;
export const TopLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.img`
  width: 37px;
  height: 45px;
`;
export const Locus = styled.div`
  width: 105px;
  height: 53px;
  font-weight: 800;
  font-size: 35px;
  line-height: 52px;
  color: #58a9a5;
  margin-left: 14px;
`;
export const TopCenter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 309px;
  width: 500px;
`;
export const TopMenu = styled.div`
  width: 112px;
  height: 38px;
  font-size: 25px;
  line-height: 37px;
  color: #404242;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: #58a9a5;
  }
`;
export const TopButton = styled.button`
  text-align: center;
  width: 201px;
  height: 60px;
  background: #58a9a5;
  border-radius: 15px;
  font-weight: 500;
  font-size: 25px;
  line-height: 37px;
  color: #ffffff;
  margin-left: 220px;
  border: none;
  cursor: pointer;
`;
