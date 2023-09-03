// components/AOSInitializer.js

"use client";

import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function AOSInitializer({ Component, pageProps }) {
  useEffect(() => {

    console.log('Initializing AOS...');
    // Initialize AOS when the component mounts
    Aos.init({ // Change animation duration (optional)
        duration: 1000, // Set to true for one-time animations (optional)
    });

    console.log('AOS Initialized!');
  }, []);

  return <Component {...pageProps} />;
};

export default AOSInitializer