import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import SearchBox from './SearchBox'
import MovieList from './MovieList'
import Pagination from './Pagination'
import MovieInfo from './MovieInfo';
import Home from './Home';
import Contact from './contact';
import About from './about';
import Search from './Search'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"





class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      totalResults: 0,
      searchTerm: '',
      currentPage: 1,
      currentMovie: null
    }
    this.apiKey = process.env.REACT_APP_API
   
   
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  logData = () => {
    console.log(process.env.REACT_APP_API);
  }

  handleSubmit = (e) => { 
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=02cf1996568703ca0a174b9c21f1db37&query&query=${this.state.searchTerm}&language=en-US&page=${this.state.currentPage}`)
    .then(data => data.json())
    .then(data => {
      console.log(data)
      this.setState({ movies : [...data.results], totalResults: data.total_results})
    })
    
    
    e.preventDefault()
  }

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=02cf1996568703ca0a174b9c21f1db37&query=${this.state.searchTerm}&language=en-US&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      this.setState({ movies: [...data.results], totalResults: data.total_results, currentPage: pageNumber})
    })
  }

  viewMovieInfo = (id) => {
    let filteredMovie;
    this.state.movies.forEach((movie, i) => {
      if(movie.id == id) {
        filteredMovie = movie
      }
    }) 

    this.setState({ currentMovie: filteredMovie })  
  }

  closeMovieInfo = () => {
    this.setState({ currentMovie: null })
  }

  render() {
   
    return (
      <>
      <Nav/>
        <Router>
          <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/Search" exact component={Search} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          </Switch>
        </Router>
       

        </>
    );
  }
}

export default App;
