function Main(){
    return (
        <>
            <main className="main">
                <div className="slick-slide">
                    <Slide />
                </div>
                
                <section className="movie-recommend">
                    <h2 className="movie-recommend__title">
                        每月推薦
                    </h2>
                    <div className="movie-recommend__cards scroller">
                        <Recommend />
                    </div>
                </section>

                <section className="movie-list">
                    <h2 className="movie-list__title">
                        流行趨勢
                    </h2>
                    <div className="movie-list__cards">
                        <MovieList />
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

function Recommend(){
    return (
        <>
            <div className="card">
                <a href="">
                    <div className="wrapper">
                        <img src={testImg} alt="" />
                        <div className="detail">
                            <h4 className="title">{title}</h4>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                    <div className="wrapper">
                        <img src={testImg} alt="" />
                        <div className="detail">
                            <h4 className="title">{title}</h4>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                    <div className="wrapper">
                        <img src={testImg} alt="" />
                        <div className="detail">
                            <h4 className="title">{title}</h4>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                    <div className="wrapper">
                        <img src={testImg} alt="" />
                        <div className="detail">
                            <h4 className="title">{title}</h4>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                    <div className="wrapper">
                        <img src={testImg} alt="" />
                        <div className="detail">
                            <h4 className="title">{title}</h4>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                    <div className="wrapper">
                        <img src={testImg} alt="" />
                        <div className="detail">
                            <h4 className="title">{title}</h4>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                    <div className="wrapper">
                        <img src={testImg} alt="" />
                        <div className="detail">
                            <h4 className="title">{title}</h4>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

const testImg = "https://github.com/ALPHACamp/movie-list-api/blob/master/public/posters/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg?raw=true";
const title = "JURASSIK WORLD";
const date = "20231118";

function MovieList(){
    return (
        <>
            <div className="card">
                <a href="">
                    <div className="wrapper">
                        <img src={testImg} alt="" />
                        <div className="detail">
                            <h4 className="title">{title}</h4>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                    <div className="wrapper">
                        <img src={testImg} alt="" />
                        <div className="detail">
                            <h4 className="title">{title}</h4>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                    <div className="wrapper">
                        <img src={testImg} alt="" />
                        <div className="detail">
                            <h4 className="title">{title}</h4>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                    <div className="wrapper">
                        <img src={testImg} alt="" />
                        <div className="detail">
                            <h4 className="title">{title}</h4>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                    <div className="wrapper">
                        <img src={testImg} alt="" />
                        <div className="detail">
                            <h4 className="title">{title}</h4>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </a>
            </div>  

            <div className="card">
                <a href="">
                    <div className="wrapper">
                        <img src={testImg} alt="" />
                        <div className="detail">
                            <h4 className="title">{title}</h4>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                    <div className="wrapper">
                        <img src={testImg} alt="" />
                        <div className="detail">
                            <h4 className="title">{title}</h4>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                    <div className="wrapper">
                        <img src={testImg} alt="" />
                        <div className="detail">
                            <h4 className="title">{title}</h4>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </a>
            </div>  
            <div className="card">
                <a href="">
                    <div className="wrapper">
                        <img src={testImg} alt="" />
                        <div className="detail">
                            <h4 className="title">{title}</h4>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                    <div className="wrapper">
                        <img src={testImg} alt="" />
                        <div className="detail">
                            <h4 className="title">{title}</h4>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                    <div className="wrapper">
                        <img src={testImg} alt="" />
                        <div className="detail">
                            <h4 className="title">{title}</h4>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </a>
            </div>  

            <div className="card">
                <a href="">
                    <div className="wrapper">
                        <img src={testImg} alt="" />
                        <div className="detail">
                            <h4 className="title">{title}</h4>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                    <div className="wrapper">
                        <img src={testImg} alt="" />
                        <div className="detail">
                            <h4 className="title">{title}</h4>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                    <div className="wrapper">
                        <img src={testImg} alt="" />
                        <div className="detail">
                            <h4 className="title">{title}</h4>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </a>
            </div>                
        </>
    )
}

export default Main;

