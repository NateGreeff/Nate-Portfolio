import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function NavLink({ name, path }) {
    const location = useLocation();
    
    return (
        <Link key={name} to={path} className={location.pathname === path ? 'active' : ''}>
        <Button sx={{'&:hover': {backgroundColor: 'transparent'}}} className='navButton' variant="text">{name}</Button>
        </Link>
    );
}