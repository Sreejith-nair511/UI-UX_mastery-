"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function OnboardingAnimation({ onComplete }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step < 2) {
        setStep(step + 1)
      } else {
        onComplete()
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [step, onComplete])

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="text-white text-6xl font-bold mb-8"
        variants={logoVariants}
        initial="hidden"
        animate="visible"
      >
        WhatsApp
      </motion.div>
      <motion.p className="text-white text-xl" variants={textVariants} initial="hidden" animate="visible">
        {step === 0 && "Welcome to the future of messaging"}
        {step === 1 && "Seamless. Secure. Smart."}
        {step === 2 && "Let's get started"}
      </motion.p>
    </motion.div>
  )
}

