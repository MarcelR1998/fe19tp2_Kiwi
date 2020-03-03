import React from 'react';

import { withAuthentication } from '../Session';
import { AuthUserContext } from '../Session';

import StockCard from '../StockCard';
import Search from '../Search';
//import { filteredStocks } from '../Search/';

/*
<AuthUserContext.Consumer> {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
</AuthUserContext.Consumer>
*/

const HomePage = ({ authUser }) => (
    <div>

       {authUser ? <Search authUser={authUser} /> : null}

{/*         <div>
           // <p>{filteredStocks}</p>
        </div> */}
        <h1>Home Page</h1>
        <p>The Home Page is accessible by every signed in user.</p>
        <StockCard />
    </div>);

//const condition = authUser => !!authUser;
export default withAuthentication(HomePage);