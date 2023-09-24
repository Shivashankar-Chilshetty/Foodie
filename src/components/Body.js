import { useState, useEffect } from 'react';
import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import useFetchListOfRestaurants from '../utils/useFetchListOfRestaurants';

const Body = () => {
    const [listOfRestaurants, filteredRestaurants] = useFetchListOfRestaurants();
    const [searchText, setSearchText] = useState('');
    let onlineStatus = useOnlineStatus();

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    if (onlineStatus == false) return <h1>Looks like you're offline! Please check you internet connection</h1>

    return listOfRestaurants?.length == 0 ? <Shimmer /> : (
        <div>
            <div className='flex'>
                <div className='m-4 p-4'>
                    <input type='text' className='border border-solid border-black' value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }} />
                    <button className='px-4 py-2 bg-green-100 m-4 rounded-lg' onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setFilteredRestraunt(filteredRestaurant);
                    }}>Search</button>
                </div>
                <div className='m-4 p-4 flex items-center'>
                    <button className='px-4 py-2 bg-gray-100 rounded-lg' onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.2
                        )
                        setFilteredRestraunt(filteredList)
                    }}>Top Restaurant</button>
                </div>
            </div>
            <div className="flex flex-wrap" >
                {filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant?.info?.id} to={'/restaurants/' + restaurant?.info?.id}>
                        {restaurant?.info?.promoted ? (
                            <RestaurantCardPromoted {...restaurant.info} />
                        ) : (
                            <RestaurantCard {...restaurant.info} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;