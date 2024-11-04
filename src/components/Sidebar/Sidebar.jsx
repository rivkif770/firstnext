import React from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>קטגוריות</h2>
      <ul>
        <li>
          <Link href="/Jewelry">Jewelry</Link>
          <Link href="/Books">Books</Link>

        </li>

      </ul>
    </div>
  );
};

export default Sidebar;

