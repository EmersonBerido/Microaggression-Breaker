import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Game from "./Routes/game.tsx"
import Home from "./Routes/home_page.tsx"
import Submission from "./Routes/submission.tsx"
import Community from './Routes/community.tsx';
import Outcome from './Routes/outcome.tsx';

const router = createBrowserRouter([
  {path : "/", element : <Home/>},
  {path : "/game", element : <Game/>},
  {path : "/outcome", element : <Outcome/>},
  {path : "/submit", element : <Submission/>},
  {path : "/community", element : <Community/>}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
