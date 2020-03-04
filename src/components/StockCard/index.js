import React from "react";
import usStocksList from "../ApiReader/usStocksList.json";
import styled from "styled-components";
import { withFirebase } from "../Firebase";



class StockCard extends React.Component {

    state = {

    };

    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase
            .user(this.props.uid)
            .child("stocklist")
            .on("value", snapshot => {
                const userObject = snapshot.val();
                console.log(userObject);

                this.setState({
                    stocklist: userObject,
                    loading: false
                });
            });
    }
    componentWillUnmount() {
        this.props.firebase.user(this.props.uid).off();
    }

    renderStock = stock => {
        const symbol = stock.symbol.toLowerCase();
        const description = stock.description.toLowerCase();
    };

    updateUserStocklist = stocklist => {
        if (!stocklist) {
            console.log("Stocklist needed.");
            return;
        }
        this.props.firebase
            .user(this.props.uid)
            .child("stocklist")
            .set(stocklist);
        //this.props.firebase.user(this.props.uid).update({ stocklist: stocklist })
    };

    handleAddStock = newStock => {
        console.log(newStock);
        let stockList = this.state.stocklist;
        if (!stockList) {
            console.log("triggered");
            stockList = [];
        }
        if (stockList.some(stock => stock.symbol === newStock.symbol)) {
        } else {
            const newStockList = stockList;
            newStockList.push(newStock);
            console.log(newStockList);
            this.updateUserStocklist(newStockList);
        }
    };

    handleRemoveStock = oldStock => {
        const newStockList = this.state.stocklist.filter(
            stock => stock.symbol !== oldStock.symbol
        );
        this.updateUserStocklist(newStockList);
    };

    render() {
        return (
            <CardWrapper>
                <CardContainer>
                    {this.state.stocklist &&
                        this.state.stocklist.map((stock, index) => (
                            <MyStocklist key={"o" + index}>
                                <Stocksymbol>{stock.symbol}</Stocksymbol>
                                <Stockdescription>{stock.description}</Stockdescription>
                                <AddDeleteButton
                                    onClick={e => this.handleRemoveStock(stock)}
                                    primary
                                >
                                    <AddDeleteText>-</AddDeleteText>
                                </AddDeleteButton>
                                <StockValue>315,6</StockValue>
                                <UpDownView></UpDownView>
                            </MyStocklist>
                        ))}
                </CardContainer>
            </CardWrapper>
        );
    }
}

const CardWrapper = styled.div`
  position: relative;
`;

const CardContainer = styled.div``;

const Stocksymbol = styled.p`
  font-family: Roboto;
  font-style: bold;
  font-weight: 900;
  font-size: 24px;
  line-height: 0px;
  margin-top: 10px;
  margin: ;
  padding: ;
  grid-column: 2 / 2;
  grid-row: 2 / 3;
`;

const AddDeleteText = styled.p`
  font-family: Roboto;
  color: #ffffff;
  font-style: bold;
  font-weight: 900;
  font-size: 24px;
  line-height: 0px;
  margin-top: 14px;
`;

const Stockdescription = styled.p`
  font-family: "Roboto";
  font-style: medium;
  font-size: 12px;
  line-height: 0px;
  margin-top: 10px;
  margin: ;
  padding: ;
  grid-column: 2 / 2;
  grid-row: 4 / 4;
`;

const MyStocklist = styled.div`
  width: 320px;
  height: 140px;

  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 20px;

  display: inline-grid;
  grid-template-columns: 20px 215px 30px 35px 20px;
  grid-template-rows: 15px 3px 22px 15px 15px 50px 20px;
`;
const UpDownView = styled.div`
  width: 320px;
  height: 20px;

  background-color: #10b452;
  border: 0;
  box-sizing: border-box;

  border-radius: 0px 0px 10px 10px;
  margin: 0px;
  grid-column: 1;
  grid-row: 7 / 7;
`;

const AddDeleteButton = styled.button`
  width: ${props => (props.primary ? "35px" : "65px")};

  height: 32px;

  border-radius: 10px;
  margin-bottom: 47px;
  background-color: ${props => (props.primary ? "red" : "#10B452")};

  grid-column: ${props => (props.primary ? "4" : "3 /4")};
  grid-row: 2;
  :focus {
    outline: 0;
  }
`;

const StockValue = styled.p`
  font-family: Roboto;
  font-style: bold;
  font-weight: 500;
  font-size: 50px;
  line-height: 0px;
  margin-top: 20px;
  margin: ;
  padding: ;
  grid-column: 2 / 2;
  grid-row: 6 / 6;
`;
const Hr = styled.hr`
  border-top: 1px solid #c4c4c4;
`;

export default withFirebase(StockCard);