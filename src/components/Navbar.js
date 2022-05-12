import { useContext } from 'react';
import BasketContext from '../store/basket-context';
import { Badge, Nav, NavItem } from "reactstrap";
import { Link } from 'react-router-dom';

const Navbar = () => {

    // display the number of items in basket

    const { basketList } = useContext(BasketContext)

    return (
        <Nav style={styles.navbar}>
            <NavItem>
                <Link style={styles.navlink} to='/home'>Accueil</Link>
            </NavItem>
            <NavItem style={styles.panierLink}>
                <Link style={styles.navlink} to='/basket'>Panier</Link>
                <Badge color="danger">{basketList.length}</Badge>
            </NavItem>
        </Nav>
    );
};

const styles = {
    navbar : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#277EC2',
        height: 60
    },
    navlink : {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textDecoration: 'none',
        paddingRight: 5,
        paddingLeft: 25,

    },
    panierLink: {
        display : 'flex',
        alignItems: 'center'
    }
}

export default Navbar;