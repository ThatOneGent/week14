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
             <div className='card-footer'>   
            
            <div className='row'><div className='col-sm-3'>Current Rating (1-10)</div>
            <div className='col-sm-2'>{starAve}/10</div>
            <div className='col-sm-3'>{this.state.srating.length} review</div>
           </div>
            </div>
            </React.StrictMode>
        );
    }

}