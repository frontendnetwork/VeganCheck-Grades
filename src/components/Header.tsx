import Link from "next/link";
import Head from 'next/head'

export default function Footer(): JSX.Element {
    return(
    <>
    <Head>
        <title>Veganify Grades</title>
        <meta name="description" content="Veganify Grades gets you actual useful product ratings for vegan products." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#F6E6D5" />
      </Head>
    <div className="header">
        <Link href="/">
            <img src="assets/img/logo.svg" alt="logo" />
        </Link>
    </div>
    </>
    );
}