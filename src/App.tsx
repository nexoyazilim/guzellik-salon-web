import { HashRouter as Router, Routes, Route, Navigate, Outlet, useParams } from 'react-router-dom'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import './i18n'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { slugs, normalizeLng } from './utils/paths'
import ScrollToTop from './components/ScrollToTop'

function LanguageLayout() {
  const params = useParams()
  const { i18n } = useTranslation()
  const lng = normalizeLng(params.lng)

  useEffect(() => {
    if (i18n.language !== lng) i18n.changeLanguage(lng)
  }, [lng, i18n])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function LanguageIndexRedirect() {
  const params = useParams()
  const lng = normalizeLng(params.lng)
  return <Navigate to={slugs[lng].home} replace />
}

function App() {
  const defaultLng: 'tr' | 'en' = 'tr'
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to={`/${defaultLng}/${slugs[defaultLng].home}`} replace />} />
        <Route path=":lng" element={<LanguageLayout />}> 
          {/* Index under /:lng -> redirect to localized home */}
          <Route index element={<LanguageIndexRedirect />} />
          {/* English slugs */}
          <Route path={slugs.en.home} element={<Home />} />
          <Route path={slugs.en.services} element={<Services />} />
          <Route path={slugs.en.gallery} element={<Gallery />} />
          <Route path={slugs.en.contact} element={<Contact />} />
          <Route path={slugs.en.booking} element={<Booking />} />
          {/* Turkish slugs */}
          <Route path={slugs.tr.home} element={<Home />} />
          <Route path={slugs.tr.services} element={<Services />} />
          <Route path={slugs.tr.gallery} element={<Gallery />} />
          <Route path={slugs.tr.contact} element={<Contact />} />
          <Route path={slugs.tr.booking} element={<Booking />} />
        </Route>
        {/* Fallback */}
        <Route path="*" element={<Navigate to={`/${defaultLng}/${slugs[defaultLng].home}`} replace />} />
      </Routes>
    </Router>
  )
}

export default App