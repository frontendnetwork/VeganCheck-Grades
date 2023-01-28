import React, { useEffect } from 'react';
import Gist from "react-gist";

export default function Developers() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(<>
    <section className="onepage">
        <h1>For Developers<span className="icon-stars"></span></h1>
         <p><b>Use the VeganCheck API</b></p>
         <p>Dear Developers,<br />
            if you want to integrate VeganCheck Grades into your app, you can use our API. It's free and easy to use.</p>
            <p>The propper end-point to use would be the "product"-endpoint. It is completely documented at JokeNetwork.</p>
            <a href="https://jokenetwork.de/vegancheck-api" className="btn">Read the documentation</a>
        
        <p><b>Quick overview</b></p>
        <p>You can easily send a <span className='code'>POST</span>-request to our api-endpoint <span className='code'>https://api.vegancheck.me/v0/product/productcode</span>.</p>
        <p>The result should look something like this, where <span className='code'>"grade":"B"</span> is relevant for you. That's the VeganCheck Grade:</p>
        <div>
            <Gist id="203579400565403b8b4285965485055c" />
        </div>

        <p>We would love to hear from you and what you've made with VeganCheck Grades! Feel free to ask us every question or show us your work through <a href="info@philip.media">info@philip.media</a> <span className="icon-heart"></span></p>
    </section>
    </>
    );
}