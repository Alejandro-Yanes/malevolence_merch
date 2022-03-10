import React from 'react'
import { motion } from 'framer-motion'
import './collection-item.styles.scss'
import  CustomButton  from '../custom-button/custom-button.component'

const CollectionItem  =  ({id , name , imageUrl , price}) => (
    <motion.div className="collection-item" key={id}>
        <div className="image" style={{backgroundImage: `url(${imageUrl})`}}>
            <CustomButton isShopButton> Check </CustomButton>
        </div>
        <div className="collection-footer">
            <span className="name">{name}</span>    
            <span className="price">{price}</span>
            <div>
            
            </div>
        </div>
    </motion.div>
)

export default CollectionItem