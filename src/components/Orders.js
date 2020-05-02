import React from 'react';
import { OrderCard, Topping, OrderInstructions, SpecialInstructions } from '../AppStyles';

const Orders = props => {
  return (
    <div>
      {props.orders.map(order => (
        <OrderCard key={order.id}>
          <p style={{marginLeft: 1+"rem"}}>Order for {order.name}</p>
          <p style={{marginLeft: 1+"rem"}}>Size: {order.size}</p>
          <p style={{marginLeft: 1+"rem"}}>Toppings:</p>
          {order.pepperoni ? <Topping className="toppings">Pepperoni</Topping> : null}
          {order.sausage ? <Topping className="toppings">Sausage</Topping> : null}
          {order.canadianBacon ? <Topping className="toppings"></Topping> : null}
          {order.spicyItalianSausage ? <Topping className="toppings">Spicy Italian Sausage</Topping> : null}
          {order.grilledChicken ? <Topping className="toppings">Grilled Chicken</Topping> : null}
          {order.onions ? <Topping className="toppings">Onions</Topping> : null}
          {order.greenPepper ? <Topping className="toppings">Green Pepper</Topping> : null}
          {order.dicedTomatoes ? <Topping className="toppings">Diced Tomatoes</Topping> : null}
          {order.blackOlives ? <Topping className="toppings">Black Olives</Topping> : null}
          {order.roastedGarlic ? <Topping className="toppings">Roasted Garlic</Topping> : null}
          {order.artichokeHearts ? <Topping className="toppings">Artichoke Hearts</Topping> : null}
          {order.threeCheese ? <Topping className="toppings">Three Cheese</Topping> : null}
          {order.pineapple ? <Topping className="toppings">Pineapple</Topping> : null}
          {order.extraCheese ? <Topping className="toppings">Extra Cheese</Topping> : null}

          {order.instructions ? <div><OrderInstructions>Special Instructions:</OrderInstructions><SpecialInstructions>{order.instructions}</SpecialInstructions></div> : null}

        </OrderCard>
      ))}
    </div>
  );
};

export default Orders;
