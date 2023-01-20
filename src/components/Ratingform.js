import React, { useState } from 'react';

function RatingForm() {
  const [barcode, setBarcode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isNobarcode, setIsNobarcode] = useState(false);
  const [product, setProduct] = useState({});
  const [shake, setShake] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    let bodyContent = new FormData();
    bodyContent.append("barcode", barcode);

    try {
      const response = await fetch('https://cldsi.de/test/backend.php', {
        method: 'POST',
        body: bodyContent
      });
      let result = await response.text();

      setIsLoading(false);
      if (result == "Sent") {
        setIsSubmitted(true);
      } else if (result == "Error") {
        setIsNobarcode(true);
        setShake(true);
        setTimeout(() => setShake(false), 600);
      } else if (result) {
        let resultparsed = JSON.parse(result);
        setProduct(resultparsed);
        setIsChecked(true);
      } 
      else {
        setIsLoading(false);
        setShake(true);
        setTimeout(() => setShake(false), 600);
      }
    } catch (error) {
      setIsLoading(false);
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  const handleRetry = () => {
    setIsSubmitted(false);
    setIsChecked(false);
    setIsNobarcode(false);
  };

  return (
    <>
      {!isSubmitted && !isChecked && !isNobarcode && (
        <form action="" method="post" className={`ratingform centered ${shake ? 'shake' : ""}`}>
          <input
            type="number"
            name="barcode"
            placeholder="Enter barcode"
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)}
          />
          <button name="submit" onClick={handleSubmit}>
            {isLoading ? 'Loading...' : 'Request rating'}
          </button>
        </form>
      )}
      {isSubmitted && (
        <div className="submitted">
          <div className="icon-tick"></div>
          <p>
            Your request was successful.
            <br />
            <span className="small">
              It usually takes 48 hours for a product to be rated, but it can take longer sometimes.
            </span>
            <br />
            <span className="small retry" onClick={handleRetry}>
              Click here to request another product rating
            </span>
          </p>
        </div>
      )}
      {isChecked && (
        <div className="checked">
          <div className="icon-cross"></div>
          <p>
            <span className="productname">{product.name}</span> is already rated: <span className="productrating">{product.grade}</span>
            <br />
            <span className="small retry" onClick={handleRetry}>
              Click here to retry
            </span>
          </p>
        </div>
      )}
      {isNobarcode && (
        <div className="checked">
          <div className="icon-cross"></div>
          <p>
            This is not a barcode.
            <br />
            <span className="small">
              An EAN-barcode is typically a 13-digit or 8-digit number and does not cotain any text.
            </span>
            <br />
            <span className="small retry" onClick={handleRetry}>
              Click here to retry
            </span>
          </p>
        </div>
      )}
    </>
  );
}

export default RatingForm;
