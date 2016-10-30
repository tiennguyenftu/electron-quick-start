import React, {Component} from 'react';
import axios from 'axios';
import UploadInput from './uploads/uploadInput';
import PhotoList from './uploads/photoList';

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {photos: []};

        axios.get('http://localhost:3000/api/photos')
            .then(res => {
                this.setState({photos: res.data.photos})
            })
            .catch(e => console.log(e));
    }

    render() {
        return (
            <div>
                <UploadInput/>
                <PhotoList photos={this.state.photos}/>
            </div>
        );
    }
}

export default App;