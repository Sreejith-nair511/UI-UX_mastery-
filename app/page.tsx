"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, Phone, Camera, Settings, Sun, Moon } from "lucide-react"
import ChatList from "@/components/chat-list"
import StatusCarousel from "@/components/status-carousel"
import StartupAnimation from "@/components/startup-animation"

export default function Home() {
  const [theme, setTheme] = useState("dark")
  const [showStartup, setShowStartup] = useState(true)

  useEffect(() => {
    document.body.className = theme
    const timer = setTimeout(() => setShowStartup(false), 3000)
    return () => clearTimeout(timer)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <AnimatePresence>
      {showStartup ? (
        <StartupAnimation />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`min-h-screen flex flex-col ${theme === "dark" ? "bg-gradient-to-br from-gray-900 to-blue-900" : "bg-gradient-to-br from-blue-100 to-white"}`}
        >
          <header className="p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">WhatsApp</h1>
            <Button variant="ghost" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5" />}
            </Button>
          </header>
          <main className="flex-grow overflow-hidden">
            <div className="container mx-auto px-4 py-2">
              <Input
                className="w-full bg-white bg-opacity-20 backdrop-blur-lg rounded-full border-none placeholder-white placeholder-opacity-75 text-white mb-4"
                placeholder="Search chats, contacts, or messages"
              />
              <Tabs defaultValue="chats" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-white bg-opacity-20 backdrop-blur-lg rounded-full mb-4">
                  <TabsTrigger value="chats">Chats</TabsTrigger>
                  <TabsTrigger value="status">Status</TabsTrigger>
                  <TabsTrigger value="calls">Calls</TabsTrigger>
                </TabsList>
                <TabsContent value="chats">
                  <ChatList />
                </TabsContent>
                <TabsContent value="status">
                  <StatusCarousel />
                </TabsContent>
                <TabsContent value="calls">
                  <div className="text-white text-center">Calls content here</div>
                </TabsContent>
              </Tabs>
            </div>
          </main>
          <nav className="bg-white bg-opacity-10 backdrop-blur-lg border-t border-white border-opacity-20 py-2">
            <div className="container mx-auto px-4">
              <div className="flex justify-around">
                <Button variant="ghost" className="text-white">
                  <MessageCircle className="w-6 h-6" />
                </Button>
                <Button variant="ghost" className="text-white">
                  <Phone className="w-6 h-6" />
                </Button>
                <Button variant="ghost" className="text-white">
                  <Camera className="w-6 h-6" />
                </Button>
                <Button variant="ghost" className="text-white">
                  <Settings className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

