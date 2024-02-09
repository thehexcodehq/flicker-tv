"use client"

// Importing necessary hooks and components
import Image from "@/app/components/Image";
import "@/app/globals.css";
import quotes from '@/quotes'; // Adjust the path as needed
import React, { useState, useEffect } from 'react';
import FilmGrain from "@/app/components/filmGrain";

/**
 * Home Component
 *
 * This is a React functional component that renders the home page of the application.
 * It uses the useState and useEffect hooks from React to manage state and side effects.
 *
 * The component initially sets the selectedQuote state to null. 
 * When the component mounts, useEffect is triggered and a random quote is selected from the quotes array and set as the selectedQuote.
 *
 * If selectedQuote is null (which means no quote has been selected yet), the component returns null, effectively rendering nothing.
 * Once a quote is selected, the component renders a main element containing the selected quote and other related information.
 *
 * The main element contains:
 * - A div with class "containerStyle" which contains:
 *   - A div with class "blur-in banner" which contains:
 *     - A div with class "corners" which contains four Image components for decorative purposes.
 *     - An h1 element with class "title fadeIn" displaying the title "Flicker".
 *     - Two p elements with class "subtitleStyle" displaying the selected quote and its author.
 *     - A div with class "footerStyle" displaying the copyright information and the submitter of the quote.
 * - A FilmGrain component which adds a film grain effect to the page.
 *
 * @module Home
 */



export default function Home() {

  // State for storing the selected quote
  const [selectedQuote, setSelectedQuote] = useState(null);

  // Effect hook to select a random quote on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length); // Get a random index
    setSelectedQuote(quotes[randomIndex]); // Set the selected quote to the quote at the random index
  }, []);

  // If no quote is selected, return null (or a loading state)
  if (!selectedQuote) {
    return null; // Or some loading state
  }

  // Render the main component
  return (
    <main>
      <div className="containerStyle">
        
        <div className="blur-in banner">
          
          <div className="corners">
            {/* Display decorative corners */}
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

          {/* Display the title */}
          <h1 className="title fadeIn">Flicker</h1>

          {/* Display the selected quote */}
          <p className="subtitleStyle">
          “{selectedQuote.quote}”.
          </p>

          {/* Display the author of the quote */}
          <p className="subtitleStyle">
          — {selectedQuote.author}
          </p>

          <div className="footerStyle">
            <p>
              {/* Display the footer */}
              ©{' '}
              <a className="hexhqLink" href="https://github.com/HexCodeHQ">HexCodeHQ  </a> | Quote Submitted By <a className="submitterLink" href= {selectedQuote.github}>@{selectedQuote.submitter}</a>
            </p>
          </div>
        </div>
      </div>
      {/* Add a film grain effect */}
      <FilmGrain />
    </main>
  );
}