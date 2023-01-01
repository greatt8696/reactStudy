import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainView from '../pages/main/mainView'

const Router = () => {
  const routes = [
    {
      path: '/',
      element: <MainView />,
      children: [{ path: '/', element: <MainView /> }],
    },
  ]
  return useRoutes(routes)
}

export default Router
