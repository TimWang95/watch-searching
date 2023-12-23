import React, { useState } from 'react';
import { ReactComponent as Search } from 'src/assets/icons/search-outline.svg';
import { ReactComponent as Close } from 'src/assets/icons/close-outline.svg';
import movies_data from 'src/assets/data/movies_data.json';

function Header(){
    const BASE_URL = "https://movie-list.alphacamp.io";
    const POSTER_URL = BASE_URL + "/posters/";
    
    const [searchValue, setSearchValue] = useState('');
    const [filterMovies, setFilterMovies] = useState([]);

    const handleSearch = () => {
        let copyMovie = movies_data.results.filter((v) => {
            return v.title === searchValue;
            
        });
        setFilterMovies(copyMovie);
        // console.log(filterMovies) 
      
    }

    const handleCloseModal = () => {
        setFilterMovies([]);
    }
    
    return (
        <>
            <header className="header">
                <navbar className="navbar">
                    <div className="navbar__home-container">
                        <a href="#" className="home">
                            Home
                        </a>
                    </div>
                    <div className="navbar__search-container">
                        <label htmlFor="search-input" className="visually-hidden"></label>
                        <input 
                            type="search" 
                            className="search-input" 
                            placeholder="Keyword..."
                            value={searchValue}
                            onChange={e => {
                                setSearchValue(e.target.value);
                            }}   
                        />
                        <button className="search-btn" id="search-btn" onClick={handleSearch}>
                            <Search/>
                        </button>
                    </div>
                </navbar>
            </header>

            {filterMovies.length > 0 && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="content-top">
                            <h4 className="title">{filterMovies[0].title}</h4>
                            <span className="close" onClick={handleCloseModal}>
                                <Close/>
                            </span>

                        </div>
                        <div className="content-bottom">
                            <img src={POSTER_URL + filterMovies[0].image} alt="" />
                            <div className="detail">
                                <p className="date">{filterMovies[0].release_date}</p>
                                <h4>Description:</h4>
                                <p className="description">{filterMovies[0].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
    
}

export default Header;