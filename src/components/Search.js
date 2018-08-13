import React, { Component } from 'react';

class Search extends Component {
	render() {
		return (
			<div className="search">
				<form onSubmit={this.props.handleSubmit}>
					<input 
						type="text"
						
						onChange={this.props.handleChange}
					/>
					<input type="submit" value="Search" />
				</form>
			</div>
		);
	}
}

export default Search;