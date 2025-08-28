
export const shortenUrl = (originalUrl) => {
  if (!originalUrl || typeof originalUrl !== 'string') return '';

  const randomSuffix = Math.random().toString(36).substring(2, 8);
  return `https://clip.ly/${randomSuffix}`;
  
};

// src/Component/shortenUrl.js

// import { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// import React from 'react'

// export default function shortenUrl() {
//     const [input, setInput] = useState('');
//   const [customCode, setCustomCode] = useState('');
//   const [validity, setValidity] = useState('');
//   const [shortUrl, setShortUrl] = useState('');
//   const [showResult, setShowResult] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();
//   useEffect(() => {
//   const path = location.pathname.substring(1);

//   if (!path || path === '') return;

//   try {
//     const storedRaw = localStorage.getItem('shortLinks');
//     if (!storedRaw) {
//       alert('No short links found.');
//       return;
//     }

//     const stored = JSON.parse(storedRaw);
//     const match = stored.find((item) => item.shortcode === path);

//     if (match) {
//       if (Date.now() < match.expiry) {
//         // ✅ Safe redirection
//         window.location.href = match.longUrl;
//       } else {
//         alert('This short link has expired.');
//         navigate('/');
//       }
//     } else {
//       alert('No matching short URL found.');
//       navigate('/');
//     }
//   } catch (err) {
//     alert('Something went wrong while redirecting.');
//     navigate('/');
//   }
// }, [location, navigate]);

//   const generateRandomCode = () => Math.random().toString(36).substring(2, 8);

//   const isCodeUnique = (code) => {
//     const existing = JSON.parse(localStorage.getItem('shortLinks')) || [];
//     return !existing.some((item) => item.shortcode === code);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     let code = customCode.trim() || generateRandomCode();

//     while (!isCodeUnique(code)) {
//       if (customCode.trim()) {
//         alert('Custom shortcode already exists. Try another.');
//         return;
//       }
//       code = generateRandomCode();
//     }

//     const expiryMs = (parseInt(validity) || 30) * 60 * 1000;
//     const expiryTime = Date.now() + expiryMs;

//     const newShortUrl = `${window.location.origin}/${code}`;
//     const newEntry = {
//       shortcode: code,
//       longUrl: input,
//       createdAt: Date.now(),
//       expiry: expiryTime,
//       clicks: 0,
//     };

//     const stored = JSON.parse(localStorage.getItem('shortLinks')) || [];
//     stored.push(newEntry);
//     localStorage.setItem('shortLinks', JSON.stringify(stored));

//     setShortUrl(newShortUrl);
//     setShowResult(true);
//   };

//   const handleCopy = () => {
//     navigator.clipboard.writeText(shortUrl);
//     alert('Short URL copied!');
//   };
//   return (
//     <div>shortenUrl</div>
//   )
// }

