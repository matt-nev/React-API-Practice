import React, { Component } from 'react';
import axios from 'axios';
import SingleSide from './SingleSide';
import Error from './Error';

class Sidenews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenews: [],
            error: false,
        };
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=ec66ed8fdd4a41cbbb52ec3bb79f0fdd`;
   
        axios.get(url)
        .then((response) => {
            this.setState({
                sidenews: response.data.articles
            })
        })
        .catch((error) => {
            this.setState ({
                error: true
            })
        });
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