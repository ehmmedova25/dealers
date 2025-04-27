
import styles from './Navbar.module.css';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router';
import { FaBars } from "react-icons/fa6";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to='/'>DEALERS</Link>
                </div>
                <ul className={styles.pages}>
                    <li>COLLECTION ▾</li>
                    <li>SHOP</li>
                    <li>CATALOGS</li>
                    <li>CONTACT</li>
                    <li>
                        <Link to='/dashboard'>DASHBOARD</Link>
                    </li>
                </ul>
                <div className={styles.icons}>
                    <FiSearch />
                    <AiOutlineHeart className={styles.heart} />
                    <div className={styles.cart}>
                        <BsBag />
                        <span>2</span>
                    </div>
                    <FaBars className={styles.hamburger} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;