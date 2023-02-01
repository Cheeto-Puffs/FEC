import React, { useState } from 'react';
import ImageGallery from './ImageGallery.jsx';
import AddToBag from './AddToBag.jsx';
import Styles from './Styles.jsx';
import ShareSocialMedia from './ShareSocialMedia.jsx';

export default function ProductInformation({ product, styles }) {
  const [currentStyle, setCurrentStyle] = useState(styles.filter((s) => s['default?'])[0]);

  return (
    <div className="gallery-and-styles-container">
      <ImageGallery style={currentStyle} />
      <div className="product-info-container">
        <div className="star-rating">Star Rating: &#9733; &#9734; &#9733; &#9734; &#9733;</div>
        <div className="product-category"><h4>Category: {product.category}</h4></div>
        <div className="product-name"><h3>{product.name}</h3></div>
        <div className="product-price">
          {
            currentStyle.sale_price
              ? <p><s>${currentStyle.original_price}</s> <b>${currentStyle.sale_price}</b></p>
              : <p>${currentStyle.original_price}</p>
          }
        </div>
        <div className="product-styles-container"><Styles styles={styles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} /></div>
        <div className="add-to-bag"><AddToBag style={currentStyle} /></div>
        <div className="share-to-social-media"><ShareSocialMedia /></div>
      </div>
    </div>
  );
}
