import React from 'react';
import Row from './Row'
import Nav from './Nav'
import requests from './request'
import Banner from './Banner'
import './App.css';

class App extends React.Component{

    render(){
        return (
            <div className={"App"}>
                <Nav />
                <Banner />
                <Row title = "Netflix Originals"
                     fetchUrl = {requests.fetchNetflixOriginals}
                     isLarge={true}
                />
                <Row title = "Trending Now" fetchUrl={requests.fetchTrending}/>
                <Row title = "Top Rated" fetchUrl={requests.fetchTopRated}/>
                <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
                <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
                <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
                <Row title = "Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
                <Row title = "Documentatries" fetchUrl={requests.fetchDocumentaries}/>
            </div>
        )
    }
}



export default App;
