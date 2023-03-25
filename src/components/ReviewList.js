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


        //array to put all of the review component calls into
        let array;
        
        // if statement is purely for cosmetic reasons
        // if there are more than one review, include <hr/> tag
        // if just one review, dont include it.
        if (this.state.reviews) {

            if (this.state.reviews.length > 1) {

                array = this.state.reviews.map((review, index) =>
                    <div>
                        <Review key={index} reviews={review} />
                        <hr />
                    </div>
                )
            }
            else {
                array = this.state.reviews.map((review, index) =>

                    <Review key={index} reviews={review} />

                );

            }

        }

        // return a card with a header and card body including the array of reviews
        // SRating component has card footer class assigned inside component
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
