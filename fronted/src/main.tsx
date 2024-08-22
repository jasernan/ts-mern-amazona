import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import './index.css'
import HomePage from './pages/HomePage.tsx'
import ProductPage from './pages/ProductPage.tsx'
import CartPage from './pages/CartPage.tsx'
import SignInPage from './pages/SingInPage.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />

      <Route path="cart" element={<CartPage />} />
      <Route path="signin" element={<SignInPage />} />
      {<Route path="product/:slug" element={<ProductPage />} />}
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* ... etc. */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
