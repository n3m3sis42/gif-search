import React, { Component } from 'react'

class Search extends Component {

  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
    this.props.onSearchTermChange(event.target.value)
  }

  render() {
    return (
      <div className="search">
          <label htmlFor="search-term">Search Term</label>
          <input name="search-term" type="text" value={this.state.term} onChange={this.onInputChange}/>
      </div>
    )
  }
}

export default Search
