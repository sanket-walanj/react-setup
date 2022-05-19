import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src='https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL604_SR604,400_.jpg'
    alt=''
  />
);
const Title = () => {
  return <h1>DO EPIC SHIT</h1>;
};
const Author = () => {
  return <h4>Ankur Warikoo</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
