import React from "react";
import styled from "styled-components";
import { withFirebase } from "../Firebase";
import { Redirect } from "react-router-dom";
import {
  StockListWrapper,
  StyledStockList,
  StockListItem,
  StockItemMain,
  StockItemData,
  StockItemButton,
  StockItemGain,
  StockSymbol,
  StockDesc,
  StockValue,
  StockValueOwned,
  StockLabel,
  StockCurrency,
  StockValueContainer,
  StockAmountInput,
  StockLabel2,
  StockLabel3,
  StockCurrency2,
  HrLine,
} from "./styles";

class StockCard extends React.Component {
  state = {
    redirect: false,
    amounts: {}
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase
      .user(this.props.uid)
      .child("stocklist")
      .on("value", snapshot => {
        const userObject = snapshot.val();
        this.setState({
          stocklist: userObject,
          loading: false
        });
      });
  }


  updateUserStocklist = stocklist => {
    if (!stocklist) {
      return;
    }
    this.props.firebase
      .user(this.props.uid)
      .child("stocklist")
      .set(stocklist);
    this.setState({
      stocklist: stocklist
    });
  };

  handleAddStock = newStock => {
    let stockList = this.state.stocklist;
    if (!stockList) {
      stockList = [];
    }
    if (stockList.some(stock => stock.symbol === newStock.symbol)) {
    } else {
      const newStockList = stockList;
      newStockList.push(newStock);
      this.updateUserStocklist(newStockList);
    }
  };

  handleRemoveStock = oldStock => {
    const newStockList = this.state.stocklist.filter(
      stock => stock.symbol !== oldStock.symbol
    );
    this.updateUserStocklist(newStockList);
    localStorage.removeItem(oldStock.symbol);
  };

  newStockValues = symbol =>
    this.props.masterObject && !this.state.loading ? (
      this.props.masterObject[symbol] ? (
        this.props.masterObject[symbol].quoteUrl.c.toFixed(2)
      ) : (
          <div style={{ transform: "translateY(-8px)" }}>
            <i className="fas fa-spinner fa-spin fa-xs"></i>
          </div>
        )
    ) : (
        <div style={{ transform: "translateY(-8px)" }}>
          <i className="fas fa-spinner fa-spin fa-xs"></i>
        </div>
      );

  selectedStock = e => {
    if (
      e.target.tagName !== "BUTTON" &&
      e.target.tagName !== "I" &&
      e.target.tagName !== "INPUT"
    ) {
      console.log(e.target.closest("li").id);
      this.setState({
        stockData: this.props.masterObject[e.target.closest("li").id].quoteUrl,
        redirect: true
      });
    } else {
      return;
    }
  };

  changeMultiplier = (e, symbol) => {
    const { stocklist } = this.state;
    let stockToChange = stocklist.find(stock => stock.symbol === symbol);
    stockToChange.amount = e.target.value;
    this.updateUserStocklist(stocklist);
  };

  setLocalStorageValue = symbol => {
    localStorage.setItem(
      [symbol],
      JSON.stringify(this.props.masterObject[symbol].quoteUrl.c.toFixed(2))
    );
  };


  render() {

    return (
      <StockListWrapper>
        <StyledStockList>
          {this.state.stocklist &&
            this.state.stocklist.map((stock, index) =>
              this.state.redirect ? (
                <Redirect to="/stockpage" stock={this.state.stockData} />
              ) : (
                  <StockListItem
                    id={stock.symbol}
                    key={"o" + index}
                    onClick={this.selectedStock}
                  >
                    <StockItemMain>
                      <StockItemData>
                        <StockSymbol>{stock.symbol}</StockSymbol>
                        <StockDesc>{stock.description}</StockDesc>

                        <HrLine />


                        <StockValueContainer>
                          <div>
                            <StockLabel>Current stock value:</StockLabel>
                            <StockCurrency>$</StockCurrency>
                            <StockValue>

                              {this.newStockValues(stock.symbol) || "No data"}
                            </StockValue>
                          </div>
                          <StockLabel2>Owned stocks worth:</StockLabel2>
                          <StockCurrency2>$</StockCurrency2>
                          <StockValueOwned>

                            {this.props.masterObject && !this.state.loading ? (
                              (
                                this.newStockValues(stock.symbol) *
                                (stock.amount ? stock.amount : 1)
                              ).toFixed(2)
                            ) : (
                                <div style={{ transform: "translateY(-8px)" }}>
                                  <i className="fas fa-spinner fa-spin fa-xs"></i>
                                </div>
                              )}

                          </StockValueOwned>
                          <div>
                            <StockLabel3>Amount</StockLabel3>
                            <StockAmountInput
                              type="number"
                              name={stock.symbol}
                              onChange={e =>
                                this.changeMultiplier(e, stock.symbol)
                              }
                              value={stock.amount ? stock.amount : "1"}
                            />
                          </div>
                        </StockValueContainer>
                      </StockItemData>
                      <StockItemButton>
                        <AddDeleteButton
                          onClick={e => this.handleRemoveStock(stock)}
                          primary
                        >
                          <i className="fas fa-trash-alt"></i>
                        </AddDeleteButton>
                      </StockItemButton>
                      {JSON.parse(localStorage.getItem(stock.symbol)) <=
                        this.newStockValues(stock.symbol) ? (
                          <StockItemGain></StockItemGain>
                        ) : (
                          <StockItemGain loose></StockItemGain>
                        )}
                      {this.props.masterObject
                        ? this.props.masterObject[stock.symbol]
                          ? this.setLocalStorageValue(stock.symbol)
                          : ""
                        : ""}
                    </StockItemMain>
                  </StockListItem>
                )
            )}
        </StyledStockList>
      </StockListWrapper>
    );
  }
}

const AddDeleteText = styled.span`
  color: #fff;
`;

const MyStocklist = styled.div`
  width: 320px;
  height: 140px;

  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 20px;

  display: inline-grid;
  grid-template-columns: 20px 215px 30px 35px 20px;
  grid-template-rows: 15px 3px 22px 15px 15px 50px 20px;
  &:hover {
    transform: scale(1.03);
    transition: transform 0.3s;
  }
`;

const UpDownView = styled.div`
  width: 320px;
  height: 20px;

  background-color: #8bc34a;
  border: 0;
  box-sizing: border-box;

  border-radius: 0px 0px 10px 10px;
  margin: 0px;
  grid-column: 1;
  grid-row: 7 / 7;
`;

const AddDeleteButton = styled.button`
display: block;
position: absolute;
top: 0px;
right: 6px;
width: ${props => (props.primary ? "35px" : "65px")};
  height: 32px;
  font-size: 15px;
  color: #fff;
  border: 0;
  border-radius: 5px;
  margin-bottom: 0px;

  background-color: ${props => (props.primary ? "#E53935" : "#8BC34A")};

  grid-column: ${props => (props.primary ? "4" : "3 /4")};
  grid-row: 2;

  cursor: pointer;

  :hover {
    transform: scale(1.1);
    transition: transform 0.3s;
  }
  :focus {
    outline: 0;
  }
`;

export default withFirebase(StockCard);
