import Favorites from 'pages/Favorites'
import InitialPage from 'pages/InitialPage'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Player from 'pages/Player'
import NotFound from 'pages/NotFound'
import DefaultPage from 'pages/DefaultPage'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<InitialPage />}></Route>
          <Route path="Favorites" element={<Favorites />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>              
      </Routes>
    </BrowserRouter>
  )
}
