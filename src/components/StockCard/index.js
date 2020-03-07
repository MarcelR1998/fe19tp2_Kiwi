import React from "react";
import usStocksList from "../ApiReader/usStocksList.json";
import styled from "styled-components";
import { withFirebase } from "../Firebase";
import Charts from "../Charts/index.js"

class StockCard extends React.Component {
  state = {};



  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase
      .user(this.props.uid)
      .child("stocklist")
      .on("value", snapshot => {
        const userObject = snapshot.val();
        this.setState({
          stocklist: userObject,
          loading: false,
          /*   storage: localStorage.getItem('data') */
        });
      });
  }
  /*  componentWillUnmount() {
     this.props.firebase.user(this.props.uid).child("stocklist").off();
   } */

  updateUserStocklist = stocklist => {
    if (!stocklist) {
      console.log("Stocklist needed.");
      return;
    }
    this.props.firebase
      .user(this.props.uid)
      .child("stocklist")
      .set(stocklist);
    this.setState({
      stocklist: stocklist
    })
  };

  handleAddStock = newStock => {
    let stockList = this.state.stocklist;
    if (!stockList) {
      console.log("triggered");
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
  };

  newStockValues = (symbol) =>
    this.props.masterObject && !this.state.loading
      ? this.props.masterObject[symbol]
        ? this.props.masterObject[symbol].quoteUrl.c.toFixed(2)
        : (<div style={{ transform: "translateY(-16px)" }}><i className="fas fa-spinner fa-spin fa-xs"></i></div>)
      : (<div style={{ transform: "translateY(-16px)" }}><i className="fas fa-spinner fa-spin fa-xs"></i></div>);


  render() {

    /*   console.log(this.props.masterObject); */
    /* 
        let dataRes = JSON.parse(localStorage.getItem('data'));
    
        let chartData = {
          labels: Object.keys(this.props.masterObject || dataRes),
          datasets: [
            {
              label: 'Quote',
              data: Object.values(this.props.masterObject || dataRes).map(quote => quote.quoteUrl ? quote.quoteUrl.c : 1),
              backgroundColor: [
                'rgb(247, 166, 74)',
                'rgb(248, 182, 106)',
                'rgb(249, 198, 139)',
              ]
            }
          ]
        }; */

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
                <StockValue>  {this.newStockValues(stock.symbol) || 'No data'} </StockValue>
                <UpDownView></UpDownView>
              </MyStocklist>
            ))}
        </CardContainer>
      </CardWrapper>
    );
  }
};

/* multiplyStock = () => {
 
} */

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
  grid-column: 2 / 2;
  grid-row: 4 / 4;
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
  width: ${props => (props.primary ? "35px" : "65px")};
  height: 32px;

  border: 0;
  border-radius: 10px;
  margin-bottom: 47px;
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

const StockValue = styled.p`
  font-family: Roboto;
  font-style: bold;
  font-weight: 500;
  font-size: 40px;
  line-height: 0px;
  margin-top: 20px;
  grid-column: 2 / 2;
  grid-row: 6 / 6;
`;
const Hr = styled.hr`
  border-top: 1px solid #c4c4c4;
`;

export default withFirebase(StockCard);
