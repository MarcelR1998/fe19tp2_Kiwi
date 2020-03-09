import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { MainWrapper, PageTitleWrapper, PageTitle, StyledLink } from "../Styles";

class StockPage extends React.Component {

    componentDidMount() {
        console.log(this.props.stock);
    }

    render() {
        return (
            <MainWrapper>
                <h2>{this.props.stock}</h2>
                <StyledLink to={ROUTES.HOME}><i class="fas fa-arrow-left"></i> Back</StyledLink>
                <PageTitleWrapper>
                    <PageTitle>Stock Page</PageTitle>
                </PageTitleWrapper>
            </MainWrapper>

        )
    }
}

export default StockPage;