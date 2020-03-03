import styled from "styled-components";

export const SearchField = styled.input`
width: 320px;
height: 30px;

background: #FFFFFF;
border: 1px solid #E5E5E5;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
outline: none;
margin: 20px;
padding: 20px;
font-family: 'Roboto';
font-style: medium;
font-size: 12px;

`;

export const AddStocklist = styled.div`
width: 320px;
height: 70px;

background: #FFFFFF;
border: 1px solid #E5E5E5;
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
 font-family: 'Roboto';
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
 
 background: #FFFFFF;
 border: 1px solid #E5E5E5;
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
 
 background-color: #10B452;
 border: 0;
 box-sizing: border-box;
 
 border-radius: 0px 0px 10px 10px;
 margin: 0px;
 grid-column: 1;
 grid-row: 7 / 7;
 
 `;

const AddDeleteButton = styled.button`
 width:${props =>
        props.primary ? '35px' : '65px'};
 
 height: 32px;

 border-radius: 10px;
 margin-bottom: 47px;
 background-color: ${props =>
        props.primary ? 'red' : '#10B452'};
    
    grid-column:  ${props =>
        props.primary ? '4' : '3 /4'};
 grid-row: 2;
 :focus {outline:0;}
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
 border-top: 1px solid #C4C4C4;
 
 `;
