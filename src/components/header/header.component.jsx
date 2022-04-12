import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";

import { auth } from "../../firebase/firebase.utils";
import { signOut } from "firebase/auth";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  HeaderContainer,
  LogoContainer,
  OptionsFlex,
  OptionsContainer,
  OptionLink,
  OptionDiv,
  UserLogedIn,
} from "./header.styles";

const Header = ({ currentUser, show, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsFlex>
        <OptionsContainer>
          <OptionLink to="/shop">SHOP</OptionLink>
          <OptionLink to="/contact">CONTACT</OptionLink>

          {currentUser ? (
            <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
          ) : (
            <OptionLink to="/signin">SIGN IN</OptionLink>
          )}
          <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}

        {currentUser ? (
          <UserLogedIn> User : {currentUser.displayName}</UserLogedIn>
        ) : (
          ""
        )}
      </OptionsFlex>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
