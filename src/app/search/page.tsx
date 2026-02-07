"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, X, Mic, Camera, SearchIcon, Globe, Image as ImageIcon, Video, MoreVertical, Settings, Grid3X3 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { performSearch, SearchOutput } from "@/ai/flows/search-flow";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setHasSearched(true);
    try {
      const data = await performSearch(query);
      setResults(data);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#202124] text-[#e8eaed] font-sans">
      <Navbar />
      
      <main className={`flex flex-col items-center pt-24 pb-12 px-4 ${!hasSearched ? 'justify-center min-h-[calc(100vh-140px)]' : ''}`}>
        
        {!hasSearched ? (
          <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in zoom-in duration-500">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-white">
              NOIR<span className="text-primary">SEARCH</span>
            </h1>
            
            <form onSubmit={handleSearch} className="w-full relative group">
              <div className="relative flex items-center bg-[#303134] hover:bg-[#3c4043] border border-transparent focus-within:bg-[#303134] focus-within:border-transparent focus-within:shadow-[0_1px_6px_rgba(32,33,36,0.28)] rounded-full h-12 px-5 transition-all">
                <Search className="h-5 w-5 text-[#9aa0a6] mr-3" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white text-base"
                  placeholder="Search anything..."
                />
                <div className="flex items-center gap-3 ml-2">
                  <Mic className="h-5 w-5 text-primary cursor-pointer" />
                  <Camera className="h-5 w-5 text-primary cursor-pointer" />
                </div>
              </div>

              <div className="flex justify-center gap-3 mt-8">
                <Button type="submit" variant="secondary" className="bg-[#303134] hover:bg-[#3c4043] border-none text-[#e8eaed] px-6 h-9 rounded-md">
                  Noir Search
                </Button>
                <Button type="button" variant="secondary" className="bg-[#303134] hover:bg-[#3c4043] border-none text-[#e8eaed] px-6 h-9 rounded-md">
                  I&apos;m Feeling Lucky
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="w-full max-w-5xl animate-in fade-in duration-500">
            {/* Results Header */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <Link href="/search" onClick={() => setHasSearched(false)} className="text-2xl font-bold tracking-tighter">
                NOIR<span className="text-primary">SEARCH</span>
              </Link>
              
              <form onSubmit={handleSearch} className="flex-1 max-w-2xl relative">
                <div className="relative flex items-center bg-[#303134] border border-transparent rounded-full h-11 px-5">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-white text-sm"
                  />
                  <div className="flex items-center gap-3 ml-2">
                    {query && <X className="h-5 w-5 text-[#9aa0a6] cursor-pointer" onClick={() => setQuery("")} />}
                    <div className="w-px h-6 bg-[#5f6368]" />
                    <SearchIcon className="h-5 w-5 text-primary cursor-pointer" onClick={handleSearch} />
                  </div>
                </div>
              </form>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-6 border-b border-[#3c4043] text-sm text-[#9aa0a6] mb-8 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-1 text-primary border-b-2 border-primary pb-3 px-1 cursor-pointer">
                <Search className="h-4 w-4" /> All
              </div>
              <div className="flex items-center gap-1 pb-3 px-1 hover:text-[#e8eaed] cursor-pointer">
                <Globe className="h-4 w-4" /> News
              </div>
              <div className="flex items-center gap-1 pb-3 px-1 hover:text-[#e8eaed] cursor-pointer">
                <ImageIcon className="h-4 w-4" /> Images
              </div>
              <div className="flex items-center gap-1 pb-3 px-1 hover:text-[#e8eaed] cursor-pointer">
                <Video className="h-4 w-4" /> Videos
              </div>
              <div className="flex items-center gap-1 pb-3 px-1 hover:text-[#e8eaed] cursor-pointer">
                <MoreVertical className="h-4 w-4" /> More
              </div>
            </div>

            {/* Results */}
            <div className="space-y-8 max-w-2xl">
              <p className="text-sm text-[#9aa0a6]">
                About {results?.results.length || 0} results ({loading ? 'searching...' : '0.42 seconds'})
              </p>

              {loading ? (
                <div className="space-y-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="animate-pulse space-y-2">
                      <div className="h-4 w-1/3 bg-[#303134] rounded" />
                      <div className="h-6 w-2/3 bg-[#303134] rounded" />
                      <div className="h-16 w-full bg-[#303134] rounded" />
                    </div>
                  ))}
                </div>
              ) : (
                results?.results.map((result, idx) => (
                  <div key={idx} className="group">
                    <div className="text-sm text-[#bdc1c6] mb-1 truncate">
                      {result.link}
                    </div>
                    <Link href="#" className="text-xl text-[#8ab4f8] hover:underline block mb-2 font-medium">
                      {result.title}
                    </Link>
                    <p className="text-sm text-[#bdc1c6] leading-relaxed">
                      {result.snippet}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
