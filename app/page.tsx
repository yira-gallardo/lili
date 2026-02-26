"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const tourDates = [
    { city: "San Luis", date: "20/02/2026" },
    { city: "León", date: "21/02/2026" },
    { city: "Toluca", date: "22/02/2026" },
  ];

  return (
    <div className="bg-black">
      {/* Mobile Fixed Menu Button */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 px-6 py-4 text-center mix-blend-difference">
        <button
          onClick={() => setMenuOpen(true)}
          className="text-xs font-medium text-white tracking-[0.3em]"
        >
          MENU
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col">
          <div className="px-6 py-4 text-center border-b border-gray-200">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-xs font-medium text-black tracking-[0.3em]"
            >
              CLOSE
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            <a
              href="#tour"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold text-black tracking-widest hover:text-black/50 transition-colors"
            >
              TOUR
            </a>
            <a
              href="#music"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold text-black tracking-widest hover:text-black/50 transition-colors"
            >
              MUSIC
            </a>
            <a
              href="#merch"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold text-black tracking-widest hover:text-black/50 transition-colors"
            >
              MERCH
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold text-black tracking-widest hover:text-black/50 transition-colors"
            >
              CONTACT
            </a>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row">
        {/* Band Logo - Desktop: Centered between sections */}
        <div className="hidden md:block absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer transition-all duration-300 hover:opacity-60">
          <Image
            src="/img/logo-negro-1.png"
            alt="LILI"
            width={400}
            height={160}
            className="w-[300px] lg:w-[380px] h-auto"
            priority
          />
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col min-h-screen">
          {/* Mobile Band Logo */}
          <div className="bg-white px-6 pt-14 pb-8 flex justify-center">
            <Image
              src="/img/logo-negro-1.png"
              alt="LILI"
              width={300}
              height={120}
              className="w-[250px] h-auto"
              priority
            />
          </div>

          {/* Mobile Image */}
          <div className="relative flex-1 min-h-[60vh]">
            <Image
              src="/img/img-1.jpg"
              alt="LILI Band"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Mobile Social Icons */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/Lilibandmx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/70 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@lilibandmx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/70 transition-colors"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/lilibandmx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/70 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@LILIbandMX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/70 transition-colors"
                aria-label="YouTube"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* Spotify */}
              <a
                href="https://open.spotify.com/intl-es/artist/0EsxGHyMDM8kRC2sgB66OH"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/70 transition-colors"
                aria-label="Spotify"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </a>
              {/* Apple Music */}
              <a
                href="https://music.apple.com/mx/artist/lili/1702774077"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/70 transition-colors"
                aria-label="Apple Music"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop: Left Side - White */}
        <div className="hidden md:flex w-full md:w-1/2 bg-white min-h-screen flex-col justify-between p-8 md:p-12">
          {/* Navigation */}
          <nav className="flex flex-wrap gap-8 md:gap-10">
            <a
              href="#tour"
              className="text-xs font-medium text-gray-600 tracking-widest hover:text-black transition-colors"
            >
              TOUR
            </a>
            <a
              href="#music"
              className="text-xs font-medium text-gray-600 tracking-widest hover:text-black transition-colors"
            >
              MUSIC
            </a>
            <a
              href="#merch"
              className="text-xs font-medium text-gray-600 tracking-widest hover:text-black transition-colors"
            >
              MERCH
            </a>
            <a
              href="#contact"
              className="text-xs font-medium text-gray-600 tracking-widest hover:text-black transition-colors"
            >
              CONTACT
            </a>
          </nav>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/Lilibandmx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-black/50 transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@lilibandmx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-black/50 transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/lilibandmx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-black/50 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@LILIbandMX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-black/50 transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* Spotify */}
            <a
              href="https://open.spotify.com/intl-es/artist/0EsxGHyMDM8kRC2sgB66OH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-black/50 transition-colors"
              aria-label="Spotify"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </a>

            {/* Apple Music */}
            <a
              href="https://music.apple.com/mx/artist/lili/1702774077"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-black/50 transition-colors"
              aria-label="Apple Music"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
              </svg>
            </a>
          </div>
        </div>

        {/* Desktop: Right Side - Image */}
        <div className="hidden md:block w-full md:w-1/2 relative min-h-[60vh] md:min-h-screen">
          <Image
            src="/img/img-1.jpg"
            alt="LILI Band"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Tour Section */}
      <section id="tour" className="bg-black py-24 px-8 md:px-16">
        {/* Tour Title */}
        <h2 className="text-center text-white text-sm tracking-[0.3em] mb-16">
          TOUR DATES
        </h2>

        {/* Divider */}
        <div className="max-w-4xl mx-auto border-t border-white/20 mb-12" />

        {/* Tour Name */}
        <h3 className="text-center text-white text-2xl md:text-3xl font-bold tracking-wide mb-12">
          Vamos Otra Vez
        </h3>

        {/* Tour Dates List */}
        <div className="max-w-2xl mx-auto space-y-6">
          {tourDates.map((tour, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-4 border-b border-white/10 hover:bg-white/5 transition-colors px-4"
            >
              <div className="flex items-center gap-8">
                <span className="text-white font-bold text-lg md:text-xl">
                  {tour.date}
                </span>
                <span className="text-white/70 text-base md:text-lg">
                  {tour.city}
                </span>
              </div>
              <a
                href="#"
                className="text-xs tracking-widest text-white border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors"
              >
                TICKETS
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="relative min-h-screen">
        {/* Mobile: Full background image with Spotify overlay */}
        <div className="md:hidden relative min-h-screen">
          {/* Background Image */}
          <Image
            src="/img/img-2.jpg"
            alt="LILI Band"
            fill
            className="object-cover object-center"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
            {/* Spotify Embed */}
            <div className="w-full max-w-sm">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/6AVf3QF5ADzMOgLZuUYXFM?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>

            {/* More Music Link */}
            <a
              href="https://open.spotify.com/intl-es/artist/0EsxGHyMDM8kRC2sgB66OH"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 text-sm text-white tracking-[0.3em] underline underline-offset-8 hover:text-white/70 transition-colors"
            >
              MORE MUSIC
            </a>
          </div>
        </div>

        {/* Desktop: Side by side layout */}
        <div className="hidden md:flex flex-row min-h-screen">
          {/* Left Side - Spotify */}
          <div className="w-1/2 bg-black flex flex-col items-center justify-center p-16">
            {/* Spotify Embed */}
            <div className="w-full max-w-sm">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/6AVf3QF5ADzMOgLZuUYXFM?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>

            {/* More Music Link */}
            <a
              href="https://open.spotify.com/intl-es/artist/0EsxGHyMDM8kRC2sgB66OH"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 text-sm text-white tracking-[0.3em] underline underline-offset-8 hover:text-white/70 transition-colors"
            >
              MORE MUSIC
            </a>
          </div>

          {/* Right Side - Image */}
          <div className="w-1/2 relative min-h-screen">
            <Image
              src="/img/img-2.jpg"
              alt="LILI Band"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Merch Section */}
      <section id="merch" className="relative min-h-screen">
        {/* Mobile: Full background image with Store overlay */}
        <div className="md:hidden relative min-h-screen">
          {/* Background Image */}
          <Image
            src="/img/img-5.jpg"
            alt="LILI Merch"
            fill
            className="object-cover object-center"
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
            {/* Band Logo */}
            <Image
              src="/img/logo-blanco-1.png"
              alt="LILI"
              width={150}
              height={60}
              className="w-[120px] h-auto mb-8"
            />

            {/* Store Button */}
            <a
              href="#"
              className="text-sm text-white tracking-[0.3em] border border-white px-12 py-4 hover:bg-white hover:text-black transition-colors"
            >
              STORE
            </a>
          </div>
        </div>

        {/* Desktop: Side by side layout */}
        <div className="hidden md:flex flex-row min-h-screen">
          {/* Left Side - Image */}
          <div className="w-1/2 relative min-h-screen">
            <Image
              src="/img/img-5.jpg"
              alt="LILI Merch"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right Side - Store */}
          <div className="w-1/2 bg-black flex flex-col items-center justify-center p-16">
            {/* Band Logo */}
            <Image
              src="/img/logo-blanco-1.png"
              alt="LILI"
              width={300}
              height={120}
              className="w-[250px] lg:w-[300px] h-auto mb-12"
            />

            {/* Store Link */}
            <a
              href="#"
              className="text-sm text-white tracking-[0.3em] underline underline-offset-8 hover:text-white/70 transition-colors"
            >
              STORE
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-24 px-8 md:px-16">
        {/* Contact Info */}
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-sm text-white tracking-[0.3em] mb-8">CONTACT</h3>

          <div className="space-y-4">
            <a
              href="mailto:carolinamayagui@icloud.com"
              className="block text-white/70 text-sm tracking-wider hover:text-white transition-colors"
            >
              carolinamayagui@icloud.com
            </a>
            <a
              href="tel:+529983497682"
              className="block text-white/70 text-sm tracking-wider hover:text-white transition-colors"
            >
              998 349 7682
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-8 md:px-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-xs text-white/50 tracking-wider">
            © 2026 LILI. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/Lilibandmx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@lilibandmx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/lilibandmx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@LILIbandMX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* Spotify */}
            <a
              href="https://open.spotify.com/intl-es/artist/0EsxGHyMDM8kRC2sgB66OH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Spotify"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </a>

            {/* Apple Music */}
            <a
              href="https://music.apple.com/mx/artist/lili/1702774077"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Apple Music"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
              </svg>
            </a>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 text-xs text-white/50">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
