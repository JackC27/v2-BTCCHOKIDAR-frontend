import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { App } from "./App.jsx";

  const domContainer = document.querySelector('#root');
  const root = createRoot(domContainer);
  root.render(<App />);
