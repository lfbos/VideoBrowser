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
    videos: [],
    selectedVideo: null
   };

   this.onVideoSelect = this.onVideoSelect.bind(this);
   this.videoSearch = this.videoSearch.bind(this);
   
   this.videoSearch('surfboards');
  }

  onVideoSelect(selectedVideo) {
   this.setState({selectedVideo});
  }

  videoSearch(term) {
   YTSearch({key: API_KEY, term}, (videos) => {
    this.setState({
     videos,
     selectedVideo: videos[0]
    });
   });
  }

  render() {
    return (
      <div>
       <SearchBar onSearchTermChange={this.videoSearch} />
       <VideoDetail video={this.state.selectedVideo}/>
       <VideoList
        onVideoSelect={this.onVideoSelect}
        videos={this.state.videos} />
      </div>
    );
  }
}
