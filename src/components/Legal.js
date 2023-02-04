import React, { useEffect, useState } from 'react';

export default function Legal() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const [impressumText, setImpressumText] = useState('');

      useEffect(() => {
        fetch('https://philipbrembeck.com/impressum.txt')
          .then(response => response.text())
          .then(text => setImpressumText(text))
          .catch(error => console.error(error));
      }, []);
    return(<>
    <section className="onepage">
        <h1>Legal<span className="icon-stars"></span></h1>
        <div dangerouslySetInnerHTML={{__html: impressumText}} />
    </section>
    </>
    );
}