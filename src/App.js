import React, { Component } from 'react';
import "./App.css";
import logo from './logo.png';
import Search from "./components/Search";
import Content from "./components/Content";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: false,
      inputValue: 'kill bill',
      results: [],
      error: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.handleSubmit();
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleSubmit(event) {  
    this.setState({ isLoading: true });
    const query = this.state.inputValue;

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=68bf472155c018e5a2a1cc71b22033b1&language=en-US&query=${query}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong...');
        }
      })
      .then(responseDate => {
        this.setState({
          results: responseDate.results,
          isLoading: false
        })
      })
      .catch(error => this.setState({ error, isLoading: false }));    
  }


  render() {
    const { results, inputValue, isLoading, error } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }
    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <div className="logo-container">
          <a href="https://www.themoviedb.org/">
            <img src={logo} className="logo" alt="The Movie DB Logo"/>  
          </a>          
        </div>
        
        <Search  
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValue={inputValue}
        />

        <Content 
          results={results}
        />

      </div>
    );
  }
}

export default App;































































