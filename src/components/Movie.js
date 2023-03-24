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
import SRating from "./stars";

export default class Movie extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            year: props.year,
            image: props.image,
            syn: props.syn,
            srating: props.srating,
            reviews: props.reviews
        }

    }
    render() {

        return (

            <React.StrictMode>

                <div className='card w-75 border-color-secondary'>
                    <h3 className="card-header">{this.state.title} ({this.state.year})</h3>
                    <div className="card-body">

                        <div className="text-center">
                            <img src={this.state.image}></img>
                        </div>

                        <p className="card-text">{this.state.syn}</p>
                        <hr/>
                        
                        <ReviewList reviews={this.state.reviews} srating={this.state.srating}/>
                        
                        
                        <hr/>
                        <ReviewForm reviews={this.state.reviews} srating={this.state.srating}/>
                    </div>
                </div>


            </React.StrictMode>
        );


    }

}
