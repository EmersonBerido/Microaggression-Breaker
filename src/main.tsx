import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import Game from "./Routes/game.tsx"
import Home from "./Routes/home_page.tsx"
import Submission from "./Routes/submission.tsx"

const router = createBrowserRouter([
  {path : "/", element : <Home/>},
  {path : "/game", element : <Game/>},
  {path : "/submit", element : <Submission/>}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
