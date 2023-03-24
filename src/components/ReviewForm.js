/*  
 a form at the bottom of a Movie component that allows users to leave reviews.
 When submitted, the review should be added to the movie. 
 All this data can be stored in an array, no networking or database needed for this assignment.

*/

//review form called by movie.js

//Form field for text
// allows for pushing to movielist array for current movie
// addes to review text array
// push a new star rating as well.

import React from "react";

export default class ReviewForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            review: props.review,
            srating: props.srating
        }

    }

    render() {


        return (
            <div className="container-fluid">
                <div className="">
                    <form className="card row">
                        <h5 className="card-header">Leave a Review</h5>
                        <div className="form-group">
                            <div className="row">
                                <input id="reviewText" className="form-control " type="text" name="uReview" placeholder="Type your review here" />
                            </div>
                            <div className="row">
                                <div className="col-sm-3 gx-0">
                                    <select className="form-select" id="userStar">
                                        <option selected>Rating 1-10</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>

                                    </select>

                                    <div className="col-sm-9"></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="row">
                                <button className="btn btn-primary" onclick="" type="button" >Review Button goes here</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }





}