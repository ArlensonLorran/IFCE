import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar'>
            <h1>Meu Blog</h1>

            <div>
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/contato'>Contato</Link>
            </div>
        </nav>
    )
}

export default Navbar