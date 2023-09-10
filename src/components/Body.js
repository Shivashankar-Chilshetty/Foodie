import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer'
const Body = () => {
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurants, setFilteredRestraunt] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8463544&lng=77.6514648&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        let json = await data.json();
        setListOfRestraunt(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestraunt(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
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
                {filteredRestaurants.map((restaurant) => {
                    return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
                })}
            </div>
        </div>

    )
}

export default Body;