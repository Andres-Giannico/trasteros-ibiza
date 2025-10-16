'use client'

import { useState, useEffect } from 'react'
import { Language, translations } from '@/lib/translations'

// Shared state across all components
let globalLanguage: Language = 'es'
const listeners: Set<(lang: Language) => void> = new Set()

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(globalLanguage)

  useEffect(() => {
    // Check if there's a saved language preference ONLY
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      globalLanguage = savedLanguage
      setLanguage(savedLanguage)
    } else {
      // If no saved preference, set default to Spanish and save it
      globalLanguage = 'es'
      setLanguage('es')
      localStorage.setItem('language', 'es')
    }

    // Add this component to the listeners
    const updateLanguage = (newLang: Language) => {
      setLanguage(newLang)
    }
    listeners.add(updateLanguage)

    return () => {
      listeners.delete(updateLanguage)
    }
  }, [])

  const changeLanguage = (newLanguage: Language) => {
    globalLanguage = newLanguage
    localStorage.setItem('language', newLanguage)
    
    // Notify all components
    listeners.forEach(listener => listener(newLanguage))
  }

  const t = translations[language]

  return {
    language,
    changeLanguage,
    t,
  }
}
