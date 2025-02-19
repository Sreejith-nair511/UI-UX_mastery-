"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, MoreVertical, Phone, VideoIcon, Smile, Paperclip, Mic } from "lucide-react"
import Link from "next/link"

const messages = [
  { id: 1, text: "Namaste! Kaise ho aap?", sender: "them" },
  { id: 2, text: "Main theek hoon, aap batao?", sender: "me" },
  { id: 3, text: "Bas, sab badhiya chal raha hai. Kya plan hai aaj ka?", sender: "them" },
  { id: 4, text: "Kuch khaas nahi, thoda kaam hai. Shaam ko free ho toh milte hain?", sender: "me" },
  { id: 5, text: "Haan, bilkul! Kahan milna hai?", sender: "them" },
]

export default function ChatPage({ params }: { params: { id: string } }) {
  const [newMessage, setNewMessage] = useState("")

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      <header className="bg-white bg-opacity-10 backdrop-blur-lg p-4 flex items-center space-x-4">
        <Link href="/">
          <ArrowLeft className="text-white" />
        </Link>
        <Avatar>
          <AvatarImage src={`https://i.pravatar.cc/150?u=${params.id}`} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <h2 className="text-white font-semibold">Chat Name</h2>
          <p className="text-white text-opacity-75 text-sm">Online</p>
        </div>
        <Button variant="ghost" size="icon">
          <Phone className="text-white" />
        </Button>
        <Button variant="ghost" size="icon">
          <VideoIcon className="text-white" />
        </Button>
        <Button variant="ghost" size="icon">
          <MoreVertical className="text-white" />
        </Button>
      </header>

      <main className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg ${message.sender === "me" ? "bg-green-500 text-white" : "bg-white bg-opacity-10 backdrop-blur-lg text-white"}`}
            >
              {message.text}
            </div>
          </motion.div>
        ))}
      </main>

      <footer className="bg-white bg-opacity-10 backdrop-blur-lg p-4">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Smile className="text-white" />
          </Button>
          <Input
            className="flex-grow bg-white bg-opacity-20 border-none text-white placeholder-white placeholder-opacity-50"
            placeholder="Type a message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button variant="ghost" size="icon">
            <Paperclip className="text-white" />
          </Button>
          {newMessage ? (
            <Button className="bg-green-500 hover:bg-green-600">Send</Button>
          ) : (
            <Button variant="ghost" size="icon">
              <Mic className="text-white" />
            </Button>
          )}
        </div>
      </footer>
    </div>
  )
}

