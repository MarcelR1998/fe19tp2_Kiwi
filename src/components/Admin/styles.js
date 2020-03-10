import styled from "styled-components";
import * as UI from "../Styles/ui";

export const UsersListWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  /* box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1); */
  background-color: ${UI.white};
`;

export const ListOfUsers = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const UserItem = styled.li`
  padding: 15px 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 176, 255, 0.1);
    transition: 0.3s;
  }
  @media (max-width: 600px) {
    padding: 15px 30px;
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 320px) {
    padding: 15px 30px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const UserPhoto = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 30px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const UserData = styled.div`
  width: 70%;
  display: flex;
  @media (max-width: 1140px) {
    width: 50%;
    flex-direction: column;
  }
`;

export const UserName = styled.span`
  display: block;
  width: 40%;
  padding: 5px 0;
  font-family: ${UI.mainfont};
  font-size: ${UI.middlefontsize};
  font-weight: bold;
  letter-spacing: 1px;
  color: ${UI.black};
`;

export const UserEmail = styled.span`
  display: block;
  width: 40%;
  padding: 5px 0;
  font-family: ${UI.mainfont};
  font-size: ${UI.mainfontsize};
  color: ${UI.black};
  opacity: 0.8;
`;

export const UserID = styled.span`
  display: block;
  padding: 5px 0;
  font-family: ${UI.mainfont};
  font-size: ${UI.mainfontsize};
  color: ${UI.black};
`;

export const UserTH = styled.div``;
