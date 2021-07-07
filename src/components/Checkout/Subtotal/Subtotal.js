import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../../Store/UserData";
import { getCartTotal } from "../../../Store/reducer";

const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className={"subtotal"}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Total ({cart.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className={"subtotal__gift"}>
              <input type={"checkbox"} />
              This order contains gift 🎁
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
