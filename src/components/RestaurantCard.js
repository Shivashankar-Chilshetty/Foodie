import { IMG_CDN_URL } from '../utils/constants'
const RestaurantCard = ({ name, locality, cuisines, avgRatingString, cloudinaryImageId }) => {
    return (
        <div className="m-4 p-4 w-[256px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className='rounded-lg' alt='res-logo' src={IMG_CDN_URL + cloudinaryImageId} />
            <h3 className='font-bold py-4 text-lg'>{name}</h3>
            <h3>{locality}</h3>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{avgRatingString}</h3>
        </div>
    )
}
export default RestaurantCard;