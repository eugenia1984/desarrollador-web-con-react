import { FC, ReactNode } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'

interface LayoutProps {
  children: ReactNode
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}

export default Layout