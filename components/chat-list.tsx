"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const chats = [
  { id: 1, name: "Aarav", message: "Kya haal hai, bhai?", time: "10:30 AM", unread: 2 },
  { id: 2, name: "Diya", message: "Naya update dekha kya?", time: "Yesterday", unread: 0 },
  { id: 3, name: "Arjun", message: "Weekend pe milte hain!", time: "Tuesday", unread: 1 },
  { id: 4, name: "Priya", message: "Meeting ka time change ho gaya hai", time: "9:15 AM", unread: 3 },
  { id: 5, name: "Vikram", message: "Project ka deadline kya hai?", time: "Monday", unread: 0 },
]

export default function ChatList() {
  return (
    <div className="space-y-2">
      {chats.map((chat, index) => (
        <motion.div
          key={chat.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link href={`/chat/${chat.id}`}>
            <Card className="bg-white bg-opacity-10 backdrop-blur-md border-none hover:bg-opacity-20 transition-all duration-300">
              <CardContent className="p-4 flex items-center space-x-4">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Avatar>
                    <AvatarImage src={`https://i.pravatar.cc/150?u=${chat.id}`} />
                    <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </motion.div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-white">{chat.name}</h3>
                  <p className="text-sm text-white text-opacity-75">{chat.message}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white text-opacity-75">{chat.time}</p>
                  {chat.unread > 0 && (
                    <motion.span
                      className="inline-flex items-center justify-center w-5 h-5 bg-green-500 rounded-full text-xs font-bold text-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    >
                      {chat.unread}
                    </motion.span>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

