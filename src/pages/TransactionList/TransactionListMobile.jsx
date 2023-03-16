import css from '../TransactionList/TransactionListMobile.module.scss';

const TransactionListMobile = () => {
  return (
    <div className={css.box}>
      <table className={css.table}>
        <tbody className={css.tbody}>
          <tr className={css.part}>
            <td className={css.pointFirst}></td>
            <td className={css.head}>Date</td>
            <td className={css.body}>04.01.19</td>
          </tr>
          <tr>
            <td className={css.point}></td>
            <td className={css.head}>Type</td>
            <td className={css.body}>-</td>
          </tr>
          <tr>
            <td className={css.point}></td>
            <td className={css.head}>Category</td>
            <td className={css.body}>Other</td>
          </tr>
          <tr>
            <td className={css.point}></td>
            <td className={css.head}>Comment</td>
            <td className={css.body}>Gift for your wife</td>
          </tr>
          <tr>
            <td className={css.point}></td>
            <td className={css.head}>Sum</td>
            <td className={css.body}>300</td>
          </tr>
          <tr>
            <td className={css.pointLast}></td>
            <td className={css.head}>
              <button className={css.btn}>Delete</button>
            </td>
            <td className={css.body}>
              <svg
                width="14"
                height="14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={css.svg}
              >
                <g clip-path="url(#a)">
                  <path
                    d="M10.4999 5.83343 8.1666 3.5001m-6.70835 9.0417 1.97422-.2194c.2412-.0268.3618-.0402.47453-.0767.1-.0324.19518-.0781.28294-.136.09891-.0652.18471-.151.35632-.3226l7.70364-7.70367c.6444-.64433.6444-1.689 0-2.33334-.6443-.64433-1.689-.64433-2.3333 0L2.21293 9.45375c-.17161.17161-.25741.25741-.32264.35633-.05787.08775-.10361.18293-.13599.28292-.03649.1127-.04989.2333-.07669.4745l-.21936 1.9743Z"
                    stroke="#000"
                    stroke-opacity=".8"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h14v14H0z" />
                  </clipPath>
                </defs>
              </svg>
              Edit
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TransactionListMobile;