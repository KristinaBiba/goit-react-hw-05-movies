import { useLocation, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Searchbar } from '../../components/Searchbar/Searchbar';

import { fetchSearchMovie } from '../../api/fetchFunction';

import { Li, LinkStyled, Ul } from './Movies_css';

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const query = searchParams.get("query") ?? "";

    useEffect(() => {   
        if (query !== '') {
            setSearchName(query);
        }

        if (searchName === '') {
            return;}

        const fetchData = async () => {
        const searchMovies = await fetchSearchMovie(searchName);
        setMovies(searchMovies);
        }  
    
        fetchData().catch(console.error);
    }, [searchName, query]);

    const handleSearch = (searchName) => {
    setMovies([]);
    setSearchName(searchName);
    setSearchParams({ query: searchName });          
    };

    return (
        <section>
            <Searchbar onSearchMovie={handleSearch} />
            <Ul>{(movies.map((movie) => <Li key={movie.id} ><LinkStyled to={`${movie.id}`} state={{ from: location }}>{movie.title}</LinkStyled></Li>))}</Ul>
        </section>
    )
}

export default Movies;