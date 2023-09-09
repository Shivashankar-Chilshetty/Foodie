import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { resList } from '../utils/mockData';

const Body = () => {
    const [listOfRestaurants, setListOfRestraunt] = useState(resList);
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