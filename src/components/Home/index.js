import React from "react";
import { withAuthorization } from "../Session";
import ApiReader, { buildMasterObject } from "../ApiReader/index.js";
import { AuthUserContext } from "../Session";
import * as GLOBSTYLES from "../Styles";

const HomePage = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <GLOBSTYLES.MainWrapper>
          <GLOBSTYLES.PageTitleWrapper>
            <GLOBSTYLES.PageTitle>My stocks</GLOBSTYLES.PageTitle>
            <GLOBSTYLES.PageDesc>
              Manage your stocks on this dashboard
            </GLOBSTYLES.PageDesc>
          </GLOBSTYLES.PageTitleWrapper>
          <ApiReader uid={authUser.uid} />
        </GLOBSTYLES.MainWrapper>
      ) : null
    }
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);
