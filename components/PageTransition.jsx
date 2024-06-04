import { AnimatePresence } from 'framer-motion'
import React from 'react'
AnimatePresence
function PageTransition({children}) {
  return (
    <AnimatePresence>{children}</AnimatePresence>
  )
}

export default PageTransition