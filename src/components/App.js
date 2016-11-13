import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from '.././components/SearchBar';
import VideoList from '.././components/VideoList';
import VideoDetail from '.././components/VideoDetail';

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
       <VideoDetail video={this.state.videos[0]}/>
       <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
