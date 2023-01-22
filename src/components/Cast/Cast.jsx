import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { fetchMovieCast } from '../../api/fetchFunction';
import { Section, Img, Div } from '../Cast/Cast_css';

const Cast = () => {

    const [movieCast, setMovieCast] = useState([]);

    const { movieId } = useParams();

    useEffect(() => {   
        const fetchData = async () => {
        const searchMoviesCast = await fetchMovieCast(movieId);
        setMovieCast(searchMoviesCast);
        }  
    
        fetchData().catch(console.error);
    }, [movieId]);

    const actingCast = movieCast.filter(({ known_for_department }) => known_for_department.includes('Acting'));

    return (
        <>
            {(movieCast.length > 0) && (
            <Section>
                    {actingCast.map(({ profile_path, name, character, id }) => {  
                        
                        let imageUrl = `https://image.tmdb.org/t/p/original/${profile_path}`;

                        if (profile_path === null) {
                            imageUrl = 'https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Templates-StudioBinder.jpg';
                        }
                            
                        return (<Div key={id}>
                        <Img src={imageUrl} alt={name}></Img>
                        <p><b>{name}</b></p>
                        <p>Character: {character}</p>
                    </Div>)}
                     )}
            </Section>)}
        </>);
}

export default Cast;