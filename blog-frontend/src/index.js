import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import AllBlogs from './components/allBlogPosts/index';
import BasicHero from './components/basicHero/index'
import BasicFooter from './components/basicFooter/index';
ReactDOM.render(
  <React.StrictMode>
    <BasicHero/>
    <AllBlogs />
    <BasicFooter/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
