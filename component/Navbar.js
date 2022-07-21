import Link from 'next/link'

import styles from '../styles/layout.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <Link href="/">
          <a>
            <svg
              className={styles.icon_dash}
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <g>
                  <path
                    d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z"
                    fillRule="evenodd"
                  />
                  <polygon
                    fillRule="evenodd"
                    points="19.41,10.42 17.99,9 14.82,12.17 13.41,10.75 12,12.16 14.82,15"
                  />
                  <rect fillRule="evenodd" height="2" width="5" x="5" y="7" />
                  <rect fillRule="evenodd" height="2" width="5" x="5" y="11" />
                  <rect fillRule="evenodd" height="2" width="5" x="5" y="15" />
                </g>
              </g>
            </svg>
          </a>
        </Link>

        <Link href="/ticketView">
          <a>
            <svg
              className={styles.add}
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </a>
        </Link>
      </ul>
    </nav>
  )
}
export default Navbar
