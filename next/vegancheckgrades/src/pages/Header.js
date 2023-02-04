import Link from "next/link";
import Head from 'next/head'

export default function Header() {
    return(
    <>
    <Head>
        <title>VeganCheck Grades</title>
        <meta name="description" content="VeganCheck Grades gets you actual useful product ratings for vegan products." />
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