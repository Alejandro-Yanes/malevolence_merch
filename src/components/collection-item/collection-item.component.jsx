import React from 'react'
import { motion } from 'framer-motion'
import './collection-item.styles.scss'
import  CustomButton  from '../custom-button/custom-button.component'
import { connect } from 'react-redux'
import {addItem} from '../../redux/cart/cart.actions'

const CollectionItem  =  ({item , addItem}) => {
    
    const { id ,name , price , imageUrl} = item
    
    return(
    <motion.div className="collection-item" key={id}>
        <div className="image" style={{backgroundImage: `url(${imageUrl})`}}>
            <CustomButton onClick={() => addItem(item)} isShopButton> Check </CustomButton>
        </div>
        <div className="collection-footer">
            <span className="name">{name}</span>    
            <span className="price">{price}</span>
            <div>
            
            </div>
        </div>
    </motion.div>
)}

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)