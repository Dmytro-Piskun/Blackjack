import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from "react-router-dom";
import './App.css'
import Authentification from './pages/Authentication/Authentication';
import Game from './pages/Game/Game';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
  path: "/",
  errorElement: <ErrorPage/>,
  // loader: () => {return redirect("/auth")},// check if logged in 
  //fgdgd
  },
  {
    path: "auth",
    element: <Authentification />
  },
  {
    path: "game",
    element: <Game />
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
