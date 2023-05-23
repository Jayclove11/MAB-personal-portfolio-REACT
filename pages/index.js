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
            <section className="section pt-0">
                <div className="container">
                    <div className="mt-n10 text-center pb-6">
                        <div className="avatar avatar-xxxl mx-auto">
                            <Image className="avatar-img rounded-circle border border-3 border-white bg-dark" src={avatar} width={170} height={170} alt="avatar"/>
                        </div>
                        <div className="pt-3">
                            <h2>Jessica Clemente-Henderson</h2>
                            <div><a href="#" className="h4 text-gradient">Packaging & Web Developer</a></div>
                            <div className="d-flex gap-2 justify-content-center mt-2">
                                <a href="https://www.instagram.com/jayclove11/" target="_blank" rel="noreferrer" className="bg-icon">
                                <AiFillInstagram className="fs-2 cursor-pointer "/> 
                                </a>
                                <a className="bg-icon" href="https://www.linkedin.com/in/jessica-clemente-henderson-99843117/" target="_blank" rel="noreferrer"> 
                                <AiFillLinkedin className="fs-2 cursor-pointer"/>
                                </a>
                                <a href="https://github.com/Jayclove11" target="_blank"  rel="noreferrer" className="bg-icon">
                                <AiFillGithub className="fs-2 cursor-pointer"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="tab-style-01">
                        <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="user-about-tab" data-bs-toggle="tab" data-bs-target="#user-about" type="button" role="tab" aria-controls="user-about" aria-selected="true">About</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="user-activity-tab" data-bs-toggle="tab" data-bs-target="#user-activity" type="button" role="tab" aria-controls="user-activity" aria-selected="false">Resume</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link " id="user-items-tab" data-bs-toggle="tab" data-bs-target="#user-items" type="button" role="tab" aria-controls="user-items" aria-selected="false">Portfolio</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="Contact-tab" data-bs-toggle="tab" data-bs-target="#Contact" type="button" role="tab" aria-controls="Follow" aria-selected="false">Contact</button>
                            </li>
                        </ul>
                        <div className="tab-content pt-4" id="myTabContent">

                            <div className="tab-pane fade show active" id="user-about" role="tabpanel" aria-labelledby="user-about-tab">
                                <div className="row gy-4">
                                <div>
                                    <a href="#" className="h2 text-gradient">About Me</a>
                                </div>
                                    <p className="text-justify">Hello and welcome to my page! I am a passionate and seasoned graphic designer with over 22 years of experience under my belt. My main expertise lies in crafting visually appealing and effective packaging designs that not only communicate your brand messaging but also enhance the overall appeal of your products.</p>
                                    <p className="text-justify mt-0">Throughout my career, I have had the pleasure of working with numerous clients across various industries, and I take immense pride in my ability to tailor my designs to suit the individual needs of each project. My goal is to create striking and impactful packaging designs that not only stand out on the shelves but also resonate with your target audience.</p>
                                    <p className="text-justify mt-0">To stay ahead of the curve and ensure that I am always offering the most cutting-edge solutions to my clients, I am currently expanding my skillset to include website and social media development. As the world becomes increasingly digital, I believe that having a strong online presence is vital for businesses to succeed, and I am excited to help you develop a website or social media platform that is not only visually stunning but also perfectly aligned with your brand identity.</p>
                                    <p className="text-justify mt-0">If you're looking for a dedicated, creative, and experienced packaging graphic designer to help elevate your brand and products to new heights, then look no further. I would be thrilled to assist you in bringing your vision to life and creating packaging designs that will leave a lasting impression on your customers. Please feel free to reach out to discuss your project and discover how we can collaborate to achieve your goals.</p>
                                    <p className="text-justify mt-0">Thank you for taking the time to learn more about me, and I look forward to the possibility of working together!</p>
                                </div>
                                    <div className="row gy-4 mt-1">
                                        <div><a href="#" className="h2 text-gradient">What I'm Doing</a></div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="d-flex p-3 border border-gray-200 rounded-3
