import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Pdf from './files/Vidit_Makwana_Resume.pdf'
import logo from './images/logo.png';
import headshot from './images/pic.jpeg';
import './App.css';
import particlesOptions from "./particles.json";

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className='container'>
            <Particles options={particlesOptions} init={particlesInit} />
            <div id="header" className="container p-4 pb-10">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div id="body" style={{ display: "table" }}>
                <div className="container grid grid-cols-5 md:grid-cols-7 gap-10 place-items-center">
                    <div></div>
                    <div></div>
                    <div className='text-white font-mono'>
                        <img src={headshot} className="max-w-xs" alt="headshot" />
                        <div className='grid grid-cols-1 place-items-center'>
                            <h1 className='pt-4 text-4xl'>Vidit Makwana</h1>
                            <h2 className='text-md'>University of Maryland, College Park</h2>
                            <h2 className='text-xs'>Computer Science • Data Science • Business Analytics</h2>
                            <div className='container flex flex-row pt-4' style={{ justifyContent: "space-around" }}>

                                {/* Icons */}
                                <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <a href="https://www.linkedin.com/in/viditmakwana/" target="_blank" rel="noreferrer noopener">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect x="2" y="9" width="4" height="12" />
                                        <circle cx="4" cy="4" r="2" />
                                    </a>
                                </svg>

                                <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <a href="https://www.facebook.com/profile.php?id=100010709585961" target="_blank" rel="noreferrer noopener">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </a>
                                </svg>

                                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <a href={Pdf} target="_blank" rel="noreferrer noopener">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </a>
                                </svg>

                                <svg class="h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <a href="mailto:viditmakwana@gmail.com">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="3 9 12 15 21 9 12 3 3 9" />
                                        <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                                        <line x1="3" y1="19" x2="9" y2="13" />  <line x1="15" y1="13" x2="21" y2="19" />
                                    </a>
                                </svg>

                                <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <a href="https://www.github.com/viditmakwana" target="_blank" rel="noreferrer noopener">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 
                                        6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 
                                        13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 
                                        5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                    </a>
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div className='container text-white text-md md:text-lg font-mono col-span-5 md:col-span-3 place-items-start'>
                        <div className='container p-6'>
                            <p className='overflow-hidden text-justify'>
                                My name is Vidit Makwana and I am an incoming senior at the University of Maryland. I am a recipient of
                                the Presidential Scholarship and I am a part of the <a span class="responsive"
                                    href="https://cmns.umd.edu/news-events/features/4529" target="_blank" rel="noreferrer noopener">
                                    Dean's List</a>. I was recently inducted into the <a span class="responsive" href="https://mortarboard.org/about/" target="_blank" rel="noreferrer noopener">Mortar Board Honor Society</a>.
                                    Also, I am the Director of Professional Development of <a span class="responsive"
                                        href="https://ktpumd.com/" target="_blank" rel="noreferrer noopener"> Kappa Theta Pi </a>, the world's first co-educational professional technology fraternity. 
                                I am pursuing software engineering and data science new grad positions.
                                In the past, I had been a mentor and volunteer for <a span class="responsive" href="https://gotechnica.org/" target="_blank" rel="noreferrer noopener">Technica</a>, the world's largest
                                hackathon for underrepresented genders. This summer, I am working as a Software Engineering Intern at &nbsp;
                                <a span class="responsive" href="https://www.wework.com/" target="_blank" rel="noreferrer noopener">WeWork</a> in New York City!
                                Next semester, I will be studying Human-Computer Interactions and Compilers. I am also mentoring students in
                                Relational Databases in PostgreSQL as a Teaching Assistant. I love to play and watch
                                basketball, football, and tennis and talk about any potential business opportunities in my free time. I'm always willing to watch an
                                episode of <a span class="responsive" href="https://www.peacocktv.com/stream-tv/the-office" target="_blank" rel="noreferrer noopener">The Office</a> and currently, I am 
                                catching up with <a span class="responsive" href="https://www.imdb.com/title/tt1190634/" target="_blank" rel="noreferrer noopener">The Boys</a>! I am always open to learning
                                and contributing to projects, so let me know if you have any ideas!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
