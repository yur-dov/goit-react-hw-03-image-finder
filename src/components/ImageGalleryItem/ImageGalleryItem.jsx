import css from '../ImageGallery/ImageGallery.module.css'
import PropTypes from 'prop-types';

export default function ImageGalleryItem({tags, webformatURL, id, onClick }) {
    return (
        <li key={id}>                    
            <img className={ css.image} onClick={onClick} src={webformatURL} alt={tags} />            
        </li>
    )
}

ImageGalleryItem.proptTypes={
    onClick: PropTypes.func.isRequired,
    webformatURL: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    tegs: PropTypes.string.isRequired,
}