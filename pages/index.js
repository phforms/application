import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>PH Forms</title>
        <meta
          name="description"
          content="Entry in the Philippines with no stress. Enjoy your holidays."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main>
        <div className="img-container">
          <Image src={"./flag.png"} width={90} height={55} alt="PH flag" />
        </div>
        <div className="backdrop"></div>
        <div className="content">
          <h1>Apply for eTravel Philippines</h1>
          <p>All people traveling to Philippines must fill out the form to obtain the eTravel Document and enter the country. eTravel is obtained 100% online by completing a simple form.</p>
          <p>Get your permit in a matter of hours with our Priority Processing!</p>
          <div className="btn-wrapper">
            <a href="https://www.onlineform-ph.com/application">
              Apply Now
            </a>
          </div>
          <p className="disclaimer">
            Legal Disclaimer: this site is not affiliated with the Government or its sponsors.
          </p>
        </div>
      </main>
    </>
  );
}
