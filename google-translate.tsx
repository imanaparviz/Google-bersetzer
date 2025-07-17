"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Menu, Settings, ArrowLeftRight, Mic, Edit3, History, Star, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Component() {
  const [inputText, setInputText] = useState("")
  const [activeTab, setActiveTab] = useState("text")

  return (
    <div className="h-screen w-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Menu className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="text-2xl font-normal">
              <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span>
            </div>
            <span className="text-xl text-gray-700 ml-1">Übersetzer</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Settings className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-600">
            <div className="grid grid-cols-3 gap-0.5 w-4 h-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-gray-600 rounded-full" />
              ))}
            </div>
          </Button>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-purple-500 text-white text-sm">U</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="flex gap-6 px-6 pt-6 pb-4">
        <Button
          variant={activeTab === "text" ? "default" : "ghost"}
          className={`flex items-center gap-2 rounded-full px-4 py-2 ${
            activeTab === "text" ? "bg-blue-100 text-blue-700 hover:bg-blue-100" : "text-gray-600 hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab("text")}
        >
          <Edit3 className="w-4 h-4" />
          Text
        </Button>
        <Button
          variant="ghost"
          className="flex items-center gap-2 rounded-full px-4 py-2 text-gray-600 hover:bg-gray-100"
          onClick={() => setActiveTab("images")}
        >
          <div className="w-4 h-4 border border-gray-400 rounded" />
          Bilder
        </Button>
        <Button
          variant="ghost"
          className="flex items-center gap-2 rounded-full px-4 py-2 text-gray-600 hover:bg-gray-100"
          onClick={() => setActiveTab("documents")}
        >
          <div className="w-4 h-4 border border-gray-400 rounded-sm" />
          Dokumente
        </Button>
        <Button
          variant="ghost"
          className="flex items-center gap-2 rounded-full px-4 py-2 text-gray-600 hover:bg-gray-100"
          onClick={() => setActiveTab("websites")}
        >
          <div className="w-4 h-4 border border-gray-400 rounded" />
          Websites
        </Button>
      </div>

      {/* Language Selection */}
      <div className="flex items-center justify-center gap-4 px-6 pb-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-blue-600 hover:bg-blue-50 font-normal">
            Sprache erkennen
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-gray-700 hover:bg-gray-100 font-normal flex items-center gap-1">
                Deutsch
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Deutsch</DropdownMenuItem>
              <DropdownMenuItem>Englisch</DropdownMenuItem>
              <DropdownMenuItem>Persisch</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-gray-700 hover:bg-gray-100 font-normal flex items-center gap-1">
                Persisch
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Persisch</DropdownMenuItem>
              <DropdownMenuItem>Englisch</DropdownMenuItem>
              <DropdownMenuItem>Deutsch</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-gray-700 hover:bg-gray-100 font-normal flex items-center gap-1">
                Englisch
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Englisch</DropdownMenuItem>
              <DropdownMenuItem>Deutsch</DropdownMenuItem>
              <DropdownMenuItem>Persisch</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100">
          <ArrowLeftRight className="w-5 h-5" />
        </Button>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-gray-700 hover:bg-gray-100 font-normal flex items-center gap-1">
                Persisch
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Persisch</DropdownMenuItem>
              <DropdownMenuItem>Englisch</DropdownMenuItem>
              <DropdownMenuItem>Deutsch</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-gray-700 hover:bg-gray-100 font-normal flex items-center gap-1">
                Englisch
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Englisch</DropdownMenuItem>
              <DropdownMenuItem>Deutsch</DropdownMenuItem>
              <DropdownMenuItem>Persisch</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-gray-700 hover:bg-gray-100 font-normal flex items-center gap-1">
                Deutsch
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Deutsch</DropdownMenuItem>
              <DropdownMenuItem>Englisch</DropdownMenuItem>
              <DropdownMenuItem>Persisch</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Translation Area */}
      <div className="flex-1 flex px-6 gap-6 pb-6">
        {/* Input Side */}
        <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden">
          <div className="relative h-full">
            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder=""
              className="w-full h-full resize-none border-0 text-lg p-4 focus:ring-0 focus:outline-none"
              maxLength={5000}
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
                <Mic className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{inputText.length} / 5.000</span>
                <Button variant="ghost" size="icon" className="w-6 h-6 text-gray-400 hover:text-gray-600">
                  <Edit3 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Output Side */}
        <div className="flex-1 border border-gray-300 rounded-lg bg-gray-50">
          <div className="p-4 h-full">
            <div className="text-lg text-gray-500">Übersetzung</div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between px-6 pb-6">
        <div className="flex gap-8">
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-2 text-gray-600 hover:bg-gray-100 h-auto py-3"
          >
            <History className="w-6 h-6" />
            <span className="text-sm">Verlauf</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-2 text-gray-600 hover:bg-gray-100 h-auto py-3"
          >
            <Star className="w-6 h-6" />
            <span className="text-sm">Gespeichert</span>
          </Button>
        </div>
        <Button variant="ghost" className="text-blue-600 hover:bg-blue-50 text-sm">
          Feedback geben
        </Button>
      </div>
    </div>
  )
}
