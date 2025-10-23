import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import './i18n'
import { slugsByLang } from './routes'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            {/* EN routes */}
            <Route path={slugsByLang.en.home} element={<Home />} />
            <Route path={slugsByLang.en.services} element={<Services />} />
            <Route path={slugsByLang.en.booking} element={<Booking />} />
            <Route path={slugsByLang.en.contact} element={<Contact />} />
            <Route path={slugsByLang.en.gallery} element={<Gallery />} />

            {/* TR routes */}
            <Route path={slugsByLang.tr.services} element={<Services />} />
            <Route path={slugsByLang.tr.booking} element={<Booking />} />
            <Route path={slugsByLang.tr.contact} element={<Contact />} />
            <Route path={slugsByLang.tr.gallery} element={<Gallery />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to={slugsByLang.en.home} replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App