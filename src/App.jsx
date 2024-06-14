import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Protect from './components/Protect';
function App() {
  return (
    <div style={{ display: 'flex', background: 'steelblue', height: '100vh' }}>
      <Routes>
        <Route
          path="/"
          element={
            <Protect>
              <Home />
            </Protect>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
