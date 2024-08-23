import { FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { RestaurantItem } from './horizontal';

export interface RestaurantProps {
    id: string;
    name: string;
    image: string;
}

export default function Restaurants() {
    const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);

    useEffect(() => {
        async function getRestaurants() {
            const response = await fetch('http://192.168.15.6:3000/restaurants')
            const data = await response.json();
            //console.log(data);
            setRestaurants(data);
        }

        getRestaurants();
    }, []);


    return (
        <FlatList
            data={restaurants}
            renderItem={({ item }) => <RestaurantItem item={item} />} //renderiza a lista
            horizontal={true}
            contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
            showsHorizontalScrollIndicator={false}

        />
    );
}