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
            reviews: props.reviews,
            srating: props.srating,
            count: 0,
            setNewReview: props.setNewReview, //function passed as prop for updating reviews
            setNewStar: props.setNewStar, //function passed as prop for updating stars - ultimately not used...
            uindex: props.uindex  // passed down and used to control inputid properties
        }
        this.submitReview = this.submitReview.bind(this); // binding on click

    }


    //onclick function
    submitReview() {

        //this.setState(state => ({ count: state.count + 1 }))  // test code

        //setting the value of two items based on value of user input
        //element ID is based off unique index assigned to the movie
        const iReview = document.getElementById(`reviewText-${this.state.uindex}`).value;
        const iStar = parseInt(document.getElementById(`userStar-${this.state.uindex}`).value); // converting option value to Int for manipulation later on

        //test console
        console.log(iReview);
        console.log(iStar);

        //arrays for manipulation set as the current state props
        let newRevArray = this.state.reviews;
        let newStarArray = this.state.srating;


        //if statements for use case control.

        // if both fields are blank
        if (iReview == '' && iStar == 0) {
            window.alert('You must Submit a Review or Star Rating!'); //alert window to enter data
        }

        //if only review is blank
        if (iReview == '' && iStar != 0) {
            newStarArray.push(iStar); // push user input to newStarArray
        }

        //if only star is blank/default
        if (iReview != '' && iStar == 0) {
            newRevArray.push(iReview); // push user input to newRevArray
        }

        //if neither are blank
        if (iReview != '' && iStar != 0) {
            newRevArray.push(iReview); // push user input to both arrays
            newStarArray.push(iStar);
        }



        // test code to verify data was pushed
        console.log('New data arrays');
        console.log(newRevArray);
        console.log(newStarArray)


        this.state.setNewReview(newRevArray); // call the passed in function and pass it the array for new Reviews.


    }


    render() {

//input fields given uniqueID based off uindex from movie list
//value for option fields given for later control
        return (
            <div className="container-fluid">
                <div className="">
                    <form className="card row">
                        <h5 className="card-header bg-info">Leave a Review</h5>
                        <div className="form-group">
                            <div className="row">
                                <input id={`reviewText-${this.state.uindex}`} className="form-control " type="text" name={`uReview-${this.state.uindex}`} placeholder="Type your review here" />
                            </div>
                            <div className="row">
                                <div className="col-sm-3 gx-0">
                                    <select className="form-select" id={`userStar-${this.state.uindex}`} name={`uStar-${this.state.uindex}`}>
                                        <option value='0'>Rating 1-10</option>
                                        <option value='2'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                        <option value='6'>6</option>
                                        <option value='7'>7</option>
                                        <option value='8'>8</option>
                                        <option value='9'>9</option>
                                        <option value='10'>10</option>

                                    </select>
                                    

                                    <div className="col-sm-9"></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="row">
                                <button className="btn btn-primary"
                                    onClick={this.submitReview} type="button">Submit Review</button>


                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }





}