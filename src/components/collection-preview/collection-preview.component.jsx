import React  from 'react';
import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item.component';

const  CollectionPreview = ({title  , id , items})  => (
    <div  className='collection-preview' key={id}>
        <h1  className='title'>{title}</h1>
        <div className='preview'  style={{display:'flex'}}>
        {items.slice(0,4).map(({...collectionItemProps}) => (
            <CollectionItem  {...collectionItemProps} />
        ))}    
        </div>
    </div>
)

export default CollectionPreview