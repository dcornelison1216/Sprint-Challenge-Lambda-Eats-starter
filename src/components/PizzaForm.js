import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import Orders from './Orders';
import { SectionHeader, SectionHeadline, Required, NameInput, SizeSelector, InstructionsHeadline, Instructions, OrderButton, NameError } from '../AppStyles';
import Toppings from './Toppings';

const PizzaForm = () => {

  const [formState, setFormState] = useState({name: "", size: "", pepperoni: "", sausage: "", canadianBacon: "", spicyItalianSausage: "", grilledChicken: "", onions: "", greenPepper: "", dicedTomatoes: "", blackOlives: "", roastedGarlic: "", artichokeHearts: "", threeCheese: "", pineapple: "", extraCheese: "", instructions: ""});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errors, setErrors] = useState({name: "", size: ""});
  const [orders, setOrders] = useState([]);
  const formSchema = yup.object().shape({
    name: yup.string().min(2, "Please enter your name").required("Please enter your name"),
    size: yup.string().required("Please select a topping"),
    pepperoni: yup.string().notRequired(),
    sausage: yup.string().notRequired(),
    canadianBacon: yup.string().notRequired(),
    spicyItalianSausage: yup.string().notRequired(),
    grilledChicken: yup.string().notRequired(),
    onions: yup.string().notRequired(),
    greenPepper: yup.string().notRequired(),
    dicedTomatoes: yup.string().notRequired(),
    blackOlives: yup.string().notRequired(),
    roastedGarlic: yup.string().notRequired(),
    artichokeHearts: yup.string().notRequired(),
    threeCheese: yup.string().notRequired(),
    pineapple: yup.string().notRequired(),
    extraCheese: yup.string().notRequired(),
    instructions: yup.string().notRequired()
  });

  const validateChange = e => {
    yup
      .reach(formSchema, e.target.type === "checkbox" ? e.target.id : e.target.name)
      .validate(e.target.type === "checkbox" ? e.target.id : e.target.value)
      .then(valid => {
        setErrors({ ...errors, [e.target.type === "checkbox" ? e.target.id : e.target.name]: ""})
      })
      .catch(err => setErrors({ ...errors, [e.target.type === "checkbox" ? e.target.id : e.target.name]: err.errors[0] }));
  };

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setIsButtonDisabled(!valid);
    });
  }, [formState, formSchema]);

  const formSubmit = e => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then(response => {
        setFormState({name: "", size: "", pepperoni: "", sausage: "", canadianBacon: "", spicyItalianSausage: "", grilledChicken: "", onions: "", greenPepper: "", dicedTomatoes: "", blackOlives: "", roastedGarlic: "", artichokeHearts: "", threeCheese: "", pineapple: "", extraCheese: "", instructions: ""});
        addNewOrder(response.data);
      })
      .catch(err => console.log(err.response));
  };

  const inputChange = e => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.type === "checkbox" ? e.target.id : e.target.name]:
        e.target.type === "checkbox" ? e.target.id : e.target.value,
    };
    validateChange(e);
    setFormState(newFormData);
  };

  const addNewOrder = order => {
    const newOrder = {
      id: Date.now(),
      name: order.name,
      size: order.size,
      pepperoni: order.pepperoni,
      sausage: order.sausage,
      canadianBacon: order.canadianBacon,
      spicyItalianSausage: order.spicyItalianSausage,
      grilledChicken: order.grilledChicken,
      onions: order.onions,
      greenPepper: order.greenPepper,
      dicedTomatoes: order.dicedTomatoes,
      blackOlives: order.blackOlives,
      roastedGarlic: order.roastedGarlic,
      artichokeHearts: order.artichokeHearts,
      threeCheese: order.threeCheese,
      pineapple: order.pineapple,
      extraCheese: order.extraCheese,
      instructions: order.instructions
    };
    setOrders([...orders, newOrder]);
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <SectionHeader>
          <SectionHeadline>Name for your order</SectionHeadline>
          <Required>Required</Required>
        </SectionHeader>

        <label htmlFor="name">
          <NameInput id="name" type="text" name="name" onChange={inputChange} value={formState.name} placeholder="Enter your name" data-cy="name" />
          {errors.name.length > 0 ? <NameError className="error"> {errors.name}</NameError> : null}
        </label>

        <SectionHeader>
          <SectionHeadline>Choice of Size</SectionHeadline>
          <Required>Required</Required>
        </SectionHeader>

        {/* dropdown form component for pizza size */}
        <label htmlFor="size">
          <SizeSelector id="size" name="size" onChange={inputChange} data-cy="size">
            <option value="">Select</option>
            <option value="small" data-cy="small">Small (8 inches)</option>
            <option value="medium" data-cy="medium">Medium (10 inches)</option>
            <option value="large" data-cy="large">Large (12 inches)</option>
            <option value="x-large" data-cy="x-large">XL (14 inches)</option>
          </SizeSelector>
          {errors.size.length > 0 ? <p className="error">{errors.size}</p> : null}
        </label>

        <SectionHeader>
          <SectionHeadline>Add Toppings</SectionHeadline>
          <Required>Choose as many as you want!</Required>
        </SectionHeader>

        {/* checklist form component for toppings - at least 4 (hint: name each separately) */}
        <Toppings formState={formState} inputChange={inputChange} />


        {/* text input form component for special instructions */}
        <SectionHeader>
          <InstructionsHeadline>Special Instructions</InstructionsHeadline>
        </SectionHeader>
        <label htmlFor="instructions">
          <Instructions id="instructions" name="instructions" onChange={inputChange} value={formState.instructions} placeholder="Anything else you'd like to add?" />
        </label>

        {/* Add to Order button that submits form and returns a database record of name, pizza size, sauce, and special instructions */}
        <div>
          <OrderButton type="submit" disabled={isButtonDisabled}>Add to Order</OrderButton>
        </div>

      </form>

      <Orders orders={orders} />

    </div>
  );
};

export default PizzaForm;
