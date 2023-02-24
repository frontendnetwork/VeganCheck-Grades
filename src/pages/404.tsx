import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Custom404() {
    return (
    <> 
    <Header />
    <section className="onepage">
        <h1>404 &middot; Not found <span className="icon-stars"></span></h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <style jsx>{`
        p {
          text-align: center;
        }
      `}</style>
    </section>
    <Footer />
     </>)
}