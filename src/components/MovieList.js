//a container for all the Movie components and their data.

// import movie component
// Container, if array has movie, generate movie component (probably BS card)

// contains movie data
//in array
//title
//image link
//snopsis
//rating -- array of rating values
//review -- array of text reviews


//create variable to hold movie list
//cycle through movies in data file
//for each this.state.movie component call?

//start movie list div
// movielist array goes here
//end the div
import React from "react";
import Movie from "./Movie";

export default class MovieList extends React.Component {

    render() {
        // declare the movies array, this will contain all of the information for each movie.
        // uindex added to deal with issuing unique id for some element creation and grabbing information from forms.
        let movies = [
            {
                title: "Dune",
                year: 2023,
                image: "./images/dune.jpg",
                syn: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
                srating: [8, 8],
                reviews: ["A Great Modern Sci-Fi", "Excellent adaptation of a classic sci-fi book"],
                uindex: 1

            },
            {
                title: "Spies Like Us",
                year: 1985,
                image: "./images/spies.jpg",
                syn: "Two bumbling government employees think they are U.S. spies, only to discover that they are actually decoys for Nuclear War.",
                srating: [7, 6,],
                reviews: ["Setting the standard for mid-80's comedy",],
                uindex: 2

            },
            {
                title: "Forrest Gump",
                year: 1994,
                image: "./images/gump.jpg",
                syn: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
                srating: [8, 10,],
                reviews: [],
                uindex: 3

            },
            {
                title: "The Secret Life of Walter Mitty",
                year: 2013,
                image: "./images/walter.jpg",
                syn: "When both he and a colleague are about to lose their job, Walter takes action by embarking on an adventure more extraordinary than anything he ever imagined.",
                srating: [9, 5,],
                reviews: ["A day dreamers' delight!", "One of Stillers best non-comedic roles"],
                uindex: 4

            },
            {
                title: "Encanto",
                year: 2021,
                image: "./images/encant.jpg",
                syn: "A Colombian teenage girl has to face the frustration of being the only member of her family without magical powers.",
                srating: [9, 5,],
                reviews: ["...Pressure, like a drip, drip, drip that'll never stop... whoa"],
                uindex: 5

            },

        ];

        let array; // declare array variable for looping through movies


        // set new array = to movie component with all props and key/index passed through.

        //Key index will make each "movie" component unique when updating the dom

        array = movies.map((movies, index) =>
            // <Movie title={movies.title} image={movies.image} syn={movies.syn} srating={movies.srating} reviews={movies.reviews} year={movies.year}/>
            <Movie key={index} {...movies} />
        )


        return (

            // array is added to a container for bootstrap css

            <div className="container" >

                <div> {array}</div>
            </div>



        );


    }


}