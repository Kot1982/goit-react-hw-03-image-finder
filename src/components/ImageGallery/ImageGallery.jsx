import PropTypes from 'prop-types';
import { GalleryImage } from "./ImageGallery.styled";

const ImageGallery = ({ children }) => (
  <GalleryImage>{children}</GalleryImage>
);

export default ImageGallery;

ImageGallery.propTypes = {
  children: PropTypes.object,
};