import styled from "styled-components";
import * as UI from "../Styles/ui";

export const AccountWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  @media (max-width: 600px) {
    max-width: 100%;
    box-shadow: 0;
  }
`;

export const AccountHeader = styled.div`
  position: relative;
  padding: 25px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${UI.accent};
`;

export const ResetPassword = styled.div`
  padding: 25px 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${UI.white};
`;

export const UserImg = styled.img`
  height: 70px;
  width: 70px;
  padding: 10px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserNames = styled.span`
  font-size: 20px;
  font-weight: bold;
  line-height: 36px;
  letter-spacing: 1px;
  color: ${UI.white};
`;

export const UserEmail = styled.div`
  font-size: ${UI.mainfontsize};
  color: ${UI.white};
  opacity: 0.7;
`;

export const SignoutWrapper = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;
