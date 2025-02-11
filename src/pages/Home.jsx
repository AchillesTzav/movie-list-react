import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");


  const movies = [
    {id: 1, title: "John Wick", releaseDate: "2020"},
    {id: 2, title: "The Road to El Dorado", releaseDate: "2000"},
    {id: 3, title: "Treasure Planet", releaseDate: "2004"},
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    alert(searchQuery)
    setSearchQuery("")
  };

  return <div className="home">
    <form onSubmit={handleSearch} className="search-form"> 
      <input 
        type="text"
        placeholder="Search for movies..." 
        className="search-input" 
        value={searchQuery} 
        onChange={ (e) => setSearchQuery(e.target.value) } 
      />

      <button type="submit" className="searh-btn">Search</button>
    </form>


    <div className="movies-grid">
      { movies.map(
        (movie) =>
          ( <MovieCard movie={movie} key={movie.id} />)
        )
      }
    </div>
  </div>
}

export default Home