// a container inside of a Movie that houses Review components.

// called by movie.js
//cycles through current movie's review array in data
import React from 'react';
import Review from './Review';
import SRating from './stars';

export default class ReviewList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            reviews: props.reviews,
            srating: props.srating
        }
    }

    render() {

        return (
            <div className="card">
                <Review reviews={this.state.reviews} />
                <SRating srating={this.state.srating} />
            </div>
        );
    }

}
