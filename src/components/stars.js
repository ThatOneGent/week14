//  a one to five-star rating component that allows users to rate something 

//outputs the current star rating of a given movie
//average of all entries in data
//also includes form for adding a new star rating
import React from 'react';

export default class SRating extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            srating: props.srating
        }
    }

    render(){

        let starAve=0;
        let starSum=0;

        if(this.state.srating){
        
        for(let i=0; i <this.state.srating.length; i++){
            starSum += this.state.srating[i];
       }

        starAve = starSum / this.state.srating.length;

        
        };

        return(
            <React.StrictMode>
            <div>Star Value</div>
            <div>{starAve}</div>
            <div>{this.state.srating.length}</div>
           
            
            </React.StrictMode>
        );
    }

}