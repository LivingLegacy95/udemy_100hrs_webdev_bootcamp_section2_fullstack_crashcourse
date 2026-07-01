import React from 'react'
import HomePage from './Views/HomePage';
import CreatePage from './Views/CreatePage';
import DetailPage from './Views/DetailPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<DetailPage />} />

      </Routes>
    </div>
  )
}

export default App
