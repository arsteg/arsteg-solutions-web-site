"use client";

import { motion } from "framer-motion";

// Technology icons as SVG components
const TechIcon = ({ name }: { name: string }) => {
  const icons: Record<string, JSX.Element> = {
    "Microsoft Azure": (
      <svg viewBox="0 0 96 96" className="h-10 w-10">
        <defs>
          <linearGradient id="azure-a" x1="58.97" x2="37.05" y1="9.01" y2="71.97" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#114a8b" />
            <stop offset="1" stopColor="#0669bc" />
          </linearGradient>
          <linearGradient id="azure-b" x1="60.01" x2="53.47" y1="32.19" y2="34.39" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopOpacity=".3" />
            <stop offset=".07" stopOpacity=".2" />
            <stop offset=".32" stopOpacity=".1" />
            <stop offset=".62" stopOpacity=".05" />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="azure-c" x1="50.95" x2="73.14" y1="7.3" y2="73.29" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#3ccbf4" />
            <stop offset="1" stopColor="#2892df" />
          </linearGradient>
        </defs>
        <path fill="url(#azure-a)" d="M33.34 8.35h24.32L32.67 83.33a4.78 4.78 0 0 1-4.53 3.26H9.4a4.77 4.77 0 0 1-4.51-6.3L29.33 11.6a5.6 5.6 0 0 1 4.01-3.25Z" />
        <path fill="#0078d4" d="M71.17 60.26H29.88a2.15 2.15 0 0 0-1.47 3.72l26.59 24.88a5.63 5.63 0 0 0 3.84 1.51h23.79Z" />
        <path fill="url(#azure-b)" d="M33.34 8.35a5.52 5.52 0 0 0-5.25 3.78L3.94 80.14a4.77 4.77 0 0 0 4.5 6.44h19.53a5.84 5.84 0 0 0 4.79-3.54L41.85 60.3l18.8 17.58a5.58 5.58 0 0 0 3.54 1.29h23.67l-10.4-30.92H40.43L57.63 8.35Z" />
        <path fill="url(#azure-c)" d="M66.59 11.6a5.58 5.58 0 0 0-5.27-3.26H34.13a5.58 5.58 0 0 1 5.26 3.26l24.44 68.69a4.77 4.77 0 0 1-4.51 6.3h27.19a4.77 4.77 0 0 0 4.51-6.3Z" />
      </svg>
    ),
    "AWS": (
      <svg viewBox="0 0 80 80" className="h-10 w-10">
        <path fill="#252F3E" d="M22.8 50.1c0 .9.1 1.6.3 2.1.2.5.5 1.1.9 1.7.2.2.2.4.2.6 0 .3-.2.5-.5.8l-1.7 1.1c-.2.2-.5.2-.7.2-.3 0-.5-.1-.8-.4-.4-.4-.7-.9-1-1.4-.3-.5-.6-1.1-.9-1.8-2.3 2.7-5.2 4-8.6 4-2.5 0-4.4-.7-5.9-2.1-1.5-1.4-2.2-3.3-2.2-5.7 0-2.5.9-4.5 2.7-6.1 1.8-1.6 4.2-2.4 7.2-2.4 1 0 2 .1 3.1.2 1.1.2 2.2.4 3.4.7v-2.2c0-2.3-.5-3.8-1.4-4.8-.9-1-2.5-1.4-4.7-1.4-1 0-2.1.1-3.1.4-1.1.3-2.1.6-3.1 1.1-.5.2-.8.3-1 .4-.2.1-.4.1-.5.1-.5 0-.7-.3-.7-1v-1.3c0-.5.1-.9.2-1.1.2-.2.4-.4.9-.7 1-.5 2.2-.9 3.6-1.3 1.4-.4 2.9-.5 4.4-.5 3.4 0 5.8.8 7.4 2.3 1.6 1.5 2.4 3.9 2.4 7.1v9.3h-.1zm-11.9 4.4c1 0 2-.2 3.1-.5 1.1-.4 2-.9 2.8-1.8.5-.6.9-1.2 1-2 .2-.8.3-1.7.3-2.8v-1.3c-.8-.2-1.8-.4-2.7-.5-1-.1-1.9-.2-2.8-.2-2 0-3.4.4-4.4 1.2-1 .8-1.5 2-1.5 3.5 0 1.4.4 2.5 1.1 3.2.7.8 1.8 1.2 3.1 1.2zm23.6 3.1c-.6 0-1-.1-1.3-.3-.3-.2-.5-.6-.7-1.2L26 34.7c-.2-.6-.3-1-.3-1.2 0-.5.2-.8.8-.8h2.6c.6 0 1.1.1 1.3.3.3.2.5.6.7 1.2l4.7 18.7 4.4-18.7c.2-.6.4-1 .7-1.2.3-.2.8-.3 1.4-.3h2.2c.6 0 1.1.1 1.4.3.3.2.5.6.7 1.2l4.4 18.9 4.9-18.9c.2-.6.4-1 .7-1.2.3-.2.7-.3 1.3-.3h2.5c.5 0 .8.3.8.8 0 .2 0 .3-.1.5s-.1.5-.2.8L53.4 56.1c-.2.6-.4 1-.7 1.2-.3.2-.7.3-1.3.3h-2.3c-.6 0-1.1-.1-1.4-.3-.3-.2-.5-.6-.7-1.2l-4.4-18.2-4.3 18.2c-.2.6-.4 1-.7 1.2-.3.2-.8.3-1.4.3h-2.3v.1zm37.8 1c-1.5 0-3-.2-4.4-.5-1.5-.4-2.6-.8-3.3-1.2-.5-.3-.8-.6-.9-.9-.1-.3-.2-.6-.2-.9v-1.4c0-.7.3-1 .8-1 .2 0 .4 0 .6.1.2.1.5.2.8.4 1.1.5 2.3.9 3.5 1.2 1.2.3 2.4.4 3.7.4 2 0 3.5-.3 4.6-1 1.1-.7 1.7-1.7 1.7-3 0-.9-.3-1.6-.9-2.2-.6-.6-1.7-1.1-3.3-1.6l-4.8-1.5c-2.4-.8-4.2-1.9-5.2-3.4-1-1.5-1.6-3.1-1.6-4.9 0-1.4.3-2.7.9-3.8.6-1.1 1.4-2 2.4-2.8 1-.8 2.2-1.4 3.5-1.8 1.3-.4 2.8-.6 4.3-.6.8 0 1.6 0 2.4.1.8.1 1.5.2 2.2.4.7.2 1.4.3 2 .5.6.2 1.1.4 1.5.7.5.3.9.6 1.1 1 .2.4.4.8.4 1.3v1.3c0 .7-.3 1-.8 1-.3 0-.7-.1-1.2-.4-1.7-.8-3.6-1.2-5.8-1.2-1.8 0-3.2.3-4.2.9-1 .6-1.5 1.5-1.5 2.8 0 .9.3 1.6 1 2.2.6.6 1.8 1.2 3.5 1.7l4.7 1.5c2.4.8 4.1 1.9 5.1 3.2 1 1.4 1.5 2.9 1.5 4.7 0 1.5-.3 2.8-.9 4-.6 1.2-1.4 2.2-2.5 3-1.1.8-2.3 1.5-3.8 1.9-1.5.5-3.2.7-5 .7z" />
        <path fill="#F90" d="M76.3 64.8C68.1 70.9 56.4 74.2 46.4 74.2c-14.2 0-27-5.3-36.7-14-.8-.7-.1-1.7.8-1.1 10.5 6.1 23.4 9.8 36.8 9.8 9 0 18.9-1.9 28-5.7 1.4-.6 2.6.9 1 1.6zm2.9-3.3c-1.1-1.4-7-0.7-9.7-.3-.8.1-0.9-0.6-0.2-1.1 4.7-3.3 12.5-2.4 13.4-1.3.9 1.1-.2 9.1-4.7 12.9-.7.6-1.4.3-1.1-.5 1-2.6 3.4-8.3 2.3-9.7z" />
      </svg>
    ),
    "Google Cloud": (
      <svg viewBox="0 0 80 80" className="h-10 w-10">
        <path fill="#EA4335" d="M50.4 22.8l5.6-5.6.3-2.4c-10.2-9.2-25.9-8.8-35.6.9C17.5 18.9 15.5 23 14.4 27.4l2-.3 11.1-1.8.9-.9c5.4-5.9 14.4-6.7 20.6-1.6h1.4z" />
        <path fill="#4285F4" d="M65.6 27.4c-1.3-4.9-3.9-9.3-7.5-12.6l-7.7 7.7c3 2.4 4.7 6 4.7 9.8v1.2c3.4 0 6.2 2.8 6.2 6.2s-2.8 6.2-6.2 6.2H40l-1.2 1.2v7.4l1.2 1.2h15.1c9.6.1 17.4-7.5 17.5-17.1.1-5.9-2.9-11.3-7-14.2z" />
        <path fill="#34A853" d="M24.9 54.5h15.1v-9.9H24.9c-.9 0-1.7-.2-2.5-.5l-1.7.5-4.9 4.9-.4 1.7c2.8 2.1 6.2 3.3 9.5 3.3z" />
        <path fill="#FBBC05" d="M24.9 24.2c-9.6 0-17.4 7.8-17.4 17.4 0 5.8 2.9 10.9 7.3 14L24.4 46c-2.4-1.1-4.1-3.6-4.1-6.4 0-3.9 3.1-7 7-7 2.8 0 5.3 1.7 6.4 4.1l9.6-9.6c-3.1-4.4-8.2-7.3-14-7.3l-4.4 4.4z" />
      </svg>
    ),
    "React": (
      <svg viewBox="0 0 80 80" className="h-10 w-10">
        <circle cx="40" cy="40" r="7.5" fill="#61DAFB" />
        <g fill="none" stroke="#61DAFB" strokeWidth="2.5">
          <ellipse cx="40" cy="40" rx="28" ry="11" />
          <ellipse cx="40" cy="40" rx="28" ry="11" transform="rotate(60 40 40)" />
          <ellipse cx="40" cy="40" rx="28" ry="11" transform="rotate(120 40 40)" />
        </g>
      </svg>
    ),
    "Vue.js": (
      <svg viewBox="0 0 80 80" className="h-10 w-10">
        <path fill="#41B883" d="M49.3 10H64L40 52.5 16 10h24.5L40 18.8z" />
        <path fill="#35495E" d="M24.5 10L40 37.5 55.5 10H49.3L40 26.2 30.7 10z" />
      </svg>
    ),
    ".NET": (
      <svg viewBox="0 0 80 80" className="h-10 w-10">
        <path fill="#512BD4" d="M40 8C22.3 8 8 22.3 8 40s14.3 32 32 32 32-14.3 32-32S57.7 8 40 8z" />
        <path fill="#fff" d="M21.8 51.9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8.4-1.5h-3.1V27.8h3.1v22.6zm13.4 0h-3.1V37.3l-5.8 11.4h-.3l-5.8-11.4v14.1h-3.1V27.8h3.5l5.6 11.1 5.6-11.1h3.4v22.6zm15.6 0h-10.5V27.8h10.3v2.9h-7.2v6.9h6.9v2.9h-6.9v7.1h7.4v2.8z" />
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 80 80" className="h-10 w-10">
        <path fill="#689F63" d="M40 70c-1.2 0-2.3-.3-3.3-.9L30.5 65c-1.6-.9-.8-1.2-.3-1.4 1.2-.4 1.5-.5 2.8-1.2.1-.1.3 0 .5 0l4.8 2.8c.2.1.4.1.6 0l18.6-10.7c.2-.1.3-.3.3-.5V32.9c0-.2-.1-.4-.3-.5L38.9 21.7c-.2-.1-.4-.1-.6 0L19.7 32.4c-.2.1-.3.3-.3.5V54c0 .2.1.4.3.5l5.1 2.9c2.8 1.4 4.5-.2 4.5-1.9V34.6c0-.3.2-.5.5-.5h2.3c.3 0 .5.2.5.5v20.9c0 3.7-2 5.8-5.5 5.8-1.1 0-1.9 0-4.3-1.2l-4.9-2.8c-2-1.2-3.3-3.4-3.3-5.7V32.9c0-2.3 1.3-4.5 3.3-5.7l18.6-10.7c2-.1 4.5-.1 6.5 0l18.6 10.7c2 1.2 3.3 3.4 3.3 5.7v21.2c0 2.3-1.3 4.5-3.3 5.7l-18.6 10.7c-1 .5-2.1.8-3.3.8z" />
        <path fill="#689F63" d="M46.1 53.9c-8.1 0-9.8-3.7-9.8-6.8 0-.3.2-.5.5-.5h2.4c.2 0 .5.2.5.4.3 2.3 1.4 3.5 6.4 3.5 3.9 0 5.6-0.9 5.6-3 0-1.2-.5-2.1-6.6-2.7-5.1-.5-8.3-1.6-8.3-5.8 0-3.8 3.2-6.1 8.6-6.1 6.1 0 9 2.1 9.4 6.6 0 .1 0 .3-.1.4-.1.1-.2.2-.4.2h-2.4c-.2 0-.4-.2-.5-.4-.5-2.4-1.8-3.2-6-3.2-4.4 0-4.9 1.5-4.9 2.7 0 1.4.6 1.8 6.4 2.6 5.7.8 8.5 1.9 8.5 5.9 0 4.1-3.4 6.5-9.3 6.5z" />
      </svg>
    ),
    "OpenAI": (
      <svg viewBox="0 0 80 80" className="h-10 w-10">
        <path fill="#10A37F" d="M67.2 34.2c1.1-3.4.7-7.1-1.2-10.2-2.8-4.8-8.2-7.4-13.7-6.5-2.2-2.9-5.6-4.6-9.3-4.7-5.5-.1-10.4 3.3-12.3 8.4-3.5.7-6.6 2.9-8.4 6-2.8 4.8-2.2 10.9 1.4 15.1-1.1 3.4-.7 7.1 1.2 10.2 2.8 4.8 8.2 7.4 13.7 6.5 2.2 2.9 5.6 4.6 9.3 4.7 5.5.1 10.4-3.3 12.3-8.4 3.5-.7 6.6-2.9 8.4-6 2.8-4.8 2.2-10.9-1.4-15.1zM48 59.1c-2.3.6-4.8 0-6.6-1.6l.3-.2 10.9-6.3c.6-.3.9-.9.9-1.5V37l4.6 2.7v12.6c0 3.8-2.8 7.2-6.5 7.8l-3.6-1zm-24.3-7.2c-1.2-2-1.5-4.4-.9-6.7l.3.2 10.9 6.3c.5.3 1.2.3 1.7 0l13.4-7.7v5.3l-11 6.4c-3.3 1.9-7.5 1.4-10.3-1.1l-4.1-2.7zm-3.2-24.2c1.2-2 3-3.5 5.2-4.2v12.9c0 .6.4 1.2 1 1.5l13.3 7.7-4.6 2.7-11-6.4c-3.3-1.9-4.9-5.9-4-9.5l.1-4.7zm41.7 9.7l-13.4-7.7 4.6-2.7 11 6.4c3.3 1.9 4.9 5.9 4 9.5v4.7c-1.2 2-3 3.5-5.2 4.2V38.9c0-.6-.4-1.2-1-1.5zm4.6-6.8l-.3-.2-10.9-6.3c-.5-.3-1.2-.3-1.7 0l-13.4 7.7v-5.3l11-6.4c3.3-1.9 7.5-1.4 10.2 1.1l1 .7c1.2 2 1.5 4.4.9 6.7l.2 2zM35 43l-4.6-2.7v-12.6c0-3.8 2.8-7.2 6.5-7.8l3.6 1.1c2.3-.6 4.8 0 6.6 1.6l-.3.2-10.9 6.3c-.5.3-.9.9-.9 1.5V43zm2.5-5.4l5.9-3.4 6 3.5v6.9l-6 3.4-5.9-3.4v-7z" />
      </svg>
    ),
    "Flutter": (
      <svg viewBox="0 0 80 80" className="h-10 w-10">
        <path fill="#42A5F5" d="M48 12L14 46l10.6 10.6L67.8 12H48zm0 34.4l-10.6 10.5L48 67.6h19.8L57 56.9l10.8-10.5H48z" />
        <path fill="#1A237E" opacity=".8" d="M37.4 56.9L48 67.6h19.8L57 56.9z" />
        <path fill="#0D47A1" d="M24.6 56.6l12.8 12.8L48 58.8 35.4 46z" />
      </svg>
    ),
    "Python": (
      <svg viewBox="0 0 80 80" className="h-10 w-10">
        <defs>
          <linearGradient id="py-a" x1="12.96" x2="79.24" y1="12.07" y2="78.35" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#387eb8" />
            <stop offset="1" stopColor="#366994" />
          </linearGradient>
          <linearGradient id="py-b" x1=".76" x2="68.22" y1="-.04" y2="67.42" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#ffe052" />
            <stop offset="1" stopColor="#ffc331" />
          </linearGradient>
        </defs>
        <path fill="url(#py-a)" d="M39.7 10c-15.1 0-14.2 6.5-14.2 6.5l0 6.8h14.4v2H19.8s-9.7-1.1-9.7 14.2c0 15.3 8.4 14.7 8.4 14.7h5v-7.1s-.3-8.4 8.3-8.4h14.3s8-.1 8-7.8V17.8s1.2-7.8-14.4-7.8zm-8 4.5c1.4 0 2.6 1.2 2.6 2.6 0 1.4-1.2 2.6-2.6 2.6-1.4 0-2.6-1.2-2.6-2.6 0-1.4 1.2-2.6 2.6-2.6z" />
        <path fill="url(#py-b)" d="M40.3 70c15.1 0 14.2-6.5 14.2-6.5l0-6.8H40.2v-2h20.1s9.7 1.1 9.7-14.2c0-15.3-8.4-14.7-8.4-14.7h-5v7.1s.3 8.4-8.3 8.4H34s-8 .1-8 7.8v13.1s-1.2 7.8 14.4 7.8zm8-4.5c-1.4 0-2.6-1.2-2.6-2.6 0-1.4 1.2-2.6 2.6-2.6 1.4 0 2.6 1.2 2.6 2.6 0 1.4-1.2 2.6-2.6 2.6z" />
      </svg>
    ),
    "TypeScript": (
      <svg viewBox="0 0 80 80" className="h-10 w-10">
        <rect width="64" height="64" x="8" y="8" fill="#3178C6" rx="4" />
        <path fill="#fff" d="M47.4 57.1V62c1 .5 2.2.9 3.5 1.2 1.3.3 2.7.4 4.2.4 1.4 0 2.8-.2 4-.5 1.3-.3 2.4-.8 3.3-1.5.9-.7 1.7-1.6 2.2-2.6.5-1.1.8-2.4.8-3.9 0-1.1-.2-2-.5-2.9-.3-.8-.8-1.6-1.4-2.2-.6-.7-1.3-1.2-2.2-1.7-.8-.5-1.8-1-2.8-1.4-1.3-.5-2.4-1-3.2-1.4-.8-.4-1.5-.8-2-1.2-.5-.4-.9-.8-1.1-1.2-.2-.4-.4-.9-.4-1.5 0-.5.1-1 .4-1.4.2-.4.6-.8 1-1.1.4-.3.9-.5 1.5-.7.6-.2 1.2-.2 1.9-.2.5 0 1 0 1.6.1.5.1 1.1.2 1.6.4.5.2 1 .4 1.5.7.5.3.9.6 1.3 1V35c-.8-.4-1.7-.7-2.8-1-1.1-.2-2.3-.4-3.6-.4-1.4 0-2.8.2-4 .5-1.2.4-2.3.9-3.2 1.6-.9.7-1.6 1.5-2.1 2.5-.5 1-.8 2.2-.8 3.5 0 1.8.5 3.3 1.6 4.5 1.1 1.2 2.7 2.3 4.9 3.1 1 .4 1.9.8 2.7 1.1.8.4 1.4.7 2 1.1.5.4.9.8 1.2 1.2.3.4.4.9.4 1.5 0 .5-.1 1-.4 1.4-.2.4-.6.7-1 1-.5.3-1 .5-1.6.6-.6.1-1.3.2-2.1.2-1.4 0-2.7-.2-4-.7-1.3-.5-2.4-1.2-3.4-2zM44.6 36.3h-6.9v28h-5.5v-28h-6.9v-4.6h19.3v4.6z" />
      </svg>
    ),
    "PostgreSQL": (
      <svg viewBox="0 0 80 80" className="h-10 w-10">
        <path fill="#336791" d="M57.8 52.2c.5-3.7.2-4.3 2.6-3.6l.6 0c1.9.1 4.4-.3 5.9-1 3.1-1.5 4.9-4 1.9-3.3-6.9 1.6-7.4-.9-7.4-.9 7.3-10.9 10.4-24.7 7.8-28.1-7.2-9.3-19.6-4.9-19.8-4.8l-.1 0c-1.4-.3-2.9-.5-4.6-.4-3.1.1-5.4 1-7.2 2.4 0 0-21.9-9-20.9 11.4.2 4.3 6.2 32.8 13.4 24.2 2.6-3.2 5.1-5.8 5.1-5.8 1.2.8 2.7 1.2 4.3 1.1l.1-.1c0 .4 0 .7 0 1.1-1.8 2-1.3 2.4-4.9 3.1-3.6.8-1.5 2.1 0 2.5 1.8.4 5.9 1 8.7-2.7l-.1.4c.8.6 1.4 4.4 1.3 7.8-.1 3.4-.2 5.7.4 7.6.6 1.8 1.2 5.9 6.4 4.7 4.3-1 6.5-3.6 6.9-7.9.3-3.1.8-2.6 0.9-5.3l.5-1.5c.5-4.5-.1-5.9 3.1-5.2l.7.1z" />
        <path fill="#fff" d="M67.5 44.9c-.4-.1-.8-.1-1.1-.1-.2 0-.3 0-.5 0-2.1.1-3.5.7-4.4 1.3.5-2.3.4-4.2-1-5.5-3.1-3.1-8.5-1.9-8.6-1.9l-.2 0-.1.2c-.2.5-.4 1-.5 1.5.2-.1.3-.1.5-.1 1.5-.3 5.7-.7 6.5 1.7.7 2.2-.2 5.7-2.8 10.8-.2.4-.4.8-.7 1.2-.3-2-.4-4.5.1-7.6.5-3.2-1.1-4.6-2.2-4.9-1.1-.4-3.7-.9-6.3 2.2-2 2.4-1.4 6.5-1.2 8.7-.3.5-.6.9-1 1.3-.2.3-.4.5-.6.7-.1-2.9-.1-7.7 0-10.6 0-2.7-.3-5.1-1-6.5-1.6-3.1-4.6-5.1-8.1-5.3-3.2-.2-6.9 1.1-9.9 5.1-5.7 7.6-5.8 19.7-4.9 25.2-1.1 1.2-4.2 3.9-5.9 3.9-.2 0-.4 0-.5-.2-1.5-1.2-.3-10.2 1.9-17.4.3-1 .4-1.6.4-1.9 0-.4-.2-.6-.5-.7-.4-.2-.9.2-1.1.3-.1.1-.2.2-.3.3-1.4 1.7-3.3 4.1-4.9 6.2-2.4-2.6-2.3-7.2-2.3-7.5 0-3 .4-8.2 3.5-12.6 2.4-3.5 6.3-6 10.6-6.8l.6-.1c-.2.5-.3 1.1-.3 1.8 0 2.1.5 5 3.9 5.1 2.5 0 4-.8 4.6-2.4.8-2.3-.4-5.2-3-6.5 1.4-1.5 3.2-2.3 5.2-2.4 3-.2 5.9 1.1 7.2 3.3.6 1 1 2 1.4 3.4-.3.1-.6.1-.9.2-4 .7-8.9 4-9.3 8.6-.1 1.3.2 2.9 1.6 3.4.6.2 1.2.2 1.8-.1 2-.8 3.8-3.2 5-6.2.4-1 .8-2.2 1.1-3.4.7-.1 1.4-.2 2.2-.3 1.7-.2 3-.3 4.1-.2l.1.5c.1 1 .2 2 .4 3.2-.5.3-1 .6-1.5 1-2.9 2.5-4.1 6.2-2.4 7.5.8.6 2.2.3 3.5-.6.1-.1.3-.2.4-.3 0 .5-.1 1-.1 1.5-.4 4.3.4 7.6 2.1 8.3.2.1.5.1.8.1 1.1 0 2.5-.8 3.4-2.3 1.1-1.9 2-5 1.9-9.2 2-.5 4.7-.6 7.5-.3 3.9.5 5.3 2.3 4.6 3.1-.6.6-1.1.9-1.4.9 0 0-.2 0-.4-.2-.4-.4-.8-.4-1-.4-.4.1-.8.4-.8.8 0 .4.2.9.5 1.3.6.7 1.6 1.1 2.7 1.1 2.9 0 5.2-2.5 4.6-5.4-.6-3.1-5.1-4.9-10.4-4.3z" />
      </svg>
    ),
    "Docker": (
      <svg viewBox="0 0 80 80" className="h-10 w-10">
        <path fill="#2496ED" d="M75.4 32.9c-1.9-1.3-6.2-1.8-9.6-1.1-.4-3-2.2-5.7-5.4-8l-1.8-1.2-1.2 1.8c-1.5 2.3-2.3 5.5-2 8.5.1 1.1.5 3.1 1.8 4.9-.6.4-1.4.7-2.1 1-2.1.8-4.9 1.2-7.6 1.2H4.7l-.2 1.3c-.5 3 0 12.3 5.7 19.5 4.3 5.4 10.7 8.2 19.2 8.2 18.3 0 31.8-8.4 38.2-23.7 2.5 0 7.9 0 10.6-5.3.1-.1.6-1.3.9-1.7l.2-.4-1.9-1.3v.3zM25.5 38.5h7.1v6.6h-7.1v-6.6zm-9.2 0h7.1v6.6h-7.1v-6.6zm18.3 0h7.1v6.6h-7.1v-6.6zm9.2 0h7.1v6.6h-7.1v-6.6zM25.5 29.4h7.1v6.6h-7.1v-6.6zm9.1 0h7.1v6.6h-7.1v-6.6zm9.2 0h7.1v6.6h-7.1v-6.6zm0-9.1h7.1v6.6h-7.1v-6.6zm9.2 9.1h7.1v6.6h-7.1v-6.6z" />
      </svg>
    ),
  };

  return icons[name] || (
    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
      <span className="text-white text-sm font-bold">{name.charAt(0)}</span>
    </div>
  );
};

// Technology data with categories
const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: ".NET", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "AWS", category: "Cloud" },
  { name: "Microsoft Azure", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "Flutter", category: "Mobile" },
  { name: "OpenAI", category: "AI" },
];

const industries = [
  { name: "Health-Tech", icon: "🏥" },
  { name: "FinTech", icon: "💳" },
  { name: "E-Commerce", icon: "🛒" },
  { name: "SaaS", icon: "☁️" },
  { name: "EdTech", icon: "📚" },
  { name: "Logistics", icon: "🚚" },
];

export default function ClientLogos() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white py-20 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-50/50 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-50/50 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            Technology Stack
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Built with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              industry-leading
            </span>{" "}
            technologies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            We leverage the best tools and platforms to deliver scalable, maintainable solutions
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 lg:gap-6 mb-16"
        >
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group relative"
            >
              <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-lg hover:ring-blue-100">
                <div className="relative">
                  <TechIcon name={tech.name} />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {tech.name}
                  </p>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400 mt-1">
                    {tech.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Industries Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">
            Industries We Specialize In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-blue-100"
              >
                <span className="text-lg">{industry.icon}</span>
                <span className="text-sm font-medium text-gray-700">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-gray-200"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "150+", label: "Products Shipped", icon: "🚀" },
              { value: "90%", label: "Client Retention", icon: "🤝" },
              { value: "4.9/5", label: "Client Rating", icon: "⭐" },
              { value: "10+", label: "Years in Business", icon: "📈" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-2xl transition-transform group-hover:scale-110">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
