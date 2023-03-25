//  a one to five-star rating component that allows users to rate something 

//outputs the current star rating of a given movie
//average of all entries in data
//also includes form for adding a new star rating
import React from 'react';

export default class SRating extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            srating: props.srating
        }
    }

    render() {


        let starAve = 0; //intialize the star rating average
        let starSum = 0; //initalize the star rating sum

        //If there is a star rating in the array
        //Currently always true with data

        if (this.state.srating.length > 0) {
            console.log("srating hit = " + this.state.srating) // test ouput

            // add all of the values up
            for (let i = 0; i < this.state.srating.length; i++) {
                starSum += this.state.srating[i];
            }

            //average the values and round to nearest 2 digits.
            starAve = Math.round((starSum / this.state.srating.length) * 100) / 100;
        };

        return (
            // out put the current star rating and the current number of star reviews 
            //star reviews are treated independant of text reviews
            //given card footer as it's part of the review card section
            <div className='card-footer'>

                <div className='row'><div className='col-sm-4'>Current Rating - {starAve}/10</div>
                    <div className='col-sm-3'>{this.state.srating.length} review(s)</div>
                </div>
            </div>

        );
    }

}