import PropTypes from 'prop-types';
import { GalleryItem } from 'components/ImageGallery/ImageGallery.styled'
export const ImageItem = ({ onClick, smallImg, tag, largeImage, }) => {
     return (<GalleryItem onClick={onClick} >
          <img src={smallImg} alt={tag} data-large={largeImage} load="lazy" />
     </GalleryItem>)}

ImageItem.propTypes = {
     onClick: PropTypes.func.isRequired,
     smallImg: PropTypes.string.isRequired,
     tag: PropTypes.string,
     largeImage:PropTypes.string.isRequired
}
