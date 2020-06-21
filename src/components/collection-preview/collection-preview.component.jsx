import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 classNmae='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
            .filter((item, idx) => idx <4)
            .map(({id, ...otherItempProps }) => (
                <CollectionItem key={id}{...otherItempProps}/>
            ))}
        </div>
    </div>
);

export default CollectionPreview;