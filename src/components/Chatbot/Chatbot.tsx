'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, X, Send, Tag, ArrowRight } from 'lucide-react';
import { matchQuery } from './matchQuery';
import { Store } from '../../data/stores';

type ChatMessage =
  | { id: string; role: 'bot'; kind: 'text'; text: string }
  | { id: string; role: 'bot'; kind: 'stores'; stores: Store[]; categoryLink: { name: string; slug: string } | null }
  | { id: string; role: 'user'; kind: 'text'; text: string };

const SUGGESTED_CHIPS = ['Amazon offers', 'Travel deals', 'Fashion coupons'];

let idCounter = 0;
const nextId = () => `msg-${++idCounter}`;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: nextId(), role: 'bot', kind: 'text', text: "Hi! Type a store name or category (e.g. \"Amazon\" or \"Travel\") and I'll find the best offers for you." },
  ]);
  const threadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (threadRef.current) {
      threadRef.current.scrollTop = threadRef.current.scrollHeight;
    }
  }, [messages, open]);

  const logMiss = (query: string) => {
    fetch('/api/chatbot-miss', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    }).catch(() => {
      // Logging is non-critical — never block the chat UX on this.
    });
  };

  const handleSend = (text: string) => {
    const query = text.trim();
    if (!query) return;

    setMessages((prev) => [...prev, { id: nextId(), role: 'user', kind: 'text', text: query }]);
    setInput('');

    const { stores, matchedCategory } = matchQuery(query);
    if (stores.length > 0) {
      setMessages((prev) => [...prev, { id: nextId(), role: 'bot', kind: 'stores', stores, categoryLink: matchedCategory }]);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          id: nextId(),
          role: 'bot',
          kind: 'text',
          text: "I couldn't find that store or category yet — we're adding new stores all the time. Try browsing all stores in the meantime.",
        },
      ]);
      logMiss(query);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50">
      {open && (
        <div className="absolute bottom-16 right-0 w-[calc(100vw-2rem)] max-w-sm bg-white rounded-2xl border border-[#E8E8F0] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200 flex flex-col">
          {/* Header */}
          <div className="bg-[#5B4FBE] px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2 text-white">
              <MessageCircle size={18} />
              <span className="text-sm font-bold">CouponsCrew Offers Assistant</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Message thread */}
          <div ref={threadRef} className="max-h-96 overflow-y-auto p-3 space-y-3 bg-[#F8F8FF]">
            {messages.map((msg) => {
              if (msg.role === 'user') {
                return (
                  <div key={msg.id} className="flex justify-end">
                    <div className="bg-[#5B4FBE] text-white text-sm font-medium rounded-2xl rounded-br-sm px-3.5 py-2 max-w-[80%]">
                      {msg.text}
                    </div>
                  </div>
                );
              }

              if (msg.kind === 'text') {
                return (
                  <div key={msg.id} className="flex justify-start">
                    <div className="bg-white border border-[#E8E8F0] text-[#1A1A2E] text-sm rounded-2xl rounded-bl-sm px-3.5 py-2 max-w-[85%] leading-relaxed">
                      {msg.text}
                    </div>
                  </div>
                );
              }

              return (
                <div key={msg.id} className="flex flex-col gap-2">
                  {msg.stores.map((store) => (
                    <Link
                      key={store.id}
                      href={`/stores/${store.slug}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 bg-white border border-[#E8E8F0] rounded-2xl p-3 hover:border-[#5B4FBE] transition-colors"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 overflow-hidden"
                        style={{ backgroundColor: store.logoBg }}
                      >
                        <span
                          className={`font-black tracking-tighter ${store.logo.length > 3 ? 'text-[9px]' : 'text-sm'}`}
                          style={{ color: store.logoColor }}
                        >
                          {store.logo}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-[#1A1A2E] truncate">{store.name}</p>
                        <p className="text-xs text-gray-400 truncate">{store.category}</p>
                      </div>
                      <span className="flex items-center gap-1 text-[10px] font-bold text-[#5B4FBE] bg-[#F0EEFF] px-2 py-1 rounded-full shrink-0">
                        <Tag size={10} />
                        {store.discountLabel}
                      </span>
                    </Link>
                  ))}
                  {msg.categoryLink && (
                    <Link
                      href={`/stores/categories/${msg.categoryLink.slug}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center gap-1.5 text-sm font-bold text-[#5B4FBE] bg-[#F0EEFF] hover:bg-[#E3DFFF] rounded-2xl py-2.5 transition-colors"
                    >
                      <span>Browse {msg.categoryLink.name}</span>
                      <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Suggested chips */}
          <div className="px-3 pt-2 pb-1 flex flex-wrap gap-1.5 border-t border-[#E8E8F0] bg-white shrink-0">
            {SUGGESTED_CHIPS.map((chip) => (
              <button
                key={chip}
                onClick={() => handleSend(chip)}
                className="text-[11px] font-semibold text-[#5B4FBE] bg-[#F0EEFF] hover:bg-[#E3DFFF] px-2.5 py-1 rounded-full transition-colors cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 bg-white flex items-center gap-2 shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a store or category..."
              className="flex-1 px-3.5 py-2.5 bg-[#F8F8FF] border border-[#E8E8F0] focus:border-[#5B4FBE] rounded-xl text-sm text-[#1A1A2E] font-medium placeholder:text-gray-400 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              aria-label="Send"
              className="w-10 h-10 shrink-0 rounded-xl bg-[#5B4FBE] hover:bg-[#4A3FA8] text-white flex items-center justify-center transition-all active:scale-90 cursor-pointer"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open offers chat"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#5B4FBE] hover:bg-[#4A3FA8] text-white shadow-lg flex items-center justify-center transition-all active:scale-90"
      >
        {open ? <X size={22} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
