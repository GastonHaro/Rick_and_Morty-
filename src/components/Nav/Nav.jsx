import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({onSearch, setAccess}) => {
    const handleLogOut = () => {
        setAccess(false);
    }

    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            <button>
                <Link to='/about'>ABOUT</Link>
            </button>
            <button>
                <Link to='/home'>HOME</Link>
            </button>
            <button>
                <Link to='/favorites'>FAVORITES</Link>
            </button>
            <button onClick={handleLogOut}>
                <Link to='/'>LOG OUT</Link>
            </button>
        </div>
    )
}

export default Nav;
