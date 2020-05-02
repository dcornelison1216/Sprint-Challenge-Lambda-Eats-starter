import React from 'react';
import { ToppingsDiv, ToppingLabel } from '../AppStyles';

const Toppings = props => {
  return (
    <ToppingsDiv>
      <ToppingLabel htmlFor="pepperoni">
        <input type="checkbox" name="Pepperoni" checked={props.formState.pepperoni} id="pepperoni" onChange={props.inputChange} />
        Pepperoni
      </ToppingLabel>
      <ToppingLabel htmlFor="sausage">
        <input type="checkbox" name="Sausage" checked={props.formState.sausage} id="sausage" onChange={props.inputChange} />
        Sausage
      </ToppingLabel>
      <ToppingLabel htmlFor="canadianBacon">
        <input type="checkbox" name="Canadian Bacon" checked={props.formState.canadianBacon} id="canadianBacon" onChange={props.inputChange} />
        Canadian Bacon
      </ToppingLabel>
      <ToppingLabel htmlFor="spicyItalianSausage">
        <input type="checkbox" name="Spicy Italian Sausage" checked={props.formState.spicyItalianSausage} id="spicyItalianSausage" onChange={props.inputChange} />
        Spicy Italian Sausage
      </ToppingLabel>
      <ToppingLabel htmlFor="grilledChicken">
        <input type="checkbox" name="Grilled Chicken" checked={props.formState.grilledChicken} id="grilledChicken" onChange={props.inputChange} />
        Grilled Chicken
      </ToppingLabel>
      <ToppingLabel htmlFor="onions">
        <input type="checkbox" name="Onions" checked={props.formState.onions} id="onions" onChange={props.inputChange} />
        Onions
      </ToppingLabel>
      <ToppingLabel htmlFor="greenPepper">
        <input type="checkbox" name="Green Pepper" checked={props.formState.greenPepper} id="greenPepper" onChange={props.inputChange} />
        Green Pepper
      </ToppingLabel>
      <ToppingLabel htmlFor="dicedTomatoes">
        <input type="checkbox" name="Diced Tomatoes" checked={props.formState.dicedTomatoes} id="dicedTomatoes" onChange={props.inputChange} />
        Diced Tomatoes
      </ToppingLabel>
      <ToppingLabel htmlFor="blackOlives">
        <input type="checkbox" name="Black Olives" checked={props.formState.blackOlives} id="blackOlives" onChange={props.inputChange} />
        Black Olives
      </ToppingLabel>
      <ToppingLabel htmlFor="roastedGarlic">
        <input type="checkbox" name="Roasted Garlic" checked={props.formState.roastedGarlic} id="roastedGarlic" onChange={props.inputChange} />
        Roasted Garlic
      </ToppingLabel>
      <ToppingLabel htmlFor="artichokeHearts">
        <input type="checkbox" name="Artichoke Hearts" checked={props.formState.artichokeHearts} id="artichokeHearts" onChange={props.inputChange} />
        Artichoke Hearts
      </ToppingLabel>
      <ToppingLabel htmlFor="threeCheese">
        <input type="checkbox" name="Three Cheese" checked={props.formState.threeCheese} id="threeCheese" onChange={props.inputChange} />
        Three Cheese
      </ToppingLabel>
      <ToppingLabel htmlFor="pineapple">
        <input type="checkbox" name="Pineapple" checked={props.formState.pineapple} id="pineapple" onChange={props.inputChange} />
        Pineapple
      </ToppingLabel>
      <ToppingLabel htmlFor="extraCheese">
        <input type="checkbox" name="Extra Cheese" checked={props.formState.extraCheese} id="extraCheese" onChange={props.inputChange} />
        Extra Cheese
      </ToppingLabel>
    </ToppingsDiv>
  )
}

export default Toppings;
