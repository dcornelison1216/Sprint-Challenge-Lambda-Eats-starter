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
          {order.pepperoni.length > 0 ? <Topping className="toppings">{order.pepperoni}</Topping> : null}
          {order.sausage.length > 0 ? <Topping className="toppings">{order.sausage}</Topping> : null}
          {order.canadianBacon.length > 0 ? <Topping className="toppings">{order.canadianBacon}</Topping> : null}
          {order.spicyItalianSausage.length > 0 ? <Topping className="toppings">{order.spicyItalianSausage}</Topping> : null}
          {order.grilledChicken.length > 0 ? <Topping className="toppings">{order.grilledChicken}</Topping> : null}
          {order.onions.length > 0 ? <Topping className="toppings">{order.onions}</Topping> : null}
          {order.greenPepper.length > 0 ? <Topping className="toppings">{order.greenPepper}</Topping> : null}
          {order.dicedTomatoes.length > 0 ? <Topping className="toppings">{order.dicedTomatoes}</Topping> : null}
          {order.blackOlives.length > 0 ? <Topping className="toppings">{order.blackOlives}</Topping> : null}
          {order.roastedGarlic.length > 0 ? <Topping className="toppings">{order.roastedGarlic}</Topping> : null}
          {order.artichokeHearts.length > 0 ? <Topping className="toppings">{order.artichokeHearts}</Topping> : null}
          {order.threeCheese.length > 0 ? <Topping className="toppings">{order.threeCheese}</Topping> : null}
          {order.pineapple.length > 0 ? <Topping className="toppings">{order.pineapple}</Topping> : null}
          {order.extraCheese.length > 0 ? <Topping className="toppings">{order.extraCheese}</Topping> : null}

          {order.instructions.length > 0 ? <div><OrderInstructions>Special Instructions:</OrderInstructions><SpecialInstructions>{order.instructions}</SpecialInstructions></div> : null}

        </OrderCard>
      ))}
    </div>
  );
};

export default Orders;
