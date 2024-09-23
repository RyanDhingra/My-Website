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
import WorkFile from './Files/WorkFile.jsx';

// Project Images
import ar1 from '../../assets/images/projects/ar_1.png'
import ar2 from '../../assets/images/projects/ar_2.png'
import ar3 from '../../assets/images/projects/ar_3.png'
import ar4 from '../../assets/images/projects/ar_4.png'

import ccs1 from '../../assets/images/projects/ccs_1.png'
import ccs2 from '../../assets/images/projects/ccs_2.png'
import ccs3 from '../../assets/images/projects/ccs_3.png'

import cc1 from '../../assets/images/projects/cc_1.png'
import cc2 from '../../assets/images/projects/cc_2.png'
import cc3 from '../../assets/images/projects/cc_3.png'
import cc4 from '../../assets/images/projects/cc_4.png'

import em1 from '../../assets/images/projects/em_1.png'
import em2 from '../../assets/images/projects/em_2.png'
import em3 from '../../assets/images/projects/em_3.png'

import hs1 from '../../assets/images/projects/hs_1.png'
import hs2 from '../../assets/images/projects/hs_2.png'
import hs3 from '../../assets/images/projects/hs_3.png'
import hs4 from '../../assets/images/projects/hs_4.png'

import tw1 from '../../assets/images/projects/tw_1.png'
import tw2 from '../../assets/images/projects/tw_2.png'
import tw3 from '../../assets/images/projects/tw_3.png'
import tw4 from '../../assets/images/projects/tw_4.png'
import tw5 from '../../assets/images/projects/tw_5.png'
import tw6 from '../../assets/images/projects/tw_6.png'

import uo1 from '../../assets/images/projects/uo_1.png'
import uo2 from '../../assets/images/projects/uo_2.png'
import uo3 from '../../assets/images/projects/uo_3.png'
import uo4 from '../../assets/images/projects/uo_4.png'

import tt1 from '../../assets/images/projects/tt_1.png'
import tt2 from '../../assets/images/projects/tt_2.png'
import tt3 from '../../assets/images/projects/tt_3.png'
import tt4 from '../../assets/images/projects/tt_4.png'

import tb1 from '../../assets/images/projects/tb_1.png'
import tb2 from '../../assets/images/projects/tb_2.png'
import tb3 from '../../assets/images/projects/tb_3.png'

import gf1 from '../../assets/images/projects/gf_1.png'

function FileExplorer() {
    const [currFolder, setCurrFolder] = useState("root");
    const [currFile, setCurrFile] = useState(null);
    const navigate = useNavigate();

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const [changing, setChanging] = useState(false);
    const [fileChanging, setFileChanging] = useState(false);
    const [closing, setClosing] = useState(false);

    const changeFolder = async (folder) => {
        setChanging(true);
        await sleep(300);
        setCurrFolder(folder);
        setChanging(false);
        setCurrFile(null);
    }

    const closeFile = async () => {
        setClosing(true);
        await sleep(300);
        setCurrFile(null);
        setClosing(false);
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
            files: ["summer_2024_SDE.txt", "summer_2023_SDE.txt", "summer_2022_BSA.txt"],
            parent: "Work Experience"
        },
        "Transpots": {
            folders: [],
            files: ["full_stack_SDE.txt"],
            parent: "Work Experience"
        },
        "Personal Projects": {
            folders: [],
            files: ["ar_rackets.txt", "club_companion_software_app.txt", "hymus_sports.txt", "underground_oasis.txt", "code_clash.txt", "tmu_treasures.txt", "tmu_battlebots.txt", "e_mersed_e_commerce.txt", "tenno_trader_app.txt", "my_outlet.txt", "gamer_fit_discord_bot.txt", "tank_wars.txt"],
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
            component: <Resume closeFile={closeFile} />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Education/transcript.txt": {
            component: <Transcript closeFile={closeFile} />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Education/skills.txt": {
            component: <Skills closeFile={closeFile} />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Biography/about.txt": {
            component: <About closeFile={closeFile} />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Education/accolades.txt": {
            component: <Accolades closeFile={closeFile} />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Sun Life Financial/summer_2024_SDE.txt": {
            component: <WorkFile
                title="Software Developer"
                company="Sun Life Financial"
                date="May 2024 - August 2024"
                location="Toronto, ON"
                summary={[
                    "- Software Developer on the Core Enablement team in the Data & Analytics department",
                    <br />,
                    <br />,
                    "- Configured AI Chatbot using Amazon Kendra, Lex, Lambda, Bedrock, S3",
                    <br />,
                    <br />,
                    "- Designed, developed, tested, and deployed full stack application",
                    <br />,
                    <br />,
                    "- Created a Merge Queue project and integrated with Bitbucket's infrastructure",
                    <br />,
                    <br />,
                    "- Built and containerized Springboot REST API + Gradle Application via Docker",
                    <br />,
                    <br />,
                    "- Implemented CI/CD pipeline in Jenkins",
                    <br />,
                    <br />,
                    "- Deployed using DevOps tools including Kubernetes, Openshift, Quay",
                    <br />,
                    <br />,
                    "- Setup React.js web application to serve as the UI",
                    <br />,
                    <br />,
                    "- Provisioned and maintained AWS RDS database",
                    <br />,
                    <br />,
                    "- Leveraged AWS Lambda for Bitbucket API interactions",
                    <br />,
                    <br />,
                    "- Completed Vert.x Udemy course and took introductory Microservices courses to deepen understanding of scalable backend solutions",
                    <br />,
                    <br />,
                    "- BOLDER AWARD Nominee for Biased for Action category",
                ]}
                skills={"AWS Lambda, Amazon Lex, Amazon Kendra, Amazon S3, Amazon Bedrock, Bitbucket, Gradle, Spring Boot, Docker, Jenkins, Java, Python, Kubernetes, Openshift, Quay, React.js, Jira, Agile Workflow"}
                closeFile={closeFile}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Sun Life Financial/summer_2023_SDE.txt": {
            component: <WorkFile
                title="Software Developer"
                company="Sun Life Financial"
                date="May 2023 - August 2023"
                location="Toronto, ON"
                summary={[
                    "- Software Engineering Chapter DevOps Team Member",
                    <br />,
                    <br />,
                    "- Worked on implementing AWS Encryption SDK in Python, Java, Scala",
                    <br />,
                    <br />,
                    "- Completed Hashicorp Terraform Udemy course",
                    <br />,
                    <br />,
                    "- Completed Docker and Kubernetes introductory Udemy course",
                    <br />,
                    <br />,
                    "- Translated Cloud Formation template into Terraform template",
                    <br />,
                    <br />,
                    "- Created Terraform project to provision AWS Glue Jobs",
                    <br />,
                    <br />,
                    "- Created a class diagram and conducted research for Slide Data Ingestion process within Sun Life",
                    <br />,
                    <br />,
                    "- Conducted research to assemble confluence page for Format Preserving Encryption and other similar encryption algorithms",
                    <br />,
                    <br />,
                    "- Worked on Data Pseudonymization POC",
                    <br />,
                    <br />,
                    "- Worked in a high paced, agile work environment while retaining the use of coding best practices and structured workflows",
                ]}
                skills={"Java, Python, Scala, Research, Confluence, Terraform, Jira, Agile Workflow, Encryption, AWS Encryption SDK, Cloud Formation, AWS Glue, Data Ingestion, Pseudonymization"}
                closeFile={closeFile}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Sun Life Financial/summer_2022_BSA.txt": {
            component: <WorkFile
                title="Business Systems Analyst"
                company="Sun Life Financial"
                date="May 2023 - August 2023"
                location="Toronto, ON"
                summary={[
                    "- AWS Operations Team Member",
                    <br />,
                    <br />,
                    "- Assisted in the organization and planning process of a D&A global hackathon",
                    <br />,
                    <br />,
                    "- Documented server patching processes for SQL + Non-SQL servers",
                    <br />,
                    <br />,
                    "- Reviewed and organized 2800+ D&A operations documents in SharePoint libraries",
                    <br />,
                    <br />,
                    "- Conducted research for PySpark and its applications within the Data & Analytics department",
                    <br />,
                    <br />,
                    "- Created an employee skills matrix using Python, Tkinter, MySQL Database, and AWS RDS",
                    <br />,
                    <br />,
                    "- Enhanced the project release checklist excel sheet by creating autofill functions and collapsible sections",
                    <br />,
                    <br />,
                    "- Created training videos for excel documents",
                ]}
                skills={"Python, Excel, Microsoft Office, Jira, Research Documentation, PySpark, SQL, SharePoint, Tkinter, AWS RDS"}
                closeFile={closeFile}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Transpots/full_stack_SDE.txt": {
            component: <WorkFile
                title="Software Developer"
                company="Transpots"
                date="April 2023 - Present"
                location="Toronto, ON"
                summary={[
                    "- Led the frontend development using React.js for version 2 of the platform, ensuring a seamless user experience and smooth integration with backend services",
                    <br />,
                    <br />,
                    "- Developed an authentication Proof of Concept (POC), integrating Auth0 with a NestJS backend to streamline user access and security",
                    <br />,
                    <br />,
                    "- Worked closely with a cross-functional team to implement a flow involving Large Language Models (LLMs) that automated document upload and storage, significantly improving operational efficiency",
                    <br />,
                    <br />,
                    "- Delivered a full-stack solution that reduced manual document handling and increased system scalability",
                    <br />,
                    <br />,
                    "Collaborated with backend teams to ensure smooth data flow and consistent user experiences across different features"
                ]}
                skills={"React.js, Python + FastAPI, Docker, Nest.js, LLMs, GenAI, Backend Integration, Frontend Development"}
                closeFile={closeFile}
            />,
            icon: fileIcon,
            onclick: changeFile
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
                stack="React.js, Flask, Python, CockroachDB, HTML, CSS, Javascript"
                link="https://ar-rackets.vercel.app/"
                imgs={[
                    { src: ar1, desc: "Landing Page" },
                    { src: ar2, desc: "Shop Page" },
                    { src: ar3, desc: "Shop Mobile View" },
                    { src: ar4, desc: "User Account Page" }
                ]}
                closeFile={closeFile}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/club_companion_software_app.txt": {
            component: <ProjectFile
                name="Club Companion Desktop App"
                content="Club Companion is a sleek desktop application powered by Electron JS, designed specifically for sports club owners to simplify the management of court reservations and scheduling. The software provides a streamlined interface that makes it easy for owners to manage bookings, while also offering customers a live display of current bookings, enhancing transparency and convenience."
                stack="React.js, Flask, Python, CockroachDB, Electron.js"
                imgs={[
                    { src: ccs3, desc: "Dashboard" },
                    { src: ccs2, desc: "Schedule" },
                    { src: ccs1, desc: "Live Customer Display" }
                ]}
                closeFile={closeFile}
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
                    { src: hs1, desc: "Landing Page" },
                    { src: hs2, desc: "Facility Section" },
                    { src: hs3, desc: "Booking Section" },
                    { src: hs4, desc: "Location/Contact Section" }
                ]}
                closeFile={closeFile}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/underground_oasis.txt": {
            component: <ProjectFile
                name="Underground Oasis Web App"
                content="The Underground Oasis Detailing website was developed to provide a seamless online experience for a mobile car detailing company. The site features a clean and modern landing page with detailed service information, pricing packages, and an 'About Us' section. Users can create custom profiles, book appointments, and receive calendar invites. The platform also includes an admin page for managing appointments, user profiles, and uploading images to a personalized gallery that showcases the results of detailing services. This website enhances both customer engagement and operational efficiency for the business."
                stack="React.js, Flask, Python, CockroachDB, HTML, CSS, Javascript"
                link="https://undergroundoasis.ca/"
                imgs={[
                    { src: uo1, desc: "Landing Page" },
                    { src: uo2, desc: "Pricing Page" },
                    { src: uo3, desc: "Contact Page" },
                    { src: uo4, desc: "Login Page" }
                ]}
                closeFile={closeFile}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/code_clash.txt": {
            component: <ProjectFile
                name="Code Clash Web Game"
                content="Code-Clash is an innovative online multiplayer game that brings the thrill of coding competitions to life. Players can engage in fast-paced 1v1 duels or team up for strategic 2v2 battles, tackling coding challenges like clean code creation, optimizing efficiency, and debugging under time pressure. Whether you're racing against the clock or competing for the cleanest solution, Code-Clash offers an adrenaline-fueled experience designed to test and improve your programming skills. With integrated learning modules, players can also sharpen their coding knowledge in a fun and engaging way, making it a valuable tool for developers of all levels."
                stack="React.js, Flask, Python, CockroachDB, WebSockets, Socket.io"
                imgs={[
                    { src: cc1, desc: "Login Page" },
                    { src: cc2, desc: "Main Menu" },
                    { src: cc4, desc: "Game Mode Select" },
                    { src: cc3, desc: "Game Mode 1 Sample" }
                ]}
                closeFile={closeFile}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/tmu_treasures.txt": {
            component: <ProjectFile
                name="TMU Treasures Web App"
                content="TMU Treasures is an exclusive online marketplace designed specifically for the TMU student community. The platform offers a seamless experience for buying, selling, and exchanging goods and services through categories such as 'Items Wanted', 'Items for Sale', and 'Academic Services'. Whether students are looking to sell textbooks, declutter their space, or offer academic support, TMU Treasures provides a user-friendly environment that fosters connection and collaboration. More than just a marketplace, the platform embodies the spirit of the TMU community, creating opportunities for students to engage and support one another. It also features a built in messaging system to facilitate communication between buyers and sellers."
                stack="React.js, Flask, Python, CockroachDB"
                imgs={[
                    { src: tt1, desc: "Landing Page" },
                    { src: tt2, desc: "Shop Page" },
                    { src: tt3, desc: "Online User Chat" },
                    { src: tt4, desc: "Admin Page" }
                ]}
                closeFile={closeFile}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/tmu_battlebots.txt": {
            component: <ProjectFile
                name="TMU BattleBots Web Site"
                content="TMU Battlebots is an interactive website designed to showcase the university's battlebots team and their creations. The site features detailed 3D models of the robots, allowing users to explore them in an interactive and engaging way. This platform acts as both a digital portfolio for the team and an interactive experience for robotics enthusiasts."
                stack="React.js, React Three Fiber, Blender, 3D Modelling, Photoshop"
                link="https://tmu-battle-bots.vercel.app/"
                imgs={[
                    { src: tb1, desc: "Landing Page" },
                    { src: tb2, desc: "Interactive 3D Model" },
                    { src: tb3, desc: "About Us Page" },
                ]}
                closeFile={closeFile}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/e_mersed_e_commerce.txt": {
            component: <ProjectFile
                name="E-Mersed E-Commerce Web App"
                content="E-Mersed is an innovative ecommerce platform dedicated to gaming equipment, featuring a one-of-a-kind Virtual Setup Designer (VSD). Developed with React Three Fiber, the VSD allows users to create and customize their gaming setups in a fully immersive 3D environment, providing a dynamic and interactive experience for customers. This cutting-edge feature makes E-Mersed stand out in the ecommerce space by offering gamers a way to visualize and design their ideal setups before making a purchase. The project highlights showcases expertise in 3D web technologies and the ability to blend creativity with functionality in ecommerce."
                stack="React.js, Blender, Stripe API, React Three Fiber, Commerce.js"
                link="https://ar-rackets.vercel.app/"
                imgs={[
                    { src: em1, desc: "Landing Page" },
                    { src: em2, desc: "Browse Page" },
                    { src: em3, desc: "VSD" },
                ]}
                closeFile={closeFile}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/tenno_trader_app.txt": {
            component: <ProjectFile
                name="Tenno Trader Mobile App"
                content="TennoTrader is a mobile iOS app designed for Warframe players, providing a seamless way to track buy and sell orders directly from warframe.market. With its user-friendly interface, the app allows users to monitor up to 5 items through a customizable watchlist. TennoTrader also sends mobile notifications when item prices reach user-specified thresholds, ensuring players never miss out on a trade. This app elevates the trading experience for Warframe enthusiasts, offering convenience and real-time updates." wwwwwwa
                stack="React Native, Expo GO, warframe.market API"
                link="https://ar-rackets.vercel.app/"
                imgs={[]}
                closeFile={closeFile}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/my_outlet.txt": {
            component: <ProjectFile
                name="My Outlet Social App"
                content="My Outlet is a unique social battery monitoring application designed to foster in-person interactions. The app displays surrounding users who are open to socializing and promotes real-life connectivity. Utilizing indoor geolocation technology, My Outlet provides users with the distance between them and others in their vicinity, making it easier to initiate spontaneous meetups. By encouraging face-to-face connections, Outlet bridges the gap between digital and in-person interactions."
                stack="React.js, Flask, Python, CockroachDB"
                link="https://ar-rackets.vercel.app/"
                imgs={[]}
                closeFile={closeFile}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/gamer_fit_discord_bot.txt": {
            component: <ProjectFile
                name="GamerFit Discord Bot"
                content="This Discord bot is designed specifically for gamers and individuals who spend extended periods in front of a screen. The bot helps users set activity goals and schedule reminders to take breaks, promoting a healthier balance during long gaming or work sessions. For each reminder, the bot suggests random exercises to keep users active. Additionally, it integrates a motivational quote API, allowing users to get workout motivation on demand. This tool encourages wellness and productivity through a user-friendly and interactive experience."
                stack="Python, Discord API, Motivational Quote API"
                link="https://ar-rackets.vercel.app/"
                imgs={[
                    { src: gf1, desc: "Discord UI" }
                ]}
                closeFile={closeFile}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/tank_wars.txt": {
            component: <ProjectFile
                name="Tank Wars PyGame"
                content="This multiplayer 2D game, built in Python using Pygame and Tkinter, offers players an exciting and competitive experience across four completely unique maps. Each map is filled with distinctive power-ups that players can strategically use to outplay their opponents and dominate the competition. The game combines engaging mechanics with dynamic environments, creating a fun and immersive gameplay experience."
                stack="Python, PyGame, Tkinter"
                imgs={[
                    { src: tw1, desc: "Start Menu" },
                    { src: tw2, desc: "Map Select" },
                    { src: tw3, desc: "Classic Mode" },
                    { src: tw4, desc: "Space Mode" },
                    { src: tw5, desc: "Marine Mode" },
                    { src: tw6, desc: "Cyber Mode" }
                ]}
            />,
            icon: fileIcon,
            onclick: changeFile
        },
        "Personal Projects/inventory_software.txt": {
            component: <ProjectFile
                name="Inventory Management Software"
                content="This inventory management software, developed using Java Swing, allows users to efficiently manage their product inventory by adding and deleting items, searching through inventory, and updating key details such as price, size, and quantity. The software also supports adding images for each product, which are displayed alongside detailed information in a clear and user-friendly format. This tool simplifies inventory tracking while providing a visually appealing way to view all product details."
                stack="Java, Java Swing"
                imgs={[
                    { src: is1, desc: "Product Creation Page" }
                ]}
            />,
            icon: fileIcon,
            onclick: changeFile
        }
    }

    return (
        <div className='mobile-file-explorer-page'>
            <div className='mobile-file-explorer-cont' style={{ opacity: currFile ? '0' : '1' }}>
                <div className='mobile-file-explorer-header'>
                    <h1 className='mobile-directory-header'>File Directory</h1>
                </div>
                <div className={changing ? 'mobile-file-explorer-body' : 'mobile-file-explorer-body mobile-changing'}>
                    {currFolder !== "root" ?
                        <div className='mobile-item-cont'>
                            <div className='mobile-item' onClick={goBack}>
                                <img className='mobile-item-icon' src={door} />
                                <p className='mobile-item-name'>{"Exit"}</p>
                            </div>
                        </div>
                        :
                        <div className='mobile-item-cont'>
                            <div className='mobile-item' onClick={() => navigate('/')}>
                                <img className='mobile-item-icon' src={door} />
                                <p className='mobile-item-name'>{"Exit"}</p>
                            </div>
                        </div>
                    }
                    {showItems()}
                </div>
            </div>
            <div className={changing ? 'mobile-file-view-cont mobile-changing' : 'mobile-file-view-cont'} style={{ opacity: closing ? '0' : '1', visibility: currFile ? 'visible' : 'hidden' }}>
                {files[currFolder + "/" + currFile]?.component}
            </div>
            <Background />
        </div>
    );
}

export default FileExplorer;