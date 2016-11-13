import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from '.././components/SearchBar';

const API_KEY = 'AIzaSyCm_53m3VzsEhZ5HJYFCyf0m-tzZ71B-70';

export default class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
    videos: []
   };

   YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
    this.setState({ videos });
   });
  }
  render() {
    return (
      <div>
       <SearchBar />
      </div>
    );
  }
}