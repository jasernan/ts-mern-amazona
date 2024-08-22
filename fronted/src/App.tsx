//import { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
// import { a } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="d-flex flex-column h-full">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>tsamazona</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-a">
              Cart
            </a>
            <a href="/signin" className="nav-a">
              Sign In
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className="text-center">All right reserved</div>
      </footer>
    </div>
  )
}

export default App
