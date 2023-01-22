import { Outlet, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { fetchMovieDetails } from '../../api/fetchFunction';
import { StyledLink, Section, Img, Div, LinkBackStyled } from "./MovieDetails_css";

const MovieDetails = () => {

    const [movieDetails, setMovieDetails] = useState({});
    const [filmGenres, setFilmGenres] = useState([]);

    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    useEffect(() => {   
        const fetchData = async () => {
            const searchMoviesDetails = await fetchMovieDetails(movieId);
            setMovieDetails(searchMoviesDetails);
            setFilmGenres([]);
            searchMoviesDetails.genres.map(genre => setFilmGenres(p=> [...p, genre.name]))
        }
       
        fetchData().catch(console.error);

    }, [movieId]);

    const { backdrop_path, original_title, vote_average, overview} = movieDetails;

    return (
        <div>
            <LinkBackStyled to={backLinkHref}>Back to movies</LinkBackStyled>
            {original_title && (<><Section>
                <Img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={original_title}></Img>
                <Div>
                    <h2>{original_title}</h2>
                    <p><b>User Score:</b> {vote_average}</p>
                    <p><b>Overview</b></p>
                    <p>{overview}</p>
                    <p><b>Genres</b></p>
                    <p>{filmGenres.join(', ')}</p>
                </Div>
                
            </Section>
            <section>
                    <h3>Additional information</h3>
                    <StyledLink to="cast">Cast</StyledLink>
                    <StyledLink to="reviews">Reviews</StyledLink>
            </section>
            <Outlet/></>)}
        </div>)
}

export default MovieDetails;