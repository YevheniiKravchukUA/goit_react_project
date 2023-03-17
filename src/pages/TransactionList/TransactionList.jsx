import { NavLink } from 'react-router-dom';
import {
  selectorHistory,
  categories,
} from 'redux/AddTransaction/addTransaction-selectors';
import { useSelector } from 'react-redux';
import css from '../TransactionList/TransactionList.module.scss';
import svg from '../../assets/svg/edit-02.svg';
import formatDate from 'shared/utils/formateDate';

const TransactionList = () => {
  const allCategories = useSelector(categories);

  const history = useSelector(selectorHistory);

  const elements = history.map(
    ({ id, transactionDate, type, comment, amount, categoryId }) => {
      const selectedcCategory = allCategories.find(
        category => category.id === categoryId
      );

      return (
        <tr key={id}>
          <td>{formatDate(transactionDate)}</td>
          <td>{type === 'EXPENSE' ? '-' : '+'}</td>
          <td>{selectedcCategory.name}</td>
          <td className={css.tdComment}>{comment ? comment : '-'}</td>
          {amount > 0 && (
            <td className={css.positiveAmount}>{Math.abs(amount)}</td>
          )}
          {amount < 0 && (
            <td className={css.negativeAmount}>{Math.abs(amount)}</td>
          )}
          <td>
            <NavLink>
              <img src={svg} alt="Edit" className={css.svg} />
            </NavLink>
            <button className={css.btn}>Delete</button>
          </td>
        </tr>
      );
    }
  );
  return (
    <div className={css.box}>
      <table className={css.table}>
        <thead className={css.thead}>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
            <th></th>
          </tr>
        </thead>
        <tbody className={css.tbody}>{elements}</tbody>
      </table>
    </div>
  );
};

export default TransactionList;
