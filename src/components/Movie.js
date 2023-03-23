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
import ReviewList from "./ReviewList";
import SRating from "./stars";

export default class Movie extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            title: props.title,
            image: props.image,
            syn: props.syn,
            srating: props.srating,
            reviews: props.reviews
        }

    }
    render() {

        return (

            <React.StrictMode>

            <div className='card'> 
            <div className="card-Body">
            <h3 className="card-title">{this.state.title}</h3>
            <div>
             <img src={this.state.image}></img>
            </div>
            <div>{this.state.syn}</div>

            <ReviewList reviews={this.state.reviews}/>
            <SRating srating={this.state.srating}/>
            
            <div></div>
            </div>
            </div>


            </React.StrictMode>
        );


    }

}
