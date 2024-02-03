"use client"

import Image from "@/app/components/Image";
import "@/app/globals.css";
import quotes from '@/quotes'; // Adjust the path as needed
import React, { useState, useEffect } from 'react';
import FilmGrain from "@/app/components/filmGrain";

export default function Home() {

  const [selectedQuote, setSelectedQuote] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setSelectedQuote(quotes[randomIndex]);
  }, []);

  if (!selectedQuote) {
    return null; // Or some loading state
  }
  
  return (
    <main>
      <div className="containerStyle">
        
        <div className="blur-in banner">
          
          <div className="corners">
            <Image
              src="decorative-corner.png"
              className="fadeIn"
            />
            <Image
              src="decorative-corner.png"
              className="fadeIn"
            />
            <Image
              src="decorative-corner.png"
              className="fadeIn"
            />
            <Image
              src="decorative-corner.png"
              className="fadeIn"
            />
          </div>

          <h1 className="title fadeIn">Flicker</h1>

          <p className="subtitleStyle">
          “{selectedQuote.quote}”.
          </p>

          <p className="subtitleStyle">
          — {selectedQuote.author}
          </p>

          <div className="footerStyle">
            <p>
              ©{' '}
              <a>HexCodeHQ | Quote Submitted By {selectedQuote.submitter}</a>
            </p>
          </div>
        </div>
      </div>
      <FilmGrain />
    </main>
  );
}
