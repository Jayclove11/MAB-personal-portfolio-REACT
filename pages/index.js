import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import avatar from "../public/avatar.webp";
import web from "../public/web.jpg";
import how from "../public/how-to-build-a-web-app.jpg";
import google from "../public/google.png";
import apple from "../public/apple.jpg";
import project1 from "../public/portfolio/project-1.jpg";
import project2 from "../public/portfolio/project-2.png";
import project3 from "../public/portfolio/project-3.jpg";
import project5 from "../public/portfolio/project-5.png";
import project6 from "../public/portfolio/project-6.png";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Personal Portfolio</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />
      </Head>
      <main>
        <div className="wrapper">
          <main>
            <div className="min-height-300 bg-cover bg-no-repeat bg-center bg-img">
              <div className="header-height-bar"></div>
            </div>
            {/* Rest of the code */}
          </main>
        </div>
      </main>
    </div>
  );
}
