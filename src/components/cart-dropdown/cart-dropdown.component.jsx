import React from "react";

import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems
          ? cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          : null}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleCartHidden());
          navigate("checkout");
        }}
      >
        Checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
