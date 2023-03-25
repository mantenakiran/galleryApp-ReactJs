// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, selectedImage, isActive} = props
  const {
    imageAltText,
    thumbnailUrl,
    thumbnailAltText,
    imageUrl,
    id,
  } = imageDetails

  const onClickImage = () => {
    selectedImage(imageUrl, imageAltText, id)
  }
  const opacity = isActive ? '' : 'logo'

  return (
    <li className="item-container">
      <button className="button" type="button">
        <img
          onClick={onClickImage}
          alt={thumbnailAltText}
          className={opacity}
          src={thumbnailUrl}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
