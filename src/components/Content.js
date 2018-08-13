import React, { Component } from 'react';

class Content extends Component {
	render() {
		return (
			<div>
		        <ul className="content">
		          {this.props.results.map(res =>
		            <li key={res.id}>
		            	<img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${res.poster_path}`} alt={res.original_title}/>

		            	<div className="copy">
										<h2>{res.original_title}</h2>
										{/* <p>{res.tagline}</p> */}
										<p className="overview">{res.overview}</p>
										<p>Original Release: {res.release_date}</p>
										<p>Vote Average: {res.vote_average}</p> 		
		            	</div>
		           
		            </li>
		          )}
		        </ul>
			</div>
		);
	}
}

export default Content;