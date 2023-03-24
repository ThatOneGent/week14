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

       


        return (
            
            <div>{this.state.reviews}</div>
            
        );
    }


}