import styles from './Navbar.module.css';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBag } from 'react-icons/bs';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>DEALERS</div>
        <ul className={styles.menu}>
          <li>COLLECTION ▾</li>
          <li>SHOP</li>
          <li>CATALOGS</li>
          <li>CONTACT</li>
        </ul>
        <div className={styles.icons}>
          <FiSearch />
          <AiOutlineHeart />
          <div className={styles.cart}>
            <BsBag />
            <span>2</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
