import { Sidebar } from 'lucide-react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBarView from '../components/sideBar/SideBarView'
import TopBarView from '../components/topBar/TopBarView'

const Layout = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-green-300">
      <TopBarView />
      <SideBarView />
      {/* Outlet 안에 페이지들이 들어갑니다. */}
      <Outlet />
    </div>
  )
}

export default Layout
