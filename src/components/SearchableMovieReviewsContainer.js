import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  handleSubmitSearchTerm = event => {
    event.preventDefault()
    fetch(URL + 'query=' + this.state.searchTerm + '&api-key=' + NYT_API_KEY)
    .then(resp => resp.json())
    .then(resp => this.setState({...this.state, reviews: resp.results}))
  }

  updateSeachTerm = () => this.setState({...this.state, searchTerm: event.target.searchTerm.value})


  render () {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmitSearchTerm}>
          Enter your search term here:<input type="text" name="searchTerm" onChange={this.updateSeachTerm}/>
          <button>Submit</button>
        </form>

        <span>
          <MovieReviews reviews={this.state.reviews}/>
        </span>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
