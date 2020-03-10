import styled from "styled-components";
import {} from "./styles";
import * as UI from "../Styles/ui";

export const NewsContainer = styled.div`
  width: auto;
  margin: 0 25px;
  display: flex;
  flex-direction: column;
`;

export const NewsStoryItem = styled.div`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid ${UI.lightgrey};
`;

export const StoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StoryImg = styled.img`
  max-width: 150px;
  max-height: 120px;
  margin: 0 15px;
  background-color: ${UI.lightgrey};
  object-fit: cover;
  border-radius: 10px;
`;

export const StoryTitle = styled.h3`
  margin: 0 0 15px 0;
  padding: 0;
`;

export const StoryA = styled.a`
  font-family: ${UI.mainfont};
  font-size: ${UI.largefontsize};
  font-weight: bold;
  color: ${UI.link};
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${UI.linkhover};
    transition: color 0.3s;
  }
`;

export const StoryText = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${UI.mainfont};
  color: ${UI.black};
`;

export const StoryInfo = styled.div`
  font-family: ${UI.mainfont};
  font-size: ${UI.smallfontsize};
  color: ${UI.black};
  line-height: 2;
  opacity: 0.7;
  text-transform: uppercase;
`;

export const StorySource = styled.span`
  font-family: ${UI.mainfont};
  font-size: ${UI.smallfontsize};
  padding: 0 10px 0 0;
`;

export const StoryDate = styled.span`
  font-family: ${UI.mainfont};
  font-size: ${UI.smallfontsize};
  padding: 0 0 0 10px;
`;
