import React from 'react';

import * as Urls from '../constants/urls.js'

class Companies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch(`${"https://finnhub.io/api/v1/stock/symbol?exchange=US&token=" + Urls.apiKey}`)
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        isLoaded: true,
                        items: res
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (

                <ul>
                    <li>{items}</li>
                </ul>
                /* <ul>
                    {items.map(item => (
                        <li key={item.address}>
                            {item.address}
                        </li>
                    ))}
                </ul> */
            );
        }
    }
}

export default Companies;