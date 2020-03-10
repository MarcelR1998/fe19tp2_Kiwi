import styled from "styled-components";
import {} from "./styles";
import {
  white,
  black,
  lightgrey,
  primary,
  accent,
  mainfont,
  mainfontsize,
  titlefontsize,
  smallfontsize,
  link,
  linkhover
} from "../Styles/ui";

export const NewsContainer = styled.div`
  width: auto;
  margin: 0 25px;
  display: flex;
  flex-direction: column;
`;

export const NewsStoryItem = styled.div`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid ${lightgrey};
`;

export const StoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StoryImg = styled.img`
  max-width: 150px;
  max-height: 120px;
  margin: 0 15px;
  background-color: ${lightgrey};
  object-fit: cover;
  border-radius: 10px;
`;

export const StoryTitle = styled.h3`
  margin: 0 0 15px 0;
  padding: 0;
`;

export const StoryA = styled.a`
  font-family: ${mainfont};
  font-size: ${titlefontsize};
  font-weight: bold;
  color: ${link};
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${linkhover};
    transition: color 0.3s;
  }
`;

export const StoryText = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${mainfont};
  color: ${black};
`;

export const StoryInfo = styled.div`
  font-family: ${mainfont};
  font-size: ${smallfontsize};
  color: ${black};
  line-height: 2;
  opacity: 0.7;
  text-transform: uppercase;
`;

export const StorySource = styled.span`
  font-family: ${mainfont};
  font-size: ${smallfontsize};
  padding: 0 10px 0 0;
`;

export const StoryDate = styled.span`
  font-family: ${mainfont};
  font-size: ${smallfontsize};
  padding: 0 0 0 10px;
`;
