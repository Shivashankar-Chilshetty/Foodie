import { useEffect, useState } from "react"
import { SWIGGY_URL } from "./constants";

const useFetchListOfRestaurants = () => {
    const [listOfRestaurants, setListOfRestraunts] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        let data = await fetch(SWIGGY_URL);
        let json = await data.json();
        setListOfRestraunts(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return [listOfRestaurants, filteredRestaurants];
}

export default useFetchListOfRestaurants;