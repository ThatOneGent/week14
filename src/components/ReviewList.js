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

        let array;

        if (this.state.reviews) {

            if (this.state.reviews.length > 1) {

                array = this.state.reviews.map((review, index) =>
                    <React.StrictMode>
                        <Review key={index} reviews={review} />
                        <hr />
                    </React.StrictMode>
                )
            }
            else {
                array = this.state.reviews.map((review, index) =>
                <React.StrictMode>
                    <Review key={index} reviews={review} />
                </React.StrictMode>
            )

            }

        }

        return (
            <div className="card">
                <div className='card-header bg-warning'>Reviews</div>
                <div className='card-body'>
                    {array}
                </div>
                <SRating srating={this.state.srating} />
            </div>
        );
    }

}
