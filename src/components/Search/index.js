import React from 'react';
import usStocksList from '../ApiReader/usStocksList.json'


class Search extends React.Component {
  state = {
    search: ""
  };

  renderStock = stock => {
    const { search } = this.state;
    const symbol = stock.symbol.toLowerCase();
    const description = stock.description.toLowerCase();
  }

  onchange = e => {
    this.setState({ search: e.target.value });
  };


  render() {
    const { search } = this.state;
    const filteredStocks = usStocksList.filter(stock => {
      return stock.symbol.toLowerCase().indexOf(search.toLowerCase()) !== -1 || stock.description.toLowerCase().indexOf(search.toLowerCase()) !== -1;

    });

    return (
      <div>
        <input label="Search Stock"
          icon="search"
          onChange={this.onchange} />

        <div>
          {filteredStocks.map(stock => {
            return this.renderStock(stock);
          })}
          {console.log(filteredStocks.map(stock => stock.description))}
          {console.log(filteredStocks.length)}




        </div>

      </div>
    )
  }
}

export default Search;