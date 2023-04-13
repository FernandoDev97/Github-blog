import React from 'react'
import { LayoutContainer } from './styles'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
        <Header/>
        <main>
          <Outlet/>
        </main>
    </LayoutContainer>
  )
}
