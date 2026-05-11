import { useState } from 'react'
import Nav from './components/Nav'
import Hub from './pages/Hub'
import Work from './pages/Work'
import Give from './pages/Give'
import Create from './pages/Create'
import Write from './pages/Write'
import './styles/global.css'

export default function App() {
  const [page, setPage] = useState('hub')

  const goTo = (p) => {
    setPage(p)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Nav page={page} goTo={goTo} />
      {page === 'hub'    && <Hub    goTo={goTo} />}
      {page === 'work'   && <Work   goTo={goTo} />}
      {page === 'give'   && <Give   goTo={goTo} />}
      {page === 'create' && <Create goTo={goTo} />}
      {page === 'write'  && <Write  goTo={goTo} />}
    </>
  )
}
