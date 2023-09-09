import RestaurantCard from './RestaurantCard';
import { restaurantList } from '../utils/mockData';
const Body = () => {
    return (
        <div className="restaurant-list" >
            {restaurantList.map((restaurant) => {
                return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            })}
        </div>
    )
}

export default Body;