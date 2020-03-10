import React from "react";
import stocknews from "./applenews.json";
import * as GLOBSTYLES from "../Styles";
import * as STYLES from "../News/styles";

const News = () => {
  return (
    <GLOBSTYLES.MainWrapper>
      <GLOBSTYLES.PageTitleWrapper>
        <GLOBSTYLES.PageTitle>Company News</GLOBSTYLES.PageTitle>
      </GLOBSTYLES.PageTitleWrapper>
      <STYLES.NewsContainer>
        {stocknews.slice(0, 5).map(story => (
          <STYLES.NewsStoryItem key={story.id}>
            <STYLES.StoryImg src={story.image}></STYLES.StoryImg>
            <STYLES.StoryWrapper>
              <STYLES.StoryInfo>
                <STYLES.StorySource>{story.source}</STYLES.StorySource>
                <span>&#9679;</span>
                <STYLES.StoryDate>
                  {String(new Date(eval(story.datetime + "000"))).slice(0, 3)}
                  ,&nbsp;
                  {String(new Date(eval(story.datetime + "000"))).slice(4, 15)}
                  ,&nbsp;
                  {String(new Date(eval(story.datetime + "000"))).slice(16, 21)}
                </STYLES.StoryDate>
              </STYLES.StoryInfo>
              <STYLES.StoryTitle>
                <STYLES.StoryA href="link">{story.headline}</STYLES.StoryA>
              </STYLES.StoryTitle>
              <STYLES.StoryText>{story.summary}</STYLES.StoryText>
            </STYLES.StoryWrapper>
          </STYLES.NewsStoryItem>
        ))}
      </STYLES.NewsContainer>
    </GLOBSTYLES.MainWrapper>
  );
};

export default News;
