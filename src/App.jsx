import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Protect from './components/Protect';
function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background: '#f5f5f5',
      }}
    >
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
