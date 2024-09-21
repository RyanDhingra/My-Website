import React, { useEffect } from 'react';
import './FileExplorer.css';
import fileIcon from '../../assets/images/file.png';
import folderIcon from '../../assets/images/folder.png';
import { useState } from 'react';
import Background from "../BackGround/Background";
import Item from './Item';
import arrow from '../../assets/images/arrow.png';
import door from '../../assets/images/door.png';
import { useNavigate } from 'react-router-dom';

// File components
import Resume from './Files/Resume.jsx';
import Transcript from './Files/Transcript.jsx';
import Skills from './Files/Skills.jsx';
import About from './Files/About.jsx';
import Accolades from './Files/Accolades.jsx';
import ProjectFile from './Files/ProjectFile.jsx';

// Project Images
import ar1 from '../../assets/images/projects/ar_1.png'
import ar2 from '../../assets/images/projects/ar_2.png'
import ar3 from '../../assets/images/projects/ar_3.png'
import ar4 from '../../assets/images/projects/ar_4.png'



function FileExplorer() {
    const [currFolder, setCurrFolder] = useState("root");
    const [currFile, setCurrFile] = useState(null);
    const navigate = useNavigate();

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const [changing, setChanging] = useState(false);
    const [fileChanging, setFileChanging] = useState(false);

    const changeFolder = async (folder) => {
        setChanging(true);
        await sleep(300);
        setCurrFolder(folder);
        setChanging(false);
        setCurrFile(null);
    }

    const changeFile = async (file) => {
        if (file === currFile) return;
        setFileChanging(true);
        await sleep(300);
        setCurrFile(file);
        setFileChanging(false);
    }

    const goBack = async () => {
        setChanging(true);
        await sleep(300);
        setCurrFolder(items[currFolder].parent);
        setChanging(false);
        setCurrFile(null);
    }

    const showItems = () => {
        let newItems = [];

        console.log(items[currFolder]);

        for (let folder of items[currFolder].folders) {
            newItems.push(<Item key={folder} icon={folderIcon} name={folder} setItem={changeFolder} />);
        }

        for (let file of items[currFolder].files) {
            newItems.push(<Item key={file} icon={fileIcon} name={file} setItem={files[currFolder + "/" + file].onclick} />);
        }

        return newItems;
    }

    const items = {
        "root": {
            folders: ["Biography", "Contact", "Resume", "Work Experience", "Personal Projects", "Hobbies & Interests"],
            files: [],
            parent: null
        },
        "Biography": {
            folders: ["Education", "Photo Gallery"], //Certifications & Licenses
            files: ["about.txt"],
            parent: "root"
        },
        "Education": {
            folders: [],
            files: ["transcript.txt", "skills.txt", "accolades.txt"],
            parent: 'Biography'
        },
        "Photo Gallery": {
            folders: [],
            files: ["Me"],
            parent: 'Biography'
        },
        "Certifications & Licenses": {
            folders: [],
            files: [],
            parent: 'Biography'
        },
        "Work Experience": {
            folders: ["Sun Life Financial", "Transpots"],
            files: [],
            parent: "root"
        },
        "Sun Life Financial": {
            folders: [],
            files: ["summer_2022_BSA.txt", "summer_2023_SDE.txt", "summer_2024_SDE.txt"],
            parent: "Work Experience"
        },
        "Transpots": {
            folders: [],
            files: ["full_stack_SDE.txt"],
            parent: "Work Experience"
        },
        "Personal Projects": {
            folders: [],
            files: ["ar_rackets.txt", "club_companion_software_app.txt", "hymus_sports.txt", "underground_oasis.txt", "code_clash.txt", "tmu_treasures.txt", "tmu_battlebots.txt", "secure_cash_atm_system.txt", "e_mersed_e_commerce.txt", "tenno_trader_app.txt", "my_outlet.txt", "gamer_fit_discord_bot.txt"],
            parent: "root"
        },
        "Contact": {
            folders: [],
            files: ["linkedIn.sh", "github.sh"],
            parent: "root"
        },
        "Resume": {
            folders: [],
            files: ["resume.pdf"],
            parent: "root"
        },
        "Hobbies & Interests": {
            folders: [],
            files: [],
            parent: "root"
        }
    }

    const files = {
        "Resume/resume.pdf": {
            component: <Resume />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Education/transcript.txt": {
            component: <Transcript />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Education/skills.txt": {
            component: <Skills />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Biography/about.txt": {
            component: <About />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Education/accolades.txt": {
            component: <Accolades />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Sun Life/summer_2022_bsa.txt": {
            component: null,
            icon: fileIcon,
            onclick: null
        },
        "Sun Life/summer_2023_sde.txt": {
            component: null,
            icon: fileIcon,
            onclick: null
        },
        "Sun Life/summer_2024_sde.txt": {
            component: null,
            icon: fileIcon,
            onclick: null
        },
        "Transpots/full_stack_sde.txt": {
            component: null,
            icon: fileIcon,
            onclick: null
        },
        "Contact/linkedIn.sh": {
            component: null,
            icon: fileIcon,
            onclick: () => window.open("https://www.linkedin.com/in/rd-dev/", "_blank")
        },
        "Contact/github.sh": {
            component: null,
            icon: fileIcon,
            onclick: () => window.open("https://github.com/RyanDhingra", "_blank")
        },
        "Personal Projects/ar_rackets.txt": { //{ name, content, skills, repoLink, link, imgs }
            component: <ProjectFile
                name="AR Rackets Web App"
                content="AR Rackets is a React-based full stack web application, powered by a Flask Python backend and CockroachDB. The site specializes in badminton racket restringing and servicing, offering customers a seamless way to explore services and make bookings. In addition to servicing, AR Rackets provides a diverse selection of both new and used rackets available for purchase. The website's modern, responsive design ensures an optimal user experience across all devices, while the integration of cutting-edge technologies ensures reliability and performance. This project demonstrates my ability to create full-stack applications that cater to both business and customer needs."
                stack="React.js, Flask, Python, CockroachDB"
                link="https://ar-rackets.vercel.app/"
                imgs={[
                    { src: ar1, desc: "Landing Page" },
                    { src: ar2, desc: "Shop Page" },
                    { src: ar3, desc: "Shop Mobile View" },
                    { src: ar4, desc: "User Account Page" }
                ]}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/club_companion_software_app.txt": {
            component: <ProjectFile
                name="Club Companion Desktop App"
                content="Club Companion is a sleek desktop application powered by Electron JS, designed specifically for sports club owners to simplify the management of court reservations and scheduling. The software provides a streamlined interface that makes it easy for owners to manage bookings, while also offering customers a live display of current bookings, enhancing transparency and convenience. This project highlights my focus on creating intuitive, user-friendly solutions that cater to the operational needs of sports clubs."
                stack="React.js, Flask, Python, CockroachDB, Electron.js"
                imgs={[
                    { src: ar1, desc: "Landing Page" },
                    { src: ar2, desc: "Shop Page" },
                    { src: ar3, desc: "Shop Mobile View" },
                    { src: ar4, desc: "User Account Page" }
                ]}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/hymus_sports.txt": {
            component: <ProjectFile
                name="Hymus Sports Web App"
                content="The Hymus Sports website was designed to provide a seamless online experience for customers interested in sports training and activities. The site offers detailed information on services, schedules, and facility features, while also enabling users to make online bookings with ease. Its clean and user-friendly design ensures that visitors can quickly navigate through the various offerings, making it an essential tool for both prospective and current customers of the facility."
                stack="React.js, Flask, Python, CockroachDB"
                link="https://hymussports.ca/"
                imgs={[
                    { src: ar1, desc: "Landing Page" },
                    { src: ar2, desc: "Shop Page" },
                    { src: ar3, desc: "Shop Mobile View" },
                    { src: ar4, desc: "User Account Page" }
                ]}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/underground_oasis.txt": {
            component: <ProjectFile
                name="Underground Oasis Web App"
                content="The Underground Oasis Detailing website was developed to provide a seamless online experience for a mobile car detailing company. The site features a clean and modern landing page with detailed service information, pricing packages, and an 'About Us' section. Users can create custom profiles, book appointments, and receive calendar invites. The platform also includes an admin page for managing appointments, user profiles, and uploading images to a personalized gallery that showcases the results of detailing services. This website enhances both customer engagement and operational efficiency for the business."
                stack="React.js, Flask, Python, CockroachDB"
                link="https://undergroundoasis.ca/"
                imgs={[
                    { src: ar1, desc: "Landing Page" },
                    { src: ar2, desc: "Shop Page" },
                    { src: ar3, desc: "Shop Mobile View" },
                    { src: ar4, desc: "User Account Page" }
                ]}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/code_clash.txt": {
            component: <ProjectFile
                name="Code Clash Web Game"
                content="AR Rackets is a React-based full stack web application, powered by a Flask Python backend and CockroachDB. The site specializes in badminton racket restringing and servicing, offering customers a seamless way to explore services and make bookings. In addition to servicing, AR Rackets provides a diverse selection of both new and used rackets available for purchase. The website's modern, responsive design ensures an optimal user experience across all devices, while the integration of cutting-edge technologies ensures reliability and performance. This project demonstrates my ability to create full-stack applications that cater to both business and customer needs."
                stack="React.js, Flask, Python, CockroachDB"
                link="https://ar-rackets.vercel.app/"
                imgs={[
                    { src: ar1, desc: "Landing Page" },
                    { src: ar2, desc: "Shop Page" },
                    { src: ar3, desc: "Shop Mobile View" },
                    { src: ar4, desc: "User Account Page" }
                ]}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/tmu_treasures.txt": {
            component: <ProjectFile
                name="TMU Treasures Web App"
                content="AR Rackets is a React-based full stack web application, powered by a Flask Python backend and CockroachDB. The site specializes in badminton racket restringing and servicing, offering customers a seamless way to explore services and make bookings. In addition to servicing, AR Rackets provides a diverse selection of both new and used rackets available for purchase. The website's modern, responsive design ensures an optimal user experience across all devices, while the integration of cutting-edge technologies ensures reliability and performance. This project demonstrates my ability to create full-stack applications that cater to both business and customer needs."
                stack="React.js, Flask, Python, CockroachDB"
                link="https://ar-rackets.vercel.app/"
                imgs={[
                    { src: ar1, desc: "Landing Page" },
                    { src: ar2, desc: "Shop Page" },
                    { src: ar3, desc: "Shop Mobile View" },
                    { src: ar4, desc: "User Account Page" }
                ]}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/tmu_battlebots.txt": {
            component: <ProjectFile
                name="AR Rackets Website"
                content="AR Rackets is a React-based full stack web application, powered by a Flask Python backend and CockroachDB. The site specializes in badminton racket restringing and servicing, offering customers a seamless way to explore services and make bookings. In addition to servicing, AR Rackets provides a diverse selection of both new and used rackets available for purchase. The website's modern, responsive design ensures an optimal user experience across all devices, while the integration of cutting-edge technologies ensures reliability and performance. This project demonstrates my ability to create full-stack applications that cater to both business and customer needs."
                stack="React.js, Flask, Python, CockroachDB"
                link="https://ar-rackets.vercel.app/"
                imgs={[
                    { src: ar1, desc: "Landing Page" },
                    { src: ar2, desc: "Shop Page" },
                    { src: ar3, desc: "Shop Mobile View" },
                    { src: ar4, desc: "User Account Page" }
                ]}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/secure_cash_atm_system.txt": {
            component: <ProjectFile
                name="AR Rackets Website"
                content="AR Rackets is a React-based full stack web application, powered by a Flask Python backend and CockroachDB. The site specializes in badminton racket restringing and servicing, offering customers a seamless way to explore services and make bookings. In addition to servicing, AR Rackets provides a diverse selection of both new and used rackets available for purchase. The website's modern, responsive design ensures an optimal user experience across all devices, while the integration of cutting-edge technologies ensures reliability and performance. This project demonstrates my ability to create full-stack applications that cater to both business and customer needs."
                stack="React.js, Flask, Python, CockroachDB"
                link="https://ar-rackets.vercel.app/"
                imgs={[
                    { src: ar1, desc: "Landing Page" },
                    { src: ar2, desc: "Shop Page" },
                    { src: ar3, desc: "Shop Mobile View" },
                    { src: ar4, desc: "User Account Page" }
                ]}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/e_mersed_e_commerce.txt": {
            component: <ProjectFile
                name="E-Mersed E-Commerce Web App"
                content="E-Mersed is an innovative ecommerce platform dedicated to gaming equipment, featuring a one-of-a-kind Virtual Setup Designer (VSD). Developed with React Three Fiber, the VSD allows users to create and customize their gaming setups in a fully immersive 3D environment, providing a dynamic and interactive experience for customers. This cutting-edge feature makes E-Mersed stand out in the ecommerce space by offering gamers a way to visualize and design their ideal setups before making a purchase. The project highlights my expertise in 3D web technologies and my passion for blending creativity with functionality in ecommerce."
                stack="React.js, Blender, Stripe API"
                link="https://ar-rackets.vercel.app/"
                imgs={[
                    { src: ar1, desc: "Landing Page" },
                    { src: ar2, desc: "Shop Page" },
                    { src: ar3, desc: "Shop Mobile View" },
                    { src: ar4, desc: "User Account Page" }
                ]}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/tenno_trader_app.txt": {
            component: <ProjectFile
                name="Tenno Trader Mobile App"
                content="TennoTrader is a mobile iOS app designed for Warframe players, providing a seamless way to track buy and sell orders directly from warframe.market. With its user-friendly interface, the app allows users to monitor up to 5 items through a customizable watchlist. TennoTrader also sends mobile notifications when item prices reach user-specified thresholds, ensuring players never miss out on a trade. This app elevates the trading experience for Warframe enthusiasts, offering convenience and real-time updates."
                stack="React Native, Expo GO, warframe.market API"
                link="https://ar-rackets.vercel.app/"
                imgs={[
                    { src: ar1, desc: "Landing Page" },
                    { src: ar2, desc: "Shop Page" },
                    { src: ar3, desc: "Shop Mobile View" },
                    { src: ar4, desc: "User Account Page" }
                ]}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/my_outlet.txt": {
            component: <ProjectFile
                name="AR Rackets Website"
                content="AR Rackets is a React-based full stack web application, powered by a Flask Python backend and CockroachDB. The site specializes in badminton racket restringing and servicing, offering customers a seamless way to explore services and make bookings. In addition to servicing, AR Rackets provides a diverse selection of both new and used rackets available for purchase. The website's modern, responsive design ensures an optimal user experience across all devices, while the integration of cutting-edge technologies ensures reliability and performance. This project demonstrates my ability to create full-stack applications that cater to both business and customer needs."
                stack="React.js, Flask, Python, CockroachDB"
                link="https://ar-rackets.vercel.app/"
                imgs={[
                    { src: ar1, desc: "Landing Page" },
                    { src: ar2, desc: "Shop Page" },
                    { src: ar3, desc: "Shop Mobile View" },
                    { src: ar4, desc: "User Account Page" }
                ]}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/gamer_fit_discord_bot.txt": {
            component: <ProjectFile
                name="GamerFit Discord Bot"
                content="This Discord bot is designed specifically for gamers and individuals who spend extended periods in front of a screen. The bot helps users set activity goals and schedule reminders to take breaks, promoting a healthier balance during long gaming or work sessions. For each reminder, the bot suggests random exercises to keep users active. Additionally, it integrates a motivational quote API, allowing users to get workout motivation on demand. This tool encourages wellness and productivity through a user-friendly and interactive experience."
                stack="React.js, Flask, Python, CockroachDB"
                link="https://ar-rackets.vercel.app/"
                imgs={[
                    { src: ar1, desc: "Landing Page" },
                    { src: ar2, desc: "Shop Page" },
                    { src: ar3, desc: "Shop Mobile View" },
                    { src: ar4, desc: "User Account Page" }
                ]}
            />,
            icon: fileIcon,
            onclick: changeFile
        }
    }

    return (
        <div className='file-explorer-page'>
            <div className='file-explorer-cont' style={{ width: currFile ? '45%' : '80%', marginRight: currFile ? '1.75' : '0%' }}>
                <div className='file-explorer-header'>
                    <h1 className='directory-header'>File Directory</h1>
                </div>
                <div className={changing ? 'file-explorer-body' : 'file-explorer-body changing'}>
                    {currFolder !== "root" ?
                        <div className='item-cont'>
                            <div className='item' onClick={goBack}>
                                <img className='item-icon' src={door} />
                                <p className='item-name'>{"Exit"}</p>
                            </div>
                        </div>
                        :
                        <div className='item-cont'>
                            <div className='item' onClick={() => navigate('/')}>
                                <img className='item-icon' src={door} />
                                <p className='item-name'>{"Exit"}</p>
                            </div>
                        </div>
                    }
                    {showItems()}
                </div>
            </div>
            <div className={changing || fileChanging ? 'file-view-cont' : 'file-view-cont changing'} style={{ width: currFile ? '45%' : '0%', marginLeft: currFile ? '1.75%' : '0%' }}>
                {files[currFolder + "/" + currFile]?.component}
            </div>
            <Background />
        </div>
    );
}

export default FileExplorer;