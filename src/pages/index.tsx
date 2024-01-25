import Image from 'next/image'
import RatingForm from '../components/Ratingform'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <img src="assets/img/vcg.svg" className="rotate_logo" alt="Veganify Grades" />
    <section className="flexbox">
        <div className="flexbox-left">
        </div>
        <div className="flexbox-right">
            <h1>Get actual useful product ratings. No bullshit.<span className="icon-stars"></span></h1>
            <h2>Are you confused by all the vegan/eco-friendly/organic labels? </h2>
            <p>You will be no more with the easy to understand Veganify Grades.<br />Veganify Grades is a rating system for vegan products, that assigns one of six grades to a product.</p>
            <div className="centered"><a href="#ourgrades" className="btn">Learn more</a></div>
        </div>
    </section>
    <section id="ourgrades">
        <h1>Our grades</h1>
        <p>The products with a Veganify Grade are evaluated by a small team of volunteers and categorized according to their characteristics.</p>
        <div className="hero">
            <div className="box">
                <h2>Grade A+</h2>
                <p>Only the best of the best products get a Grade A+! Not only has the product to be vegan and cruelty-free, but it also can not cotain palm-oil, has to be produced carbon-neutral and with renewable energies, has to have a fair price and much more. A product rated A+ is recommended to buy!</p>
            </div>
            <div className="box">
                <h2>Grade A</h2>
                <p>Grade A is the second highest grade and everything from Grade A+ applies, except for the fair price, the usage of renewable energies and an indipendent laboratory analysis if it is a supplement or suppelemental product (e.g. protein shakes). A product rated A is recommended to buy! </p>
            </div>
            <div className="box">
                <h2>Grade B</h2>
                <p>Grade B still has high standards, such as not made with palm-oil, no animal-cruelty, the manufacturer is not associated with any other harmful actions, good nutritional value if applicable (foods), proven health-claims if applicable (food and beauty) and proven effect if applicable (beauty). A product rated B is recommended to buy!</p>
            </div>
        </div>
        <div className="hero">
            <div className="box">
                <h2>Grade C</h2>
                <p>Grade C is still an average score. The product has to be made with at <strong>least</strong> sustainable palm-oil, has to have a good nutritional value if applicable (foods), has to have proven health-claims if applicable (food and beauty) and has to have a proven effect if applicable (beauty). Depending on your standards, you should consider if you want to buy a product rated C. </p>
            </div>
            <div className="box">
                <h2>Grade D</h2>
                <p>Grade D is the worst grade a product can get, besides "Not eligible". Products rated with D have to have proven health-claims if applicable (food and beauty) and a proven effect if applicable (beauty). You should generelly consider a better rated option to buy.</p>
            </div>
            <div className="box">
                <h2>Not eligible</h2>
                <p>All other products are not eligible for evaluation and are not recommended for purchase.</p>
            </div>
        </div>
    </section>
    <section className="grade_sample">
        <img src="assets/img/productsample.svg" alt="" loading="lazy" />
        <div className="image-container">
            <Image src="assets/img/grade/Grade A+.svg" alt="Grade A+" loading="lazy" width={160} height={160} />
            <Image src="assets/img/grade/Grade B.svg" alt="Grade B" loading="lazy" width={160} height={160} />
            <Image src="assets/img/grade/Grade C.svg" alt="Grade C" loading="lazy" width={160} height={160} />
            <Image src="assets/img/grade/Grade A.svg" alt="Grade A" loading="lazy" width={160} height={160} />
            <Image src="assets/img/grade/Grade D.svg" alt="Grade D" loading="lazy" width={160} height={160} />
            <Image src="assets/img/grade/Grade NE.svg" alt="Grade Not eligible" loading="lazy" width={160} height={160} />
        </div>
    </section>
    <section className="app">
        <div className="app-flex">
            <div className="app-flex-left">
                <h1><span className="icon-stars"></span>Everything at a fingertip</h1>
                <p>Veganify Grades are now available within Veganify!</p>
                <p>Gone are the days of spending hours in the grocery store reading labels and trying to decipher ingredient lists. With Veganify, finding vegan-friendly products has never been easier: Simply scan the barcode of any product with your smartphone, and our user-friendly app will let you know if it's vegan or not.</p>
                <p><a href="https://veganify.app" className="btn">Use Veganify</a> <a href="https://shareshortcuts.com/download/2224-vegancheck.html" className="btn">Get the iOS Shortcut</a></p>
            </div>
            <div className="app-flex-right">
                <img src="assets/img/phone.svg" alt="Smartphone with Veganify" />
            </div>
        </div>
    </section>
    <section className="rating">
        <div className="rating-left">
            <h1><span className="icon-heart"></span>Request a product rating</h1>
            <p>Individual costumers as well as producers are abled to request a Veganify Grade for a certain product. Producers can also send additional information (such as a certificate of using renweable energies in production) to us via <a href="mailto:info@philip.media">e-mail</a>, to increase their (already existing) product rating.</p>
            <RatingForm />
        </div>
        <div className="rating-right">
        </div>
    </section>
    <section className="section-timeline">
        <div className="section-timeline-time">
            <p><span className="date">March 2022</span><br />The idea of Veganify Grades gets proposed on GitHub <span className="icon-star"></span></p>
            <p><span className="date">March 2022</span><br />First concept of the grades created, added to the roadmap for Veganify v2.0</p>
            <p><span className="date">April 2022</span><br />First volunteers rate products for Veganify Grades &amp; first 100 ratings awarded <span className="icon-heart"></span></p>
            <p><span className="date">February 2023</span><br /><span className="icon-exclaim"></span>Public launch of Veganify Grades with Veganify v2.2</p>
        </div>
    </section>
      <Footer />
    </>
  )
}
