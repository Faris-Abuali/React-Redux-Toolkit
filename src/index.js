import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// ============================== Redux with Toolkit =============================================
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// ========= My Reducers: =====================
import usersReducer from "./features/UsersFeature";
// import themeReducer from "./features/theme";

const store = configureStore({
  reducer: {
    users: usersReducer, // the key `users` will be used to access this state (state.users)
    // theme: themeReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

