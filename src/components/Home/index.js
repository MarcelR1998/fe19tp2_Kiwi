import React from 'react';

import { withAuthorization } from '../Session';
import ApiReader, { buildMasterObject } from '../ApiReader/index.js';
import StockCard from '../StockCard';
import Search from '../Search';



const HomePage = () => (
    <div>
        <Search />
        <h1>Home Page</h1>
        <p>The Home Page is accessible by every signed in user.</p>
        { /* <StockCard /> */}
        <ApiReader />
    </div>);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);