"use client";

import { useState } from "react";
import {
  Menu,
  Settings,
  ArrowLeftRight,
  Mic,
  Edit3,
  Clock,
  Star,
  ChevronDown,
  Image,
  FileText,
  Globe,
} from "lucide-react";

export default function GoogleTranslate() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [activeTab, setActiveTab] = useState("text");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputText(value);
    // Simple mock translation - reverse the text
    if (value.trim()) {
      setOutputText(value.split("").reverse().join(""));
    } else {
      setOutputText("");
    }
  };

  const handleSwap = () => {
    const temp = inputText;
    setInputText(outputText);
    setOutputText(temp);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="w-6 h-6 cursor-pointer flex flex-col justify-center gap-1 hover:bg-gray-100 rounded p-1">
            <span className="w-4 h-0.5 bg-gray-600 rounded"></span>
            <span className="w-4 h-0.5 bg-gray-600 rounded"></span>
            <span className="w-4 h-0.5 bg-gray-600 rounded"></span>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xl font-normal">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC04]">o</span>
              <span className="text-[#34A853]">g</span>
              <span className="text-[#EA4335]">l</span>
              <span className="text-[#4285F4]">e</span>
            </span>
            <span className="text-xl text-gray-700 font-normal">
              Übersetzer
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-6 h-6 cursor-pointer text-gray-600 hover:bg-gray-100 rounded-full p-1">
            <Settings className="w-full h-full" />
          </button>
          <button className="w-6 h-6 cursor-pointer text-gray-600 hover:bg-gray-100 rounded-full p-1">
            <div className="grid grid-cols-3 gap-0.5 w-4 h-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-gray-600 rounded-full" />
              ))}
            </div>
          </button>
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer">
            <span className="text-white text-sm font-medium">J</span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6">
        {/* Tab Container */}
        <div className="flex gap-4 my-6">
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm cursor-pointer border transition-all ${
              activeTab === "text"
                ? "bg-blue-50 text-blue-600 border-blue-600"
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("text")}
          >
            <Edit3 className="w-4 h-4" />
            Text
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm cursor-pointer border transition-all ${
              activeTab === "images"
                ? "bg-blue-50 text-blue-600 border-blue-600"
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("images")}
          >
            <Image className="w-4 h-4" />
            Bilder
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm cursor-pointer border transition-all ${
              activeTab === "documents"
                ? "bg-blue-50 text-blue-600 border-blue-600"
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("documents")}
          >
            <FileText className="w-4 h-4" />
            Dokumente
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm cursor-pointer border transition-all ${
              activeTab === "websites"
                ? "bg-blue-50 text-blue-600 border-blue-600"
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("websites")}
          >
            <Globe className="w-4 h-4" />
            Websites
          </button>
        </div>

        {/* Translate Container */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          {/* Language Selector */}
          <div className="grid grid-cols-3 items-center px-4 py-4 border-b border-gray-200">
            {/* Source Languages - Left Column */}
            <div className="flex items-center gap-2 justify-start">
              <button className="flex items-center gap-2 px-3 py-2 rounded bg-gray-50 cursor-pointer text-sm text-blue-600 hover:bg-blue-50 transition-colors">
                <span>Deutsch</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded bg-gray-50 cursor-pointer text-sm text-blue-600 hover:bg-blue-50 transition-colors">
                <span>Persisch</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded bg-gray-50 cursor-pointer text-sm text-blue-600 hover:bg-blue-50 transition-colors">
                <span>Englisch</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Swap Button - Center Column */}
            <div className="flex items-center justify-center">
              <button
                className="w-10 h-10 rounded-full bg-white border border-gray-300 cursor-pointer flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm"
                onClick={handleSwap}
                title="Sprachen tauschen"
              >
                <ArrowLeftRight className="w-4 h-4" />
              </button>
            </div>

            {/* Target Languages - Right Column */}
            <div className="flex items-center gap-2 justify-end">
              <button className="flex items-center gap-2 px-3 py-2 rounded bg-gray-50 cursor-pointer text-sm text-blue-600 hover:bg-blue-50 transition-colors">
                <span>Persisch</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded bg-gray-50 cursor-pointer text-sm text-blue-600 hover:bg-blue-50 transition-colors">
                <span>Englisch</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded bg-gray-50 cursor-pointer text-sm text-blue-600 hover:bg-blue-50 transition-colors">
                <span>Deutsch</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Translate Content */}
          <div className="flex min-h-[200px]">
            {/* Input Section */}
            <div className="flex-1 flex flex-col border-r border-gray-200">
              <textarea
                className="flex-1 border-none outline-none p-4 text-lg resize-none bg-transparent font-inherit"
                placeholder="Text eingeben"
                value={inputText}
                onChange={handleInputChange}
                maxLength={5000}
              />
              <div className="flex items-center justify-between p-2 px-4 border-t border-gray-200">
                <div className="text-xs text-gray-600">
                  {inputText.length} / 5.000
                </div>
                <button className="w-6 h-6 bg-transparent border-none cursor-pointer text-gray-600 hover:bg-gray-100 rounded">
                  <Mic className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Output Section */}
            <div className="flex-1 flex flex-col bg-gray-50">
              <textarea
                className="flex-1 border-none outline-none p-4 text-lg resize-none bg-transparent font-inherit text-gray-800"
                placeholder="Übersetzung"
                value={outputText}
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex justify-center gap-16 my-8">
          <button className="flex flex-col items-center gap-2 cursor-pointer text-gray-600 hover:text-gray-800 transition-colors">
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition-colors">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-xs">Verlauf</div>
          </button>
          <button className="flex flex-col items-center gap-2 cursor-pointer text-gray-600 hover:text-gray-800 transition-colors">
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition-colors">
              <Star className="w-6 h-6" />
            </div>
            <div className="text-xs">Gespeichert</div>
          </button>
        </div>
      </div>

      {/* Feedback Link */}
      <a
        href="#"
        className="fixed bottom-4 right-4 text-xs text-gray-600 no-underline hover:underline"
      >
        Feedback geben
      </a>
    </div>
  );
}
