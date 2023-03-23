//A text review a user can leave on a movie.

import React from 'react';

export default class Review extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            reviews: props.reviews
        }
        
    }

    render() {

        let array;

        if(this.state.reviews){

        array = this.state.reviews.map( (review,index)=>
         <div>{review}</div>
        
        
        )

        }


        return (
            <React.StrictMode>
            <div>Review goes here</div>
            <div>{array}</div>
            </React.StrictMode>
        );
    }


}