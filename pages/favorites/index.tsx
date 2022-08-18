import { useEffect, useState } from "react";
import { Card, Grid } from "@nextui-org/react";

import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";
import { FavoritePokemons } from "../../components/pokemon";

export const Favorites = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
      setFavoritePokemons( localFavorites.pokemons());
    }, [])
    

    return (
        <Layout title='Pokémons favoritos'>
            {
                favoritePokemons.length === 0 
                ? <NoFavorites/>
                : <FavoritePokemons favoritePokemons={favoritePokemons}/>
            }
            
        </Layout>
    )
}

export default Favorites;