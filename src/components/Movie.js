// a component that represents movie data (i.e. image, synopsis, rating, etc…)

// contains movie data as well?? in an array
//in array
//title
//image link
//snopsis
//rating -- array of rating values
//review -- array of text reviews

// Individual movie card
// Title, image, synopsis, rating.

//start movie div
//Title
//Image
//synop
//current rating average + number of ratings
//star component call - to add 
// call review list component
//cycles through all reviews
//Call reviewForm component

//end movie div


import React from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";


export default class Movie extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            year: props.year,
            image: props.image,
            syn: props.syn,
            srating: props.srating,
            reviews: props.reviews,
            uindex: props.uindex
            
        }

    }




    render() {


        // function that is passed in as a prop for review form
        // this allows for state update after user submits changes.  
        const setNewReview = (newReview) => {

            this.setState(state => ({ reviews: newReview }))
        }

        //yeah, this one doesnt do anything because updating the state for newRevReview, updates all of the state again??
             //Realized why it updates and is not needed... My updating of state on movie as a parent trickles down to reviewlist AND stars automatically...
             //Has I nested the review form within reviewlist, or pulled stars from it, it may have worked differently.
             //Since I WANT to update both at the same time, this works fine. 
        const setNewStar = (newStar) => {
            // this.setState(state => ({srating: newStar}))
        }

        return (
            // return basic structure of the card for the movie, call review list and review form

            <div className='card w-75 border-color-secondary'>
                <h3 className="card-header bg-success">{this.state.title} ({this.state.year})</h3>
                <div className="card-body">

                    <div className="text-center">
                        <img src={this.state.image}></img>
                    </div>
                    <br />
                    <p className="card-text">{this.state.syn}</p>
                    <br />

                    <ReviewList reviews={this.state.reviews} srating={this.state.srating} />

                    <hr />
                    <ReviewForm setNewReview={setNewReview} reviews={this.state.reviews} srating={this.state.srating} uindex={this.state.uindex} />
                </div>
            </div>




        );


    }

}
