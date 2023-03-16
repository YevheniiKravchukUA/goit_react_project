import { NavLink } from 'react-router-dom';
import styles from './NavBarMobile.module.scss';
import home from '../../../assets/svg/home.svg';
import diagrama from '../../../assets/svg/diagrama.svg';
import currency from '../../../assets/svg/currency.svg';

const NavBarMobile = () => {
  return (
    <ul className={styles.list}>
      <div className={styles.linkWrapper}>
        <li className={styles.link}>
          <NavLink to="/home">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 3C5.68629 3 3 5.68629 3 9V35C3 38.3137 5.68629 41 9 41H35C38.3137 41 41 38.3137 41 35V9C41 5.68629 38.3137 3 35 3H9ZM18.9333 24.3594V32.5555H12.1V21.6274H8L21.6667 9.33325L35.3333 21.6274H31.2333V32.5555H24.4V24.3594H18.9333Z"
                fill="#6E78E8"
              />
            </svg>
          </NavLink>
        </li>
        <li>
          <NavLink to="/diagram">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 3C5.68629 3 3 5.68629 3 9V35C3 38.3137 5.68629 41 9 41H35C38.3137 41 41 38.3137 41 35V9C41 5.68629 38.3137 3 35 3H9ZM32.5 19.5555C33.7833 19.5555 34.8333 18.4555 34.8333 17.1111C34.8333 15.7666 33.7833 14.6666 32.5 14.6666C31.2166 14.6666 30.1666 15.7666 30.1666 17.1111C30.1666 17.3311 30.19 17.5389 30.2483 17.7344L26.1066 22.0855C25.92 22.0244 25.71 22 25.5 22C25.29 22 25.08 22.0244 24.8933 22.0855L21.9183 18.9689C21.9766 18.7733 22 18.5533 22 18.3333C22 16.9889 20.95 15.8889 19.6666 15.8889C18.3833 15.8889 17.3333 16.9889 17.3333 18.3333C17.3333 18.5533 17.3566 18.7733 17.415 18.9689L12.095 24.53C11.9083 24.4689 11.71 24.4444 11.5 24.4444C10.2166 24.4444 9.16664 25.5444 9.16664 26.8889C9.16664 28.2333 10.2166 29.3333 11.5 29.3333C12.7833 29.3333 13.8333 28.2333 13.8333 26.8889C13.8333 26.6689 13.81 26.4611 13.7516 26.2655L19.06 20.6922C19.2466 20.7533 19.4566 20.7778 19.6666 20.7778C19.8766 20.7778 20.0866 20.7533 20.2733 20.6922L23.2483 23.8089C23.19 24.0044 23.1666 24.2244 23.1666 24.4444C23.1666 25.7889 24.2166 26.8889 25.5 26.8889C26.7833 26.8889 27.8333 25.7889 27.8333 24.4444C27.8333 24.2244 27.81 24.0044 27.7516 23.8089L31.905 19.47C32.0916 19.5311 32.29 19.5555 32.5 19.5555Z"
                fill="#6E78E8"
              />
            </svg>
          </NavLink>
        </li>
        <li>
          <NavLink to="/currency">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 3C5.68629 3 3 5.68629 3 9V35C3 38.3137 5.68629 41 9 41H35C38.3137 41 41 38.3137 41 35V9C41 5.68629 38.3137 3 35 3H9ZM18.7523 18.5989C18.7523 19.7809 19.6607 20.5399 22.4852 21.2741C25.3096 22.0082 28.3332 23.2151 28.3332 26.7489C28.3332 29.2996 26.4046 30.7056 23.9783 31.166V33.8412H20.2455V31.1411C17.8565 30.631 15.8159 29.1005 15.6666 26.3756H18.4039C18.5408 27.8438 19.5487 28.9885 22.1119 28.9885C24.8617 28.9885 25.4714 27.6198 25.4714 26.7613C25.4714 25.6041 24.8493 24.5092 21.7386 23.7626C18.2671 22.9289 15.8905 21.498 15.8905 18.6238C15.8905 16.2223 17.8316 14.6546 20.2455 14.132V11.4443H23.9783V14.1693C26.5788 14.8039 27.8853 16.7698 27.9724 18.91H25.2225C25.1479 17.3546 24.3267 16.297 22.1119 16.297C20.0091 16.297 18.7523 17.2426 18.7523 18.5989Z"
                fill="#6E78E8"
              />
            </svg>
          </NavLink>
        </li>
      </div>
    </ul>
  );
};

export default NavBarMobile;
