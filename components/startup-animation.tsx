"use client"

import { motion } from "framer-motion"

export default function StartupAnimation() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-green-600">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-white text-6xl font-bold"
      >
        WhatsApp
      </motion.div>
    </div>
  )
}

