import React from 'react';
import SearchBar from './SeearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };
  // this function is called by the SearchBar class
  onFormSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      }
    });

    // when the state is changed this particular component i.e App is rerendered alog with all its child
    this.setState({ images: response.data.results });
    // youtube.get('/search',{
    //     params:{
    //         q:term
    //     }
    // }).then((Response)=>{
    //     console.log(Response);
    // })
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onFormSubmit} />
        Found: {this.state.images.length}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
