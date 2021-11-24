import React, { Component } from 'react';
import SingleSide from './SingleSide';
import axios from 'axios';
import Error from './Error';

class Sidenews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenews: [],
        };
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=50e813c0e31640fa83eb61f9a7d96738`;
   
        axios.get(url)
        .then((response) => {
            this.setState({
                sidenews: response.data.articles
            })
        })
        .catch((error) => console.log(error));
    }

    renderItems() {
      if (!this.state.error) {
        return this.state.sidenews.map((item) => ( 
            <SingleSide key={item.url} item={item} />
        ));
    } else {
        return <Error />
        }
    }
    render () {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }
}

export default Sidenews;