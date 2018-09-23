import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {

	constructor(){
		super();

		this.state = {
			reviews: []
		}
	}

	componentDidMount(){
		fetch(URL)
			.then(resp => resp.json())
			.then(data => this.setState({ reviews: data.results }));
	}


	render() {
		return (
			<div className="latest-movie-reviews">
				<h2>The Latest Reviews:</h2>
				< MovieReviews reviews={this.state.reviews} />
			</div>
		);
	}
}
