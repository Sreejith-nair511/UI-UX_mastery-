"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const statuses = [
  { id: 1, name: "My Status", image: "/placeholder.svg?height=100&width=100" },
  { id: 2, name: "Aarav", image: "https://i.pravatar.cc/150?u=2" },
  { id: 3, name: "Diya", image: "https://i.pravatar.cc/150?u=3" },
  { id: 4, name: "Arjun", image: "https://i.pravatar.cc/150?u=4" },
  { id: 5, name: "Priya", image: "https://i.pravatar.cc/150?u=5" },
]

export default function StatusCarousel() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border border-white border-opacity-20">
      <div className="flex w-max space-x-4 p-4">
        {statuses.map((status, index) => (
          <motion.div
            key={status.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="w-20 bg-transparent border-none">
              <CardContent className="flex flex-col items-center p-2">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Avatar className="w-16 h-16 border-2 border-green-500">
                    <AvatarImage src={status.image} alt={status.name} />
                    <AvatarFallback>{status.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </motion.div>
                <p className="mt-2 text-xs text-center text-white truncate w-full">{status.name}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

