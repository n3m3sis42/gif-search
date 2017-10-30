import React, { Component } from 'react'
import Search from './components/Search'
import GifList from './components/GifList'
import './App.css';

class App extends Component {

  state = {
    gifs: []
  }

  gifSearch = (term) => {
    const apiKey = 'XvhDelaZkrHfKgcnMp2WpnmfaxJJ5MVJ'
    const baseUrl = 'https://api.giphy.com/v1/gifs/search'
    const searchUrl = `${baseUrl}?api_key=${apiKey}&q=${term}&limit=25&offset=0&rating=G&lang=en`

    fetch(searchUrl)
      .then(resp => resp.json())
      .then(json => this.setState({ gifs: json.data }, () => {console.log(this.state.gifs)}))
  }

  render() {
    return (
      <div className="App">
          <Search onSearchTermChange={this.gifSearch} />
          <GifList data={this.state.gifs} />
      </div>
    );
  }
}

export default App;
