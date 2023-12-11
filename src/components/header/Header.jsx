import { ReactComponent as Search } from 'src/assets/icons/search-outline.svg';

function Header(){
    return (
        <>
            <header className="header">
                <navbar className="navbar">
                    <div className="navbar__home-container">
                        <a href="" className="home">
                            Home
                        </a>
                    </div>
                    <div className="navbar__search-container">
                        <label htmlFor="search-input" className="visually-hidden"></label>
                        <input type="search" className="search-input" placeholder="Keyword"/>
                        <button className="search-btn" id="search-btn">
                            <Search/>
                        </button>
                    </div>
                </navbar>
            </header>
        </>
    )
    
}

export default Header;