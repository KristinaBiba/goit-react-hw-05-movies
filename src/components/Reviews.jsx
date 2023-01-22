import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { fetchMovieReviews } from '../api/fetchFunction';

const Reviews = () => {
    const [movieReviews, setMovieReviews] = useState([]);

    const { movieId } = useParams();

    useEffect(() => {   
        const fetchData = async () => {
        const searchMoviesReviews = await fetchMovieReviews(movieId);
        setMovieReviews(searchMoviesReviews);
        }  
    
        fetchData().catch(console.error);
    }, [movieId]);


    return (
        <>
            <h2>Reviews</h2>
            {(movieReviews.length > 0) ? (
            <section>
                    {movieReviews.map(review => (
                        <div key={review.id}>
                            <p><b>Author:</b> {review.author}</p>
                            <p>{review.content}</p>
                        </div>
                     ))}
                </section>) : (<p>We don`t have any reviews for this movie.</p>)}
        </>);
}

export default Reviews;