import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {fetchTrendMovies} from '../../api/fetchFunction';
import { H2, Li, LinkStyled, Ul } from "./Home_css";


const Home = () => {

    const [trendMovies, setTrendMovies] = useState([]);

    useEffect(() => {   
        const fetchData = async () => {
            const TrendMovies = await fetchTrendMovies();
            setTrendMovies(TrendMovies);
        }  
      
        fetchData().catch(console.error);
    }, []);

    const location = useLocation();

    return (
        <>
            <H2>Trending movies</H2>
            <Ul> {(trendMovies.length > 0) && (trendMovies.map((movie) => <Li key={movie.id} ><LinkStyled to={`movies/${movie.id}`} state={{ from: location }}>{movie.title}</LinkStyled></Li>))}
            </Ul>
        </>)
}

export default Home;