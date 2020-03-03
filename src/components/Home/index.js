import React from "react";

import { withAuthorization } from "../Session";
import ApiReader, { buildMasterObject } from "../ApiReader/index.js";
import StockCard from "../StockCard";
import Search from "../Search";
import { AuthUserContext } from "../Session";

const HomePage = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <div>
          <Search uid={authUser.uid} />
          <h1>Home Page</h1>
          <p>The Home Page is accessible by every signed in user.</p>
          <ApiReader uid={authUser.uid} />
        </div>
      ) : null
    }
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);
