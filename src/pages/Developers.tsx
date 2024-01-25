import React from "react";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Grade {
  grade: string;
}

export default function Developers(): JSX.Element {
  return (
    <>
      <Header />
      <section className="onepage">
        <h1>
          For Developers<span className="icon-stars"></span>
        </h1>
        <p>
          <b>Use the Veganify API</b>
        </p>
        <p>
          Dear Developers,
          <br />
          if you want to integrate Veganify Grades into your app, you can use
          our API. It's free and easy to use.
        </p>
        <p>
          The propper end-point to use would be the "product"-endpoint. It is
          completely documented at Frontendnetwork.
        </p>
        <a href="https://jokenetwork.de/veganify-api" className="btn">
          Read the documentation
        </a>

        <p>
          <b>Quick overview</b>
        </p>
        <p>
          You can easily send a <span className="code">POST</span>-request to
          our api-endpoint{" "}
          <span className="code">
            https://api.veganify.app/v0/product/productcode
          </span>
          .
        </p>
        <p>
          The result should look something like this, where{" "}
          <span className="code">"grade":"B"</span> is relevant for you. That's
          the Veganify Grade:
        </p>
        <div>
          <Script src="https://gist.github.com/philipbrembeck/203579400565403b8b4285965485055c.js" />
        </div>

        <p>
          We would love to hear from you and what you've made with Veganify
          Grades! Feel free to ask us every question or show us your work
          through <a href="mailto:info@philip.media">info@philip.media</a>{" "}
          <span className="icon-heart"></span>
        </p>
      </section>
      <Footer />
    </>
  );
}
