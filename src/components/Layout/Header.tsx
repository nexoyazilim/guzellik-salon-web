import { Link } from 'react-router-dom'
import { Menu, X, Wand2, Sun, Moon, Monitor } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../context/ThemeContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const { t, i18n } = useTranslation()
  const { theme, setTheme, actualTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isScrolled = scrollY > 50

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun size={20} />
      case 'dark':
        return <Moon size={20} />
      case 'system':
        return <Monitor size={20} />
      default:
        return <Sun size={20} />
    }
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md"
      style={{
        WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'blur(5px)',
      }}
      initial={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      animate={{
        backdropFilter: isScrolled ? 'blur(10px)' : 'blur(5px)',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.1)',
        boxShadow: isScrolled
          ? '0 10px 30px rgba(0, 0, 0, 0.1)'
          : '0 4px 15px rgba(0, 0, 0, 0.05)',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 pointer-events-none" />

      <nav className="relative max-w-7xl mx-auto px-4 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg shadow-rose-500/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Wand2 size={24} className="text-white" />
            </motion.div>
            <motion.span
              className="hidden md:inline font-display font-bold text-2xl text-rose-700 dark:text-rose-300"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {t('common.salonName')}
            </motion.span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {[
            { to: '/', label: t('nav.home') },
            { to: '/services', label: t('nav.services') },
            { to: '/gallery', label: t('nav.gallery') },
            { to: '/contact', label: t('nav.contact') },
          ].map((link) => (
            <motion.div
              key={link.to}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Link
                to={link.to}
                className="text-gray-700 dark:text-gray-300 font-semibold transition-colors duration-300 relative group"
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-lavender-500 group-hover:w-full transition-all duration-300"
                  layoutId={`underline-${link.to}`}
                />
              </Link>
            </motion.div>
          ))}

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/booking"
              className="btn-primary shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300"
            >
              {t('nav.bookNow')}
            </Link>
          </motion.div>

          {/* Language and Theme Switchers */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-white/20 dark:bg-slate-800/20 rounded-lg p-1 backdrop-blur-md">
              <motion.button
                onClick={() => changeLanguage('tr')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                  i18n.language === 'tr'
                    ? 'bg-rose-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🇹🇷
              </motion.button>
              <motion.button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                  i18n.language === 'en'
                    ? 'bg-rose-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🇺🇸
              </motion.button>
            </div>

            {/* Theme Switcher */}
            <motion.button
              onClick={() => {
                const themes: ('light' | 'dark' | 'system')[] = ['light', 'dark', 'system']
                const currentIndex = themes.indexOf(theme)
                const nextIndex = (currentIndex + 1) % themes.length
                setTheme(themes[nextIndex])
              }}
              className="p-2 bg-white/20 dark:bg-slate-800/20 rounded-lg backdrop-blur-md text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={`Current theme: ${theme}`}
            >
              {getThemeIcon()}
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-white/20 rounded-lg transition-colors backdrop-blur-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </motion.button>
      </nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="backdrop-blur-xl bg-white/40 dark:bg-slate-800/40 border-b border-white/20 dark:border-gray-700 px-4 py-4 space-y-2">
          {[
            { to: '/', label: t('nav.home') },
            { to: '/services', label: t('nav.services') },
            { to: '/gallery', label: t('nav.gallery') },
            { to: '/contact', label: t('nav.contact') },
          ].map((link) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ x: 8 }}
            >
              <Link
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 dark:text-gray-300 hover:text-rose-500 font-semibold py-2 px-3 rounded-lg hover:bg-white/30 dark:hover:bg-slate-700/30 transition-all duration-300"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Link
              to="/booking"
              onClick={() => setIsMenuOpen(false)}
              className="block btn-primary text-center py-3 rounded-lg shadow-lg shadow-rose-500/30 transition-all duration-300"
            >
              {t('nav.bookNow')}
            </Link>
          </motion.div>

          {/* Mobile Language and Theme Switchers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="flex items-center justify-center gap-4 pt-4 border-t border-white/20 dark:border-gray-700"
          >
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-white/20 dark:bg-slate-800/20 rounded-lg p-1 backdrop-blur-md">
              <motion.button
                onClick={() => changeLanguage('tr')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                  i18n.language === 'tr'
                    ? 'bg-rose-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🇹🇷
              </motion.button>
              <motion.button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                  i18n.language === 'en'
                    ? 'bg-rose-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🇺🇸
              </motion.button>
            </div>

            {/* Theme Switcher */}
            <motion.button
              onClick={() => {
                const themes: ('light' | 'dark' | 'system')[] = ['light', 'dark', 'system']
                const currentIndex = themes.indexOf(theme)
                const nextIndex = (currentIndex + 1) % themes.length
                setTheme(themes[nextIndex])
              }}
              className="p-2 bg-white/20 dark:bg-slate-800/20 rounded-lg backdrop-blur-md text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={`Current theme: ${theme}`}
            >
              {getThemeIcon()}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  )
}