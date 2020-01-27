import React, { Component } from "react";
import { render } from "react-dom";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import Card from "./Card";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from "./cardUtils";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const App = () => (
  <Styles>
    <h1>React Credit Card Payment Form</h1>
    <a href="https://github.com/lexaabrahamsen/react-payment-fields">GitHub</a>
    <Form
      onSubmit={onSubmit}
      render={({
        handleSubmit,
        form,
        submitting,
        pristine,
        values,
        active
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Card
              number={values.number || ""}
              name={values.name || ""}
              expiry={values.expiry || ""}
              cvc={values.cvc || ""}
              focused={active}
            />
            <div>
              <Field
                name="number"
                component="input"
                type="text"
                pattern="[\d| ]{16,22}"
                placeholder="Card Number"
                format={formatCreditCardNumber}
              />
            </div>
            <div>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <Field
                name="expiry"
                component="input"
                type="text"
                pattern="\d\d/\d\d"
                placeholder="Valid Thru"
                format={formatExpirationDate}
              />
              <Field
                name="cvc"
                component="input"
                type="text"
                pattern="\d{3,4}"
                placeholder="CVC"
                format={formatCVC}
              />
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Submit
              </button>
            </div>
            <a
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </a>
          </form>
        );
      }}
    />
  </Styles>
);

render(<App />, document.getElementById("root"));
