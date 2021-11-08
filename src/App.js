import React from 'react';
import "./App.css"; 
import { BrowserRouter } from 'react-router-dom';
import MainPage from './Components/MainPage'
// import {Provider} from 'react-redux';
class App extends React.Component{
  render() {
    return (
      // <Provider store={store}>
     <BrowserRouter>
      <div >
        <MainPage />
      </div>
     </BrowserRouter>
    // </Provider>
    );
  }
  }

export default App;
