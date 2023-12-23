import React, { useState, useEffect} from 'react';
import movies_data from 'src/assets/data/movies_data.json';
import {ReactComponent as Close} from 'src/assets/icons/close-outline.svg';

const BASE_URL = "https://movie-list.alphacamp.io";
const POSTER_URL = BASE_URL + "/posters/";
const movies = movies_data.results;

function Main(){
    // modal
    const [selectedMovie, setSelectedMovie] = useState(null);
    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    }
    const handleCloseModal = () => {
        setSelectedMovie(null);
    }

    const handleOutsideClick = (e) => {
        if (!e.current){
            setSelectedMovie(null);
        }
    }
    const handleModalBubbling = (e) => {
        e.stopPropagation()
    }

    useEffect(() => {
        // 在 mount 時添加全局點擊事件監聽器
        document.addEventListener('click', handleOutsideClick);
        // 在 unmount 時移除事件監聽器
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <>
            <main className="main" onClick={handleOutsideClick}>
                <div className="slick-slide">
                    <Slide />
                </div>
                
                <section className="movie-recommend">
                    <h2 className="movie-recommend__title">
                        推薦
                    </h2>
                    <div className="movie-recommend__cards">
                        <Recommend 
                            selectedMovie={selectedMovie}
                            handleMovieClick={handleMovieClick}
                            handleCloseModal={handleCloseModal}    
                            handleModalBubbling={handleModalBubbling}
                        />
                    </div>
                </section>

                <section className="movie-list">
                    <h2 className="movie-list__title">
                        趨勢
                    </h2>
                    <div className="movie-list__cards">
                        <MovieList 
                            selectedMovie={selectedMovie}
                            handleMovieClick={handleMovieClick}
                            handleCloseModal={handleCloseModal}    
                            handleModalBubbling={handleModalBubbling}
                        />
                    </div>
                    
                </section>
                
            </main>
        </>
    )
}

const slideImg = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9D18697D65F00609669B57C5158BDE72057F10CF35449CCCB7D7E9C70286840D/compose?width=2880&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim";

function Slide(){
    return (
        <>
            <a href="">
                <div className="img-container">
                    <img src={slideImg} alt="" />
                </div>
            </a>
        </>
    )
}


function Recommend({ selectedMovie, handleMovieClick,  handleCloseModal, handleModalBubbling}){

    const recommendMovies = [];
    for (let i = 23; i < 33; i++){
        recommendMovies.push(movies[i]);
    }

    return (
        <>
            {recommendMovies.map(data => 
                <div className="card" key={data.id} onClick={handleModalBubbling}>
                    <button onClick={() => handleMovieClick(data)}>
                        <div className="wrapper">
                            <img src={POSTER_URL + data.image} alt="" />
                            <div className="detail">
                                <h4 className="title">{data.title}</h4>
                                <p className="date">{data.release_date}</p>
                            </div>
                        </div>
                    </button>
                </div>    
            )}

            {selectedMovie && (
                <div className="modal" onClick={handleModalBubbling}>
                    <div className="modal-content">
                        <div className="content-top">
                            <h4 className="title">{selectedMovie.title}</h4>
                            <span className="close" onClick={handleCloseModal}>
                                <Close/>
                            </span>

                        </div>
                        <div className="content-bottom">
                            <img src={POSTER_URL + selectedMovie.image} alt="" />
                            <div className="detail">
                                <p className="date">{selectedMovie.release_date}</p>
                                <h4>Description:</h4>
                                <p className="description">{selectedMovie.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}


function MovieList({ selectedMovie, handleMovieClick, handleCloseModal, handleModalBubbling }){
    // pagination
    const moviesPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies  = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    const totalPages = Math.ceil(movies.length / moviesPerPage);

    const renderMovies = () => {
        return (
            <>
                <div className='cards-container' onClick={handleModalBubbling}>
                    {currentMovies.map(data => 
                        <div className="card" key={data.id} >
                            <button onClick={() => handleMovieClick(data)}>
                                <div className="wrapper">
                                    <img src={POSTER_URL + data.image} alt="" />
                                    <div className="detail">
                                        <h4 className="title">{data.title}</h4>
                                        <p className="date">{data.release_date}</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    )}
                </div>

                {selectedMovie && (
                    <div className="modal" onClick={handleModalBubbling}>
                        <div className="modal-content">
                            <div className="content-top">
                                <h4 className="title">{selectedMovie.title}</h4>
                                <span className="close" onClick={handleCloseModal}>
                                    <Close/>
                                </span>

                            </div>
                            <div className="content-bottom">
                                <img src={POSTER_URL + selectedMovie.image} alt="" />
                                <div className="detail">
                                    <p className="date">{selectedMovie.release_date}</p>
                                    <h4>Description:</h4>
                                    <p className="description">{selectedMovie.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </>
        )
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    return (
        <>
            {renderMovies()}
            <div className="pagination">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    )
}

export default Main;

