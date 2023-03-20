import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { useLocation } from 'react-router-dom';
import style from './TempPage.module.scss';
import { TransitionOnClick } from '../Transition/Transition';
import { createPortal } from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Notifications } from '../Notifications/Notifications';
const modalRoot = document.querySelector('#modal-root');

export const TempPage = () => {
  const [showIt, setShowIt] = useState(false);
  const location = useLocation();
  const isOnHome = location.pathname === '/home';

  const showModal = () => {
    setShowIt(true);
  };
  const isButtonHidden = isOnHome ? 'block' : 'none';

  const hideModal = () => {
    setShowIt(false);
  };

  return createPortal(
    <div>
      <button
        className={style.btn}
        onClick={showModal}
        type="button"
        name="add"
        id="add"
        style={{ display: `${isButtonHidden}` }}
      ></button>
      <TransitionOnClick showIt={showIt} type={'opacity'} setShowIt={setShowIt}>
        <Modal
          hide={hideModal}
          textProp={'Add'}
          typeProp={`EXPENSE`}
          dateProp={new Date()}
          preventEdit={false}
        />
      </TransitionOnClick>
      <Notifications />
    </div>,
    modalRoot
  );
};
