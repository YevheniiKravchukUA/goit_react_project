import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import UserRoutes from 'UserRoutes';
import { store, persistor } from './redux/store';
import AuthLayOut from 'modules/AuthLayOut/AuthLayOut';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayOut>
          <BrowserRouter basename="goit_react_project">
            <UserRoutes />
          </BrowserRouter>
        </AuthLayOut>
      </PersistGate>
    </Provider>
  );
};
