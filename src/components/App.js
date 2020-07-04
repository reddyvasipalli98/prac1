import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';

class App extends React.Component{


    state = {images:[]};

     onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params:{query: term},
        });

        this.setState({images: response.data.results});
    }

    render(){
        return (
            <div>
                <SearchBar onSearchFormSubmit = {this.onSearchSubmit} />
                <div>{this.state.images.length}</div>
            </div>
        );
    }
}

export default App;