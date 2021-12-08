import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ }) => {
    return (
        <li className={s.ImageGalleryItem}>
            <img
                src={webformatURL}
                alt={tags}
                onClick={onClick}
                className={s.ImageGalleryItemImage}
                width="200"
                height="150"
            />
        </li>
    )
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};