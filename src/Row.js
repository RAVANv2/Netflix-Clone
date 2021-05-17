import React from 'react';
import {url} from './axios'
import axios from 'axios';
import './Row.css'
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/"
class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies : [],
            trailerUrl: ""
        }
    }
    componentDidMount() {
        const data = axios.get(`${url}${this.props.fetchUrl}`).then( (request) => {
            this.setState({movies: request.data.results})
            },
            (error) => {console.error(error)}
        )
    }

    handleClick = (movie) => {
        const name = movie?.name || movie?.original_title;
        console.log(name)
        if(this.state.trailerUrl){
            this.setState( {trailerUrl : ""} )
        }else{
            movieTrailer(name)
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    this.setState({trailerUrl : urlParams.get("v")})
                })
                .catch((error) => {console.error(error)})
        }
    }

    render() {
        const opts = {
            height:"390",
            width: "100%",
            playerVars: {
                autoPlay: 1,
            }
        }
        return (
            <div className={"row"}>
                <h2> {this.props.title} </h2>
                <div className={"row__posters"}>
                    {this.state.movies.map( movie => (
                        <img className={`row__poster ${this.props.isLarge && "row__posterLarge"}`}
                             onClick={this.handleClick.bind(this, movie)}
                             key={movie.id}
                             src={`${base_url}${ this.props.isLarge ? movie.poster_path : movie.backdrop_path}`}
                             alt={movie.name} />
                    ))}
                </div>
                {this.state.trailerUrl && <YouTube videoId={this.state.trailerUrl} opts={opts} />}
            </div>
        )
    }
}

export default Row;