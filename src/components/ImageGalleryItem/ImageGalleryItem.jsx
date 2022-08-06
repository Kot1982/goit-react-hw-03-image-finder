import PropTypes from 'prop-types';
import { ItemImageGallery, Image } from './ImageGalleryItem.styled'

const ImageGalleryItem = ({ pictureData, onClick }) => {
  return pictureData.map(picture => (
    <ItemImageGallery
      key={picture.id}
      onClick={() => onClick(picture.largeImageURL)}
    >
      <Image
        src={picture.webformatURL}
        alt=""
      />
    </ItemImageGallery>
  ));
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  pictureData: PropTypes.arrayOf(PropTypes.object),
};