import React from 'react'
import { Route, Routes } from 'react-router';
import HomePage from './Views/HomePage';
import CreatePage from './Views/CreatePage';
import DetailPage from './Views/DetailPage';

const App = () => {
  return (
    <div data-theme="coffee">
      <button className="btn btn-primary">Click me</button>
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<DetailPage />} />
      </Routes>
    </div>
  )
}

export default App
