import React from "react";
import stocknews from "./news.json";
import { MainWrapper, PageTitleWrapper, PageTitle } from "../Styles";
import {
  NewsContainer,
  NewsStoryItem,
  StoryWrapper,
  StoryImg,
  StoryTitle,
  StoryA,
  StoryText,
  StoryInfo,
  StorySource,
  StoryDate
} from "../News/styles";

/* const LatestNews = NewNews =>
  news.map(story => {
    console.log(story.headline);
  }); */

const News = () => {
  return (
    <MainWrapper>
      <PageTitleWrapper>
        <PageTitle>Latest News</PageTitle>
      </PageTitleWrapper>
      <NewsContainer>
        {stocknews.map(story => (
          <NewsStoryItem key={story.id}>
            <StoryImg src={story.image}></StoryImg>
            <StoryWrapper>
              <StoryInfo>
                <StorySource>{story.source}</StorySource>
                <span>&#9679;</span>
                <StoryDate>
                  {String(new Date(eval(story.datetime + "000"))).slice(0, 3)}
                  ,&nbsp;
                  {String(new Date(eval(story.datetime + "000"))).slice(4, 15)}
                  ,&nbsp;
                  {String(new Date(eval(story.datetime + "000"))).slice(16, 21)}
                </StoryDate>
              </StoryInfo>
              <StoryTitle>
                <StoryA href="link">{story.headline}</StoryA>
              </StoryTitle>
              <StoryText>{story.summary}</StoryText>
            </StoryWrapper>
          </NewsStoryItem>
        ))}
      </NewsContainer>
    </MainWrapper>
  );
};

export default News;
