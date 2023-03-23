// a container inside of a Movie that houses Review components.

// called by movie.js
//cycles through current movie's review array in data
import React from 'react';
import Review from './Review';

export default class ReviewList extends React.Component{

    constructor(props) {
        super(props);

        this.state ={
            reviews: props.reviews
        }
    }

    render() {

        return(

            <Review reviews={this.state.reviews}/>

        );
    }

}
