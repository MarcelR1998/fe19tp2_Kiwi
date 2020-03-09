import React from "react";
import usStocksList from "../ApiReader/usStocksList.json";
import styled from "styled-components";
import { withFirebase } from "../Firebase";
import StockCard from "../StockCard/";
import SearchList from "./SearchList";

class Search extends React.Component {
  state = {
    search: "",
    show: true
  };

  /* handleClick = e => {
    if (this.node.contains(e.target)) {
      return;
    } */
  /*     this.handleClickOutside(); */
  /* }; */

  /*  handleClickOutside = () => {
     this.setState({
       show: !this.state.show
     });
   }; */

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
        console.log(this.props.uid);
      });
    /*  document.addEventListener("click", this.handleClick, false); */
  }
  /*   componentWillUnmount() { */
  /* this.props.firebase.user(this.props.uid).off(); */
  /*    document.removeEventListener("click", this.handleClick, false);
   } */

  onchange = e => {
    this.setState({ search: e.target.value });
    /*    if (e.target.value != "") {
         this.setState({ hideSearch: true })
       } */
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

    this.setState({
      stocklist: stocklist
    });
    console.log(this.state.stocklist);
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
      console.log(newStock, stockList);
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
    const { search } = this.state;
    const filteredStocks = usStocksList.filter(stock => {
      return (
        stock.symbol.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        stock.description.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    });

    return (
      <SearchWrapper>
        <SearchField
          label="Search Stock"
          placeholder="Search for stocks and luck"
          icon="search"
          onChange={this.onchange}
        />
        {this.state.search.length > 0 ? (
          <SearchListContainer>
            {/* { filteredStocks, userStocks, handleAddStock }  */}

            {this.state.show && (
              <SearchListUl>
                {this.state.search && (
                  <SearchList
                    filteredStocks={filteredStocks.splice(0, 50)}
                    userStocks={this.state.stocklist}
                    handleAddStock={this.handleAddStock}
                    handleRemoveStock={this.handleRemoveStock}
                  />
                )}
              </SearchListUl>
            )}

            {/*           {this.state.search && (
            <SearchList
              filteredStocks={filteredStocks.splice(0, 50)}
              userStocks={this.state.stocklist}
              handleAddStock={this.handleAddStock}
              handleRemoveStock={this.handleRemoveStock}
            />
          )} */}

            {/*this.state.search && filteredStocks.splice(0, 50).map((stock, index) =>
                        <AddStocklist key={'s' + index}><Stocksymbol>{stock.symbol}</Stocksymbol>
                            <Stockdescription>{stock.description}</Stockdescription>
                            {!(this.state.stocklist.some(stateStock => stateStock.symbol === stock.symbol)) ? 
                                <AddDeleteButton onClick={(e) => this.handleAddStock(stock)}><AddDeleteText>+</AddDeleteText></AddDeleteButton> : null }
                            </AddStocklist>)*/}
            {/* <Hr /> */}
            {/*  {this.state.stocklist &&
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
            ))} */}
          </SearchListContainer>
        ) : null}
      </SearchWrapper>
    );
  }
}

const SearchWrapper = styled.div`
  position: relative;
`;

const SearchField = styled.input`
  width: 30%;
  padding: 8px 15px;
  font-size: 14px;
  background-color: #fff;
  border: 0;
  border-radius: 10px;
  outline: 0;
  @media (max-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 900px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
  &:focus {
    width: 100%;
    transition: width 0.6s;
  }
`;

const SearchListContainer = styled.div``;

const SearchListUl = styled.ul`
  position: absolute;
  z-index: 1000;
  top: 45px;
  left: 0;
  width: 100%;
  max-height: 50vh;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  &::after {
    content: "";
    display: block;
    width: 14px;
    height: 14px;
    background: #fff;
    box-shadow: -1px -1px 1px -1px rgba(0, 0, 0, 0.2);
  }
`;

const AddStocklist = styled.div`
  width: 320px;
  height: 70px;

  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 20px;

  display: inline-grid;
  grid-template-columns: 20px 215px 30px 35px 20px;
  grid-template-rows: 15px 3px 22px 15px 15px;
`;

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
  font-size: 15px;
  border: 0;
  border-radius: 10px;
  margin-bottom: 47px;
  background-color: ${props => (props.primary ? "#F44336" : "#8BC34A")};

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
  font-size: 50px;
  line-height: 0px;
  margin-top: 20px;
  grid-column: 2 / 2;
  grid-row: 6 / 6;
`;
const Hr = styled.hr`
  border-top: 1px solid #c4c4c4;
`;

export default withFirebase(Search);
