import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { Searchbar } from '../../components/Searchbar/Searchbar';

import { fetchSearchMovie } from '../../api/fetchFunction';

import { Li, LinkStyled, Ul } from './Movies_css';

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [page, setPage] = useState(1);
    const location = useLocation();

    useEffect(() => {   
        if (searchName === '') {
            return;}

        const fetchData = async () => {
        const searchMovies = await fetchSearchMovie(searchName, page);
        setMovies(p => [...p, ...searchMovies]);
        }  
    
        fetchData().catch(console.error);
    }, [searchName, page]);

    const handleSearch = (searchName) => {
    setMovies([]);
    setPage(1);
    setSearchName(searchName);
    };
    
    return (
        <section>
            <Searchbar onSearchMovie={handleSearch} />
            <Ul>{(movies.map((movie) => <Li key={movie.id} ><LinkStyled to={`${movie.id}`} state={{ from: location }}>{movie.title}</LinkStyled></Li>))}</Ul>
        </section>
    )
}

export default Movies;