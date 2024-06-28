import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            home
            <div>
                <h3>Create new invoice</h3>
                <button>
                    <NavLink to="/CreateInvoice">Create</NavLink>
                </button>
            </div>
        </div>
    )
}

export default Home;