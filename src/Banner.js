import React from 'react';
import axios from 'axios';
import {url} from './axios'
import "./Banner.css"
import request from "./request";


const base_url = "https://image.tmdb.org/t/p/original/"
class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie : []
        }
    }

    componentWillMount() {
        const data = axios.get(`${url}${request.fetchNetflixOriginals}`).then(
            (request) => {
                this.setState( {movie : request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1 )
                        ]})
            },
            (error) => {console.error(error)}
        )
    }
    truncate = (str, n) => {
        return str?.length > n  ? str.substr(0, n-1) + "..." : str;
    }


    render() {
        return (
            <header className={"banner"}
                    style={ {
                        backgroundSize:"cover",
                        backgroundImage:`url(
                            "${base_url}/${this.state.movie?.backdrop_path}"
                        )`,
                        backgroundPosition:"center center",
                    } }
            >
                <div className={"banner__contents"}>
                    <h1 className={"banner__title"}> {this.state.movie?.title || this.state.movie?.name || this.state.movie?.original_name} </h1>
                    <div className={"banner__buttons"}>
                        <button className={"banner__button"}>Play</button>
                        <button className={"banner__button"}>My List</button>
                    </div>
                    <h1 className={"banner__description"}>
                        {this.truncate(this.state.movie?.overview, 150)}
                    </h1>
                </div>
                <div className={"banner--fadeBottom"}>

                </div>
            </header>
        )
    }
}

export default Banner;