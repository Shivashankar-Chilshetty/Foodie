import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom';
import { SWIGGY_URL } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';
import useFetchListOfRestaurants from '../utils/useFetchListOfRestaurants';

const Body = () => {
    const [listOfRestaurants, filteredRestaurants] = useFetchListOfRestaurants();
    const [searchText, setSearchText] = useState('');

    let onlineStatus = useOnlineStatus();
    if(onlineStatus == false) return <h1>Looks like you're offline! Please check you internet connection</h1>

    return listOfRestaurants?.length == 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input type='text' className='search-box' value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }} />
                    <button onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setFilteredRestraunt(filteredRestaurant);
                    }}>Search</button>
                </div>

                <button className='filter-btn' onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.2
                    )
                    setFilteredRestraunt(filteredList)
                }}>Top Restaurant</button>
            </div>
            <div className="restaurant-list" >
                {filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant?.info?.id} to={'/restaurants/' + restaurant?.info?.id}><RestaurantCard {...restaurant.info} /></Link>
                ))}
            </div>
        </div>
    )
}

export default Body;