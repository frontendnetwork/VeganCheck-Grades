import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Props {}

const Legal: React.FC<Props> = () => {
  const [impressumText, setImpressumText] = useState<string>('');

  useEffect(() => {
    fetch('https://philipbrembeck.com/impressum.txt')
      .then(response => response.text())
      .then(text => setImpressumText(text))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <Header />
      <section className="onepage">
        <h1>Legal<span className="icon-stars"></span></h1>
        <div dangerouslySetInnerHTML={{ __html: impressumText }} />
      </section>
      <Footer />
    </>
  );
};

export default Legal;