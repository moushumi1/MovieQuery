var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded ", year: "2003", length: 138, rating: "7.2", genre: "sci-fi" },
  { title: "Spider-Man: Homecoming", year: "2017", length: 170, rating: "8.2", genre: "action" }
];

function getMovieTitle( index ){
  return movieList[index].title;
}

console.log(getMovieTitle(3));

function addMovie( movie ){
  movieList.push(movie);
  return movieList;
}

var newMovie = {title:"Wonder Woman",year:"2017",length:170,rating: "8.7",genere:"action"} ;
console.log(addMovie(newMovie));

function movieByRating(a,b){
  var ratingA=a.rating;
  var ratingB=b.rating;

  var comparison = 0;
  if (ratingA > ratingB) {
    comparison = 1;
  } else if (ratingA < ratingB) {
    comparison = -1;
    }
    return comparison*-1;
}

console.log(movieList.sort(movieByRating));

//or,

/*movieList.sort(function(a,b){
  return (b.rating-a.rating);
});
console.log(movieList);*/




function findByTitle( title){
  var matches=[];
  var temp1=title.toUpperCase();
  var temp2;
  for(var i= 0; i < movieList.length; i++){
    temp2=movieList[i].title.toUpperCase();
    if(temp2.search(temp1)!= -1){
      matches.push(movieList[i]);
    }
  }

  return matches;
}
var name = prompt('Input a keyword for search');
console.log(findByTitle(name));
