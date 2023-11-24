import { FC, ReactNode } from 'react'
import Footer from './sections/Footer'
import Header from './sections/Header'

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