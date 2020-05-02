import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PizzaForm from "./components/PizzaForm";
import { HeaderText, FormContainer, Header, LinksDiv, NavBtn, SubHeader, PizzaImg, SubSubHeader } from './AppStyles';

const App = () => {
  return (
    <div>

  <Router>

    <Header>
      <HeaderText>Lambda Eats</HeaderText>
      <LinksDiv>
        <Link to={"/"}><NavBtn>Home</NavBtn></Link>
        <Link to={"pizza"}><NavBtn>Order Pizza</NavBtn></Link>
      </LinksDiv>
    </Header>

    <Route path="/pizza">
      <FormContainer>
        <SubHeader>Build Your Own Pizza</SubHeader>
        <PizzaImg src="Pizza.jpg" alt="pizza" />
        <SubSubHeader style={{textAlign: "left", fontSize: 1+"rem", }}>Build Your Own Pizza</SubSubHeader>
        <PizzaForm />
      </FormContainer>
    </Route>

    <Route exact path="/">
      <h1>Order a pizza already!</h1>
    </Route>

  </Router>
</div>
  );
};
export default App;
