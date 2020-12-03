const data = loadData()
console.log(data)
const $moviesList = document.getElementById("moviesList")
renderMovies()

function renderMovies() {
  data.movies.forEach(movie => {
    const $movie = document.createElement("div")
    $movie.innerHTML = `<h1>${movie.name}</h1>`
    movie.reviews.forEach(review => {
      $movie.innerHTML += `<li>${review.rating}</li>`
    })
    $moviesList.append($movie)
  })
}

function loadData() {
  // JSON - Javascript Object Notation
  const movies = [
    {
      // key : value
      "name" : "Star Wars Episode IV", 
      "genre" : "Sci-Fi",
      "reviews" : [
        {
          "rating" : 5,
          "like" : true,
          "user" : {
            "name" : "John Word", 
            "gender" : "male", 
            "region" : "USA"
          }
        },
        {
          "rating" : 2,
          "like" : false,
          "user" : {
            "name" : "Josephine Orelia", 
            "gender" : "female", 
            "region" : "France"
          }
        }
      ]
    },
    
    {
      "name" : "The Grinch", 
      "reviews" : [
        {
        "rating" : 3
        },
        {
        "rating" : 3
        },
        {
        "rating" : 3
        },
        {
        "rating" : 3
        },
        {
        "rating" : 4
        },
        {
        "rating" : 4
        }
      ],
    },
    
    {
      // key : value
      "name" : "The Notebook", 
      "genre" : "Romantic Comedy",
      "reviews" : []
    }
  ]
  
  return {
    "movies" : movies
  }
  
}