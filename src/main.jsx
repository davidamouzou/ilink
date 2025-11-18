import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css';
import { ProfileCard } from "./ProfileCard"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ProfileCard />
  </StrictMode>
);
