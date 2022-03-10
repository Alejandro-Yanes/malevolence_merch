import React from 'react'
import { useState } from 'react'
import SHOP_DATA from  './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = ()  =>  {

    const [collections, setCollections] = useState(SHOP_DATA)

    return(
        <div>
            <h1>Collections</h1>
                {collections.map(({id ,  ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ) )}
        </div>
    )
}

export default ShopPage