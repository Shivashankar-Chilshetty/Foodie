import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';

const Body = () => {
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    useEffect(() => {
        fetchData()
    }, []);
    const fetchData = async() => {
        let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8463544&lng=77.6514648&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        let json = await data.json();
        //optional chaining
        console.log('json data', json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants)
        setListOfRestraunt(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return (
        <div className='body'>
            <div className = 'filter'>
                <button className='filter-btn' onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.2
                    )
                    setListOfRestraunt(filteredList)
                }}>Top Restaurant</button>
            </div>
            <div className="restaurant-list" >
                {listOfRestaurants.map((restaurant) => {
                    return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
                })}
            </div>
        </div>

    )
}

export default Body;