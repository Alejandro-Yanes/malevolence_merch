import React  from 'react'
import './header.styles.scss'
import  {ReactComponent  as  Logo}  from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'

import { Link }  from  'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { signOut } from 'firebase/auth'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'



const Header = ({ currentUser , show , hidden})  =>  {
    return(
            <div className="header">
                <Link className="logo-container" to="/">
                    <Logo className="logo"/>
                </Link>
                <div className="options-flex" >
                    <div className="options">
                        <Link className="option"  to="/shop">SHOP</Link>    
                        <Link className="option"  to="/contact">CONTACT</Link> 
                        
                        {
                            currentUser 
                            ?   
                                <div className='option' 
                                    onClick={() => signOut(auth).then(() => {
                                            console.log('sign out worked')})
                                        .catch((error) => {
                                            console.log('error happened' , error)}) }>
                                        SIGN OUT
                                    </div> 
                            : <Link className="option"  to="/signin">SIGN IN</Link>  
                        }
                        <CartIcon />
                    </div>
                    {(hidden) ?  null : <CartDropdown/>}
                    
                        {(currentUser) ? 
                            <span className='user-loged-in'> User : {currentUser.displayName}</span>
                            : ''
                        }  
                </div>
            </div>
            )
        }

const mapStateToProps = createStructuredSelector({
    currentUser :selectCurrentUser ,
    hidden : selectCartHidden 
})


export default connect(mapStateToProps)(Header)