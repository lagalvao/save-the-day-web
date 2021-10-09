import { Link } from 'react-router-dom';

import { FiLogIn, FiUser, FiHome, FiCalendar, FiBell, FiDollarSign } from 'react-icons/fi';

import { Container } from './styles';
import { useAuth } from '../../hooks/auth';

export default function Navbar() {
    const { signOut } = useAuth();
    function handleExit() {
        signOut();
    }

    return (
        <Container>
            <h1>SD</h1>
            <ul>
                <li><Link to="/dashboard"><FiHome size="30" /></Link></li>
                <li><Link to="/donation"><FiDollarSign size="30" /></Link></li>
                <li><Link to="/profile"><FiUser size="30" /></Link></li>
                <li><Link to="/notification"><FiBell size="30" /></Link></li>
                <li><Link to="/schedule"><FiCalendar size="30" /></Link></li>
                <li><Link to="/" onClick={handleExit}><FiLogIn size="30" /></Link></li>
            </ul>
        </Container>
    );
}