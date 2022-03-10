import React from "react";
import './custom-button.styles.scss'

const CustomButton = ({ children , isGoogleSignIn , isShopButton ,...otherProps})  =>  (
    <button  className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${isShopButton ? 'isShopButton' : ''} custom-button `} {...otherProps}>
        {children}
    </button>
)

export default CustomButton 