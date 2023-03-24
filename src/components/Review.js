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
         <React.StrictMode>
         <div className='card-text'>{review}</div> <hr/>
        </React.StrictMode>
        
        
        )

        }


        return (
            <React.StrictMode>
            <div className='card-header'>Reviews</div>
            <div className='card-body'>{array}</div>
            </React.StrictMode>
        );
    }


}