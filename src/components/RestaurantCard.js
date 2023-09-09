import { IMG_CDN_URL } from '../utils/constants'
const RestaurantCard = ({ name, locality, cuisines, avgRatingString, cloudinaryImageId }) => {
    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h3>{locality}</h3>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{avgRatingString}</h3>
        </div>
    )
}
export default RestaurantCard;