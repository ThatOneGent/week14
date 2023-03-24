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

        let movies = [
            {
                title: "Dune 1",
                year: 2023,
                image: "./images/1.jpg",
                syn: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
                srating: [8,],
                reviews: ["text review","text review 2"]

            }, 
            {
                title: "Movie 2",
                year: 2023,
                image: "./images/2.jpg",
                syn: "movie plot 2",
                srating: [5,0,],
                reviews: ["text review","text review 2"]
                
            }, 
            {
                title: "Movie 3",
                year: 2023,
                image: "./images/3.jpg",
                syn: "movie plot 3",
                srating: [5,0,],
                reviews: ["text review","text review 2"]
                
            }, 
            {
                title: "Movie 4",
                year: 2023,
                image: "./images/4.jpg",
                syn: "movie plot 4",
                srating: [5,0,],
                reviews: ["text review","text review 2"]
                
            }, 
            {
                title: "Movie 5",
                year: 2023,
                image: "./images/5.jpg",
                syn: "movie plot 5",
                srating: [5,0,],
                reviews: ["text review","text review 2"]
                
            }, 
           
        ];

        let array;

        array = movies.map((movies, index) =>
            <Movie title={movies.title} image={movies.image} syn={movies.syn} srating={movies.srating} reviews={movies.reviews} year={movies.year}/>
        )




        return (

            <React.StrictMode>
                <div className="container" > 

                <div> {array}</div>
</div>
            </React.StrictMode>


        );


    }


}