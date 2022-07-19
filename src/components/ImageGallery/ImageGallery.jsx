import PropTypes from 'prop-types';
import React from "react"

import css from './ImageGallery.module.css'

function ImageGallery({ images, onImgClick }) {
return (
    
        <ul className={css.imageGallery}>
            {images.map(({ tags, largeImageURL, webformatURL, id }) =>
                <li key={id}>                    
                    <img className={css.image} onClick={() => { onImgClick(largeImageURL, tags) }} src={webformatURL} alt={tags} />            
                </li>
            )}
        </ul>
    
)}
export default ImageGallery;

ImageGallery.propTypes = {
    onImgClick: PropTypes.func.isRequired,
    image: PropTypes.array.isRequired,
};