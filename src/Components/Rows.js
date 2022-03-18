import React, { useState, useEffect } from 'react'
import axios from '../REQUEST/axios'
import YouTube from 'react-youtube'
import './Rows.css'
import movieTrailer from 'movie-trailer';
const opts = {
    height: '390',
    width: '100%',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,

        
    },
};
//  krishna sai andnan 



const Rows = ({ title, fetchRequest, isLarge }) => {
    const [Movie, setMovie] = useState([])
    const [turl, setTurl] = useState("")
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchRequest)
            console.log(request.data.results)
            setMovie(request.data.results)
        }
        fetchData()
    }, [fetchRequest])


    const handleClick = (movie) => {
        if (turl) {
            setTurl("")
        }
        else {
            movieTrailer(movie?.name)
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url.search));
                    setTurl(urlParams.get('v'))
                })
        }
    }
    return (
        <div className='rows'>
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    Movie.map((i) => {
                        return (
                            <img
                                src={isLarge ? `https://image.tmdb.org/t/p/original/${i.poster_path}` : `https://image.tmdb.org/t/p/original/${i.backdrop_path}`}
                                alt={i.name}
                                className={`row__poster ${isLarge && 'row__poster_Larger'}`}
                                key={i.id}
                                onClick={() => handleClick(i)}
                            />
                        )
                    })
                }

            </div>
            {turl && <YouTube videoId={turl} opts={opts} />}
        </div>
    )
}

export default Rows