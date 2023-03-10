
import PropTypes from 'prop-types';
import { ImageItem } from 'components/ImageItem/ImageItem';
import {GalleryList} from 'components/ImageGallery/ImageGallery.styled'
export const ImageGallery = ({ searchName, onOpenModal }) => {
        return (<div>
            <GalleryList>
                {searchName.map(({ id, tag, webformatURL, largeImageURL }) => {
                    return (
                        <ImageItem
                            onClick={onOpenModal}
                            smallImg={webformatURL}
                            tag={tag}
                            key={id}
                            largeImage={largeImageURL}
                        />
                    )
                })}
            </GalleryList>
        </div>)
    
}
        
    
    

    ImageGallery.propTypes = {
        searchName: PropTypes.array.isRequired,
        onOpenModal: PropTypes.func.isRequired,}