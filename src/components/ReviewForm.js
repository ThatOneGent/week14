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
import Review from "./Review";
import {useState} from "react";


export default class ReviewForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reviews: props.reviews,
            srating: props.srating,
            count: 0
        }
        this.submitReview = this.submitReview.bind(this);
    }

    submitReview() {
    

        this.setState(state => ({ count: state.count + 1 }))

        const iReview = document.getElementById("reviewText").value;
        const iStar = document.getElementById("userStar").value;

        console.log(iReview);
        console.log(iStar);
        

        let newArray = this.state.reviews;
        newArray.push(iReview);
        

        console.log(newArray);
        console.log("review state     " + this.state.reviews);


       // this.setState({reviews: newArray});
        this.setState({ reviews: newArray });
        
       

/*         <button onClick={() => {
            setArtists([
              ...artists,
              { id: nextId++, name: name }
            ]);
          }}>Add</button> */
       
        //this.props.review.push(iReview);
       // this.props.review.push(iStar);
        //when button is clicked
        // if text input, push to review array
        // if star selection, push to srating array
        // if both are empty, alert


    }

    render() {


        return (
            <div className="container-fluid">
                <div className="">
                    <form className="card row">
                        <h5 className="card-header bg-info">Leave a Review</h5>
                        <div className="form-group">
                            <div className="row">
                                <input id="reviewText" className="form-control " type="text" name="uReview" placeholder="Type your review here" />
                            </div>
                            <div className="row">
                                <div className="col-sm-3 gx-0">
                                    <select className="form-select" id="userStar">
                                        <option defaultValue>Rating 1-10</option>
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
                                <button className="btn btn-primary"
                                    onClick={this.submitReview} type="button">Submit Review - counter {this.state.count}</button>


                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }





}