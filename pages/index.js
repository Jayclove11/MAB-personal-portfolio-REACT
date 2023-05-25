import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Script from 'next/script'
import Image from "next/image";
import avatar from "https://github.com/Jayclove11/MAB-personal-portfolio-REACT/blob/Jessica/public/me.png";
import web from "../public/web.jpg";
import how from "../public/how-to-build-a-web-app.jpg";
import google from "../public/google.png";
import apple from "../public/apple.jpg";
import project1 from "../public/portfolio/project-1.jpg";
import project2 from "../public/portfolio/project-2.png";
import project3 from "../public/portfolio/project-3.jpg";
import project5 from "../public/portfolio/project-5.png";
import project6 from "../public/portfolio/project-6.png";
import angular from '../public/angular.png'
import ts from '../public/ts.svg'
import javascript from '../public/javascript.png'
import phone from '../public/phone.png'
import address from '../public/address.png'
import email from '../public/email.png'
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";



export default function Home() {

  return (
    <div >
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></Script>
      <Head>
        <title>Personal Portfolio</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
      </Head>
      <main >
      <div className="wrapper">
        <main>
          <div className="min-height-300 bg-cover bg-no-repeat bg-center bg-img" >
                <div className="header-height-bar"></div>
</div>
<section className="section pt-0">
  <div className="container">
    <div className="mt-n10 text-center pb-6">
      <div className="avatar avatar-xxxl mx-auto">
        <img
          className="avatar-img rounded-circle border border-3 border-white bg-dark"
          src="https://raw.githubusercontent.com/Jayclove11/MAB-personal-portfolio-REACT/Jessica/public/me.png"
          width={170}
          height={170}
          alt="me.png"
        />
      </div>
                        <div className="pt-3">
                            <h2>Jessica Clemente-Henderson</h2>
                            <div><a href="#" className="h4 text-gradient">Packaging & Web Developer</a></div>
                            <div className="d-flex gap-2 justify-content-center mt-2">
                                <a href="https://www.instagram.com/jayclove11/" target="_blank" rel="noreferrer" className="bg-icon">
                                <AiFillInstagram className="fs-2 cursor-pointer "/> 
                                </a>
                                <a className="bg-icon" href="#" target="_blank" rel="noreferrer"> 
                                <AiFillLinkedin className="https://www.linkedin.com/in/jessica-clemente-henderson-99843117/"/>
                                </a>
                                <a href="https://github.com/buymoney1" target="_blank"  rel="noreferrer" className="bg-icon">
                                <AiFillGithub className="https://github.com/Jayclove11"/>
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
                                            <div className="d-flex p-3 border border-gray-200 rounded-3">
                                                <div className="avatar avatar-lg">
                                                    <Image className="avatar-img rounded-circle" src={web} width={60} height={60} title="" alt="Web Development"/>
                                                </div>
                                                <div className="col ps-3">
                                                    <h6 className="mb-1">Web Development</h6>
                                                    <p>High-quality development of sites at the professional level. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6  col-lg-4">
                                            <div className="d-flex p-3 border border-gray-200 rounded-3">
                                                <div className="avatar avatar-lg">
                                                    <Image className="avatar-img rounded-circle" src={how} width={90} height={90} alt="Web Development"/>
                                                </div>
                                                <div className="col ps-3">
                                                    <h6 className="mb-1">Web App</h6>
                                                    <p>High-quality development of sites at the professional level. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row gy-4 mt-1">
                                        <div>
                                            <a href="#" className="h2 text-gradient">Clients</a>
                                        </div>
                                        <div className="col-6 col-md-3 col-lg-2">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <div className="avatar avatar-lg">
                                                        <Image className="avatar-img rounded-circle" src={google} width={90} height={90} alt="google logo"/>
                                                    </div>
                                                    <div className="pt-3">
                                                        <h6 className="m-0"><a href="#" className="stretched-link text-reset">Google</a></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3 col-lg-2">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <div className="avatar avatar-lg">
                                                        <Image className="avatar-img rounded-circle" src={apple} width={90} height={90} alt="apple logo"/>
                                                    </div>
                                                    <div className="pt-3">
                                                        <h6 className="m-0"><a href="#" className="stretched-link text-reset">Apple</a></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="tab-pane fade show " id="user-items" role="tabpanel" aria-labelledby="user-items-tab">
                                <div className="row gy-4">
                                    <div className="col-md-4 col-sm-6 col-lg-3">
                                        <div className="product-card">
                                            <div className="product-card-img-box">
                                                <a href="#">
                                                    <Image className="product-card-img" src={project1} width={300} height={250} alt="portfolio prject sample"/>
                                                </a>
                                            </div>
                                            <div className="product-card-body">
                                                <div className="product-title mb-1">
                                                    <h6 className="m-0">
                                                        <a href="#" className="text-reset stretched-linka" >Modern Dashboard</a>
                                                    </h6>
                                                    <span className="small">Lorem ipsum dolor sit amet consectetur</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 col-lg-3">
                                        <div className="product-card">
                                            <div className="product-card-img-box">
                                                <a href="#">
                                                    <Image className="product-card-img" src={project2} width={300} height={250} alt="portfolio prject sample"/>
                                                </a>
                                            </div>
                                            <div className="product-card-body">
                                                <div className="product-title mb-1">
                                                    <h6 className="m-0">
                                                        <a href="#" className="text-reset stretched-linka">Responsive Web App</a>
                                                    </h6>
                                                    <span className="small">Lorem ipsum dolor sit amet consectetur</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 col-lg-3">
                                        <div className="product-card">
                                            <div className="product-card-img-box">
                                                <a href="#">
                                                    <Image className="product-card-img" src={project3} width={300} height={250} alt="portfolio prject sample"/>
                                                </a>
                                            </div>
                                            <div className="product-card-body">
                                                <div className="product-title mb-1">
                                                    <h6 className="m-0">
                                                        <a href="#" className="text-reset stretched-linka">Creative Website</a>
                                                    </h6>
                                                    <span className="small">Lorem ipsum dolor sit amet consectetur</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 col-lg-3">
                                        <div className="product-card">
                                            <div className="product-card-img-box">
                                                <a href="#">
                                                    <Image className="product-card-img" src={project5} width={300} height={250} alt="portfolio prject sample"/>
                                                </a>
                                            </div>
                                            <div className="product-card-body">
                                                <div className="product-title mb-1">
                                                    <h6 className="m-0">
                                                        <a href="#" className="text-reset stretched-linka">Responsive Bootstrap Dashboard</a>
                                                    </h6>
                                                    <span className="small">Lorem ipsum dolor sit amet consectetur</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 col-lg-3">
                                        <div className="product-card">
                                            <div className="product-card-img-box">
                                                <a href="#">
                                                    <Image className="product-card-img" src={project6} width={300} height={250} alt="portfolio prject sample"/>
                                                </a>
                                            </div>
                                            <div className="product-card-body">
                                                <div className="product-title mb-1">
                                                    <h6 className="m-0">
                                                        <a href="#" className="text-reset stretched-linka" >Task Manager</a>
                                                    </h6>
                                                    <span className="small">Lorem ipsum dolor sit amet consectetur</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="tab-pane fade" id="user-activity" role="tabpanel" aria-labelledby="user-activity-tab">

                                <div className="row gy-4 w-100">
                                    <div>
                                        <a href="#" className="h2 text-gradient">Education</a>
                                    </div>
                                    <ul className="ms-4">
                                        <li className="h5">Web application design</li>
                                        <p>Paier College</p>
                                        <p>Jan 2023 - Present</p>
                                    </ul>
                                        <ul className="ms-4">
                                        <li className="h5">Color Theory</li>
                                        <p>School of Visual Arts</p>
                                        <p>June 2004 - July 2004</p>
                                    </ul>
                                        <ul className="ms-4">
                                        <li className="h5">CAD design</li>
                                        <p>Fashion Institute of Technology</p>
                                        <p>June 2001 - July 2001</p>
                                    </ul>
                                        <ul className="ms-4">
                                        <li className="h5">A.A.S Fashion Merchandising and Marketing</li>
                                        <p>Kingsborough Community College</p>
                                        <p>June 1999 - Aug 2001</p>
                                    </ul>
                                    <div>
                                        <a href="#" className="h2 text-gradient">Experience</a>
                                    </div>
                                    <ul className="ms-4">
                                        <li className="h5">Frontend Developer</li>
                                        <p className="h6 mb-1">2018 - Present</p>
                                        <p>FrontEnd Angular Developer</p>
                                    </ul> 

                                    <div>
                                        <a href="#" className="h2 text-gradient">Skills</a>
                                        <div className="row">
                                            <div className="col-6 col-md-3 col-lg-2 mt-4">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <div className="avatar avatar-lg">
                                                            <Image className="avatar-img rounded-circle" src={angular} width={90} height={90} alt="angular logo"/>
                                                        </div>
                                                        <div className="pt-3">
                                                            <h6 className="m-0"><a href="#" className="stretched-link text-reset">Angular</a></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3 col-lg-2 mt-4">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <div className="avatar avatar-lg">
                                                            <Image className="avatar-img rounded-circle" src={javascript} width={90} height={90} alt="javascript logo"/>
                                                        </div>
                                                        <div className="pt-3">
                                                            <h6 className="m-0"><a href="#" className="stretched-link text-reset">JavaScript</a></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3 col-lg-2 mt-4">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <div className="avatar avatar-lg">
                                                            <Image className="avatar-img rounded-circle" src={ts} width={90} height={90} alt="TypeScript logo"/>
                                                        </div>
                                                        <div className="pt-3">
                                                            <h6 className="m-0"><a href="#" className="stretched-link text-reset">TypeScript</a></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                 </div>
                             </div>
                             <div className="tab-pane fade show " id="Contact" role="tabpanel" aria-labelledby="Contact-tab">
                                <div className="mt-2">
                                    <a href="#" className="h2 text-gradient">Contact</a>
                                </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-4 mt-4">
                                    <div className="d-flex p-3 border border-gray-200 rounded-3">
                                        <div className="avatar avatar-lg">
                                            <Image className="avatar-img rounded-circle" src={email} width={50} height={50} alt="contact me with email"/>
                                        </div>
                                        <div className="col ps-3">
                                            <h6 className="mb-1">Email</h6>
                                            <p>jchsweetcreations@gmail.com</p>
                                        </div>
                                    </div>
                                </div>  
                                <div className="col-md-6 col-lg-4 mt-4">
                                    <div className="d-flex p-3 border border-gray-200 rounded-3">
                                        <div className="avatar avatar-lg">
                                            <Image className="avatar-img rounded-circle" src={phone} width={50} height={50} alt="contact me with phone number"/>
                                        </div>
                                        <div className="col ps-3">
                                            <h6 className="mb-1">Phone Number</h6>
                                            <p>347-726-0101</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col-md-6 col-lg-4 mt-4">
                                    <div className="d-flex p-3 border border-gray-200 rounded-3">
                                        <div className="avatar avatar-lg">
                                            <Image className="avatar-img rounded-circle" src={address} width={50} height={50} alt="address"/>
                                        </div>
                                        <div className="col ps-3">
                                            <h6 className="mb-1">Address</h6>
                                            <p>West Haven, CT</p>
                                        </div>
                                    </div>
                                </div> 
                            </div> 
                            </div>
                        </div>
                    </div>
                </div>
          </section>
        </main>

        <footer className="footer footer-bg">
            <hr className="m-0 border-gray-100 opacity-1"/>
            <div className="container">
                <div className="row py-3 gy-3 align-items-center">
                    <div className="col-md-6">
                        <ul className="nav justify-content-center justify-content-md-start my-2 links-white small list-unstyled footer-link-01 m-0">
                            <li className="p-0 mx-3 ms-md-0 me-md-3"><a href="#" className="link-white">Privace &amp; Policy</a></li>
                            <li className="p-0 mx-3 ms-md-0 me-md-3"><a href="#" className="link-white">Faq's</a></li>
                            <li className="p-0 mx-3 ms-md-0 me-md-3"><a href="#" className="link-white">Get a Quote</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <p className="text-white-85 small m-0">© 2023 <a href="#" className="text-reset">bugRider</a></p>
                    </div>
                </div>
            </div>
        </footer>
      
    </div>

      </main>
    </div>
  );
}
