import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [advice, setAdvice] = useState('');

    const fetchAdvice = async () => {
      try {
        const res = await Axios.get('https://api.adviceslip.com/advice');
        const {advice } = res.data.slip
        setAdvice(advice)
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div className="app">
    <div className="card">
      <h1 className="heading">{advice}</h1>
      <button className="button" onClick={fetchAdvice}>
        <span>GIVE ME ADVICE!</span>
      </button>
    </div>
  </div>
  );
  

}

export default App;
