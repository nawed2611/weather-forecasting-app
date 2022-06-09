import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Search from './Search/Search';
import Home from './Home';

function App() {

  const [city, setCity] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

  }

  return (
    <Router>
      <div className="App" >

        <Link to="/" style={{textDecoration: "none", color: "black", display: "flex", justifyContent: "center", alignItems: "center" }}><Typography variant="h2">Weather Forecaster</Typography></Link>

        <form onSubmit={handleSubmit} style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "2rem" }}>
          <input type="text" name="city" value={city} style={{ margin: "0.5rem", padding: "0.5rem"}} placeholder="eg. Kolkata" onChange={(e) => setCity(e.target.value) } />
          <input type="date" name="date" value={date} style={{ margin: "0.5rem", padding: "0.5rem"}}  onChange={(e) => setDate(e.target.value) } />
          <Link to="/search" style={{textDecoration: "none"}}><Button type="submit" size="small">Search</Button></Link>
        </form>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search city={city} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
