import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css';
import CardPage from "./page/CardPage"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <CardPage />
  </StrictMode>
);
