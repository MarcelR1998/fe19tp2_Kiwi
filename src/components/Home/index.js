import React from "react";
import { withAuthorization } from "../Session";
import ApiReader, { buildMasterObject } from "../ApiReader/index.js";
import { AuthUserContext } from "../Session";
import { MainWrapper, PageTitleWrapper, PageTitle, PageDesc } from "../Styles";

const HomePage = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <MainWrapper>
          <PageTitleWrapper>
            <PageTitle>Home Page</PageTitle>
            <PageDesc>
              The Home Page is accessible by every signed in user.
            </PageDesc>
          </PageTitleWrapper>

          <ApiReader uid={authUser.uid} />
        </MainWrapper>
      ) : null
    }
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);
