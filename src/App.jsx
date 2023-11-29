
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FrontPage } from './pages/Frontpage'
import { ContactPage } from "./pages/ContactPage";
import { ProductPage } from "./pages/ProductPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import {LoginPage} from './pages/LoginPage'
import { Layout } from "./Layout/MainLayout"




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FrontPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/productDetails" element={<ProductDetailsPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
