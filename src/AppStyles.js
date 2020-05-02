import styled from 'styled-components';

export const OrderCard = styled.div`
background: lightskyblue;
border: 1px solid black;
border-radius: 5px;
`;

export const Topping = styled.p`
text-transform: capitalize;
font-size: .8rem;
margin: 0 0 0 1.5rem;
padding: 0;
`;

export const HeaderText = styled.h1`
text-align: center;
margin-left: 2rem;
color: red;
`;

export const FormContainer = styled.div`
border: 1px solid black;
width: 50%;
margin: auto;
`;

export const Header = styled.header`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const LinksDiv = styled.div`
margin: 2rem 2rem 0 0;
`;

export const NavBtn = styled.button`
background: black;
color: white;
padding .7rem;
&:hover {
  background: white;
  color: black;
}`;

export const SubHeader = styled.h2`
text-align: center;
margin: 1rem 0;
`;

export const SubSubHeader = styled.h2`
text-align: left;
font-size: 1rem;
margin-left: 1rem;
`;

export const PizzaImg = styled.img`
width: 100%;
`;

export const SectionHeader = styled.div`
background: lightgray;
`;

export const SectionHeadline = styled.p`
margin: 0;
font-size: 1rem;
margin-left: 1rem;
padding-top: .5rem;
`;

export const Required = styled.p`
margin: .5rem 0 0 1rem;
font-size: .7rem;
padding-bottom: .5rem;
`;

export const NameInput = styled.input`
margin: .5rem 0 .5rem 1rem;
`;

export const SizeSelector = styled.select`
margin: .5rem 0 .5rem 1rem;
select::-ms-expand {
  display: none;
}
border-radius: 0;
padding: 0 0 0 .5rem;
`;

export const ToppingsDiv = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
height: 250px;
`;

export const ToppingLabel = styled.label`
padding: .5rem 0 .5rem 1rem;
`;

export const InstructionsHeadline = styled.div`
font-size: 1rem;
margin-left: 1rem;
padding: .5rem 0 .5rem 0;
`;

export const Instructions = styled.textarea`
margin: .5rem 7.5% .5rem 7.5%;
width: 85%;
`;

export const OrderButton = styled.button`
width: 95%;
color: black;
background: white;
border: 1px solid black;
font-size: 1rem;
margin: 0 2.5% 1rem 2.5%;
padding: .5rem 0 .5rem 0;
`;

export const NameError = styled.span`
color: red;
font-size: .5rem;
`;

export const OrderInstructions = styled.p`
margin: 1rem 0 0 1rem;
`;

export const SpecialInstructions = styled.p`
font-size: .8rem;
margin: .5rem 0 0 1.5rem;
`;
