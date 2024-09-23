import React, { useState, useEffect, useRef } from 'react';
import './Terminal.css';
import BackgroundVideo from '../BackGround/Background';
import { useNavigate } from 'react-router-dom';

function Terminal() {
    const dirStructure = {
        '~': {
            'parent': null,
            'type': 'dir',
            'folderNames': ['projects', 'network'],
            'fileNames': [],
            'projects': {
                'fileNames': [],
                'folderNames': ['ar_rackets', 'code_clash', 'tenno_trader', 'e_merse    d', 'inventory_software', 'club_companion', 'underground_oasis', 'tank_wars', 'hymus_sports', 'tmu_treasures', 'tmu_battlebots', 'my_outlet', 'gamer_fit'],
                'parent': '~',
                'type': 'dir',
                "ar_rackets": {
                    'parent': 'projects',
                    'type': 'dir',
                    'fileNames': ["viewSite.sh", "description.txt"],
                    'folderNames': [],
                    "viewSite.sh": {
                        'parent': 'ar_rackets',
                        'type': 'script',
                        'url': "https://ar-rackets.vercel.app/"
                    },
                    "description.txt": {
                        'parent': 'ar_rackets',
                        'type': 'text',
                        'content': [
                            "AR Rackets is a React-based full stack web application, powered by a Flask Python backend and CockroachDB. The site specializes in badminton racket restringing and servicing, offering customers a seamless way to explore services and make bookings. In addition to servicing, AR Rackets provides a diverse selection of both new and used rackets available for purchase. The website's modern, responsive design ensures an optimal user experience across all devices, while the integration of cutting-edge technologies ensures reliability and performance.",
                            <br />,
                            <br />,
                            "Tech Stack: React.js, Flask, Python, CockroachDB, HTML, CSS, Javascript"
                        ]
                    }
                },
                "code_clash": {
                    'parent': 'projects',
                    'type': 'dir',
                    'fileNames': ["viewRepo.sh", "description.txt"],
                    'folderNames': [],
                    "viewRepo.sh": {
                        'parent': 'code_clash',
                        'type': 'script',
                        'url': "https://github.com/RyanDhingra/Code-Clash"
                    },
                    "description.txt": {
                        'parent': 'code_clash',
                        'type': 'text',
                        'content': [
                            "Code-Clash is an innovative online multiplayer game that brings the thrill of coding competitions to life. Players can engage in fast-paced 1v1 duels or team up for strategic 2v2 battles, tackling coding challenges like clean code creation, optimizing efficiency, and debugging under time pressure. Whether you're racing against the clock or competing for the cleanest solution, Code-Clash offers an adrenaline-fueled experience designed to test and improve your programming skills. With integrated learning modules, players can also sharpen their coding knowledge in a fun and engaging way, making it a valuable tool for developers of all levels.",
                            <br />,
                            <br />,
                            "Tech Stack: React.js, Flask, Python, CockroachDB, WebSockets, Socket.io"
                        ]
                    }
                },
                "tenno_trader": {
                    'parent': 'projects',
                    'type': 'dir',
                    'fileNames': ["viewRepo.sh", "description.txt"],
                    'folderNames': [],
                    "viewRepo.sh": {
                        'parent': 'tenno_trader',
                        'type': 'script',
                        'url': "https://github.com/RyanDhingra/TennoTrader-App"
                    },
                    "description.txt": {
                        'parent': 'tenno_trader',
                        'type': 'text',
                        'content': [
                            "TennoTrader is a mobile iOS app designed for Warframe players, providing a seamless way to track buy and sell orders directly from warframe.market. With its user-friendly interface, the app allows users to monitor up to 5 items through a customizable watchlist. TennoTrader also sends mobile notifications when item prices reach user-specified thresholds, ensuring players never miss out on a trade. This app elevates the trading experience for Warframe enthusiasts, offering convenience and real-time updates.",
                            <br />,
                            <br />,
                            "Tech Stack: React Native, Expo GO, Javascript, Axios, warframe.market API"
                        ]
                    }
                },
                "e_mersed": {
                    'parent': 'projects',
                    'type': 'dir',
                    'fileNames': ["viewRepo.sh", "description.txt"],
                    'folderNames': [],
                    "viewRepo.sh": {
                        'parent': 'e_mersed',
                        'type': 'script',
                        'url': "https://github.com/RyanDhingra/E-Mersed"
                    },
                    "description.txt": {
                        'parent': 'e_mersed',
                        'type': 'text',
                        'content': [
                            "E-Mersed is an innovative ecommerce platform dedicated to gaming equipment, featuring a one-of-a-kind Virtual Setup Designer (VSD). Developed with React Three Fiber, the VSD allows users to create and customize their gaming setups in a fully immersive 3D environment, providing a dynamic and interactive experience for customers. This cutting-edge feature makes E-Mersed stand out in the ecommerce space by offering gamers a way to visualize and design their ideal setups before making a purchase. The project highlights showcases expertise in 3D web technologies and the ability to blend creativity with functionality in ecommerce.",
                            <br />,
                            <br />,
                            "Tech Stack: React.js, React Three Fiber, HTML, CSS, Javascript, Commerce.js, Stripe"
                        ]
                    }
                },
                "inventory_software": {
                    'parent': 'projects',
                    'type': 'dir',
                    'fileNames': ["viewRepo.sh", "description.txt"],
                    'folderNames': [],
                    "viewRepo.sh": {
                        'parent': 'inventory_software',
                        'type': 'script',
                        'url': "https://github.com/RyanDhingra/Product-Inventory-Software"
                    },
                    "description.txt": {
                        'parent': 'inventory_software',
                        'type': 'text',
                        'content': [
                            "This inventory management software, developed using Java Swing, allows users to efficiently manage their product inventory by adding and deleting items, searching through inventory, and updating key details such as price, size, and quantity. The software also supports adding images for each product, which are displayed alongside detailed information in a clear and user-friendly format. This tool simplifies inventory tracking while providing a visually appealing way to view all product details.",
                            <br />,
                            <br />,
                            "Tech Stack: Java, Java Swing"
                        ]
                    }
                },
                "club_companion": {
                    'parent': 'projects',
                    'type': 'dir',
                    'fileNames': ["description.txt"],
                    'folderNames': [],
                    "description.txt": {
                        'parent': 'club_companion',
                        'type': 'text',
                        'content': [
                            "Club Companion is a sleek desktop application powered by Electron JS, designed specifically for sports club owners to simplify the management of court reservations and scheduling. The software provides a streamlined interface that makes it easy for owners to manage bookings, while also offering customers a live display of current bookings, enhancing transparency and convenience.",
                            <br />,
                            <br />,
                            "Tech Stack: Electron JS, React.js, HTML, CSS, Javascript, Python, CockroachDB, Flask"
                        ]
                    }
                },
                "underground_oasis": {
                    'parent': 'projects',
                    'type': 'dir',
                    'fileNames': ["viewSite.sh", "description.txt"],
                    'folderNames': [],
                    "viewSite.sh": {
                        'parent': 'underground_oasis',
                        'type': 'script',
                        'url': "https://undergroundoasis.ca/"
                    },
                    "description.txt": {
                        'parent': 'underground_oasis',
                        'type': 'text',
                        'content': [
                            "The Underground Oasis Detailing website was developed to provide a seamless online experience for a mobile car detailing company. The site features a clean and modern landing page with detailed service information, pricing packages, and an 'About Us' section. Users can create custom profiles, book appointments, and receive calendar invites. The platform also includes an admin page for managing appointments, user profiles, and uploading images to a personalized gallery that showcases the results of detailing services. This website enhances both customer engagement and operational efficiency for the business.",
                            <br />,
                            <br />,
                            "Tech Stack: React.js, Flask, Python, CockroachDB, HTML, CSS, Javascript"
                        ]
                    }
                },
                "tank_wars": {
                    'parent': 'projects',
                    'type': 'dir',
                    'fileNames': ["viewRepo.sh", "description.txt"],
                    'folderNames': [],
                    "viewRepo.sh": {
                        'parent': 'tank_wars',
                        'type': 'script',
                        'url': "https://github.com/RyanDhingra/Tank-Wars"
                    },
                    "description.txt": {
                        'parent': 'tank_wars',
                        'type': 'text',
                        'content': [
                            "This multiplayer 2D game, built in Python using Pygame and Tkinter, offers players an exciting and competitive experience across four completely unique maps. Each map is filled with distinctive power-ups that players can strategically use to outplay their opponents and dominate the competition. The game combines engaging mechanics with dynamic environments, creating a fun and immersive gameplay experience.",
                            <br />,
                            <br />,
                            "Tech Stack: Python, Pygame, Tkinter"
                        ]
                    }
                },
                "hymus_sports": {
                    'parent': 'projects',
                    'type': 'dir',
                    'fileNames': ["viewSite.sh", "description.txt"],
                    'folderNames': [],
                    "viewSite.sh": {
                        'parent': 'hymus_sports',
                        'type': 'script',
                        'url': "https://www.hymussports.ca/"
                    },
                    "description.txt": {
                        'parent': 'hymus_sports',
                        'type': 'text',
                        'content': [
                            "The Hymus Sports website was designed to provide a seamless online experience for customers interested in sports training and activities. The site offers detailed information on services, schedules, and facility features, while also enabling users to make online bookings with ease. Its clean and user-friendly design ensures that visitors can quickly navigate through the various offerings, making it an essential tool for both prospective and current customers of the facility.",
                            <br />,
                            <br />,
                            "Tech Stack: Python, CockroachDB, Flask, HTML, CSS, Javascript, React.js"
                        ]
                    }
                },
                "tmu_treasures": {
                    'parent': 'projects',
                    'type': 'dir',
                    'fileNames': ["description.txt"],
                    'folderNames': [],
                    "description.txt": {
                        'parent': 'tmu_treasures',
                        'type': 'text',
                        'content': [
                            "TMU Treasures is an exclusive online marketplace designed specifically for the TMU student community. The platform offers a seamless experience for buying, selling, and exchanging goods and services through categories such as 'Items Wanted', 'Items for Sale', and 'Academic Services'. Whether students are looking to sell textbooks, declutter their space, or offer academic support, TMU Treasures provides a user-friendly environment that fosters connection and collaboration. More than just a marketplace, the platform embodies the spirit of the TMU community, creating opportunities for students to engage and support one another. It also features a built in messaging system to facilitate communication between buyers and sellers.",
                            <br />,
                            <br />,
                            "Tech Stack: React.js, Flask, Python, CockroachDB, HTML, CSS, Javascript"
                        ]
                    }
                },
                "tmu_battlebots": {
                    'parent': 'projects',
                    'type': 'dir',
                    'fileNames': ["viewSite.sh", "description.txt"],
                    'folderNames': [],
                    "viewSite.sh": {
                        'parent': 'tmu_battlebots',
                        'type': 'script',
                        'url': "https://tmu-battlebots.vercel.app/"
                    },
                    "description.txt": {
                        'parent': 'tmu_battlebots',
                        'type': 'text',
                        'content': [
                            "TMU Battlebots is an interactive website designed to showcase the university's battlebots team and their creations. The site features detailed 3D models of the robots, allowing users to explore them in an interactive and engaging way. This platform acts as both a digital portfolio for the team and an interactive experience for robotics enthusiasts.",
                            <br />,
                            <br />,
                            "Skills: React, React Three Fiber, HTML, CSS, Javascript"
                        ]
                    }
                },
                "my_outlet": {
                    'parent': 'projects',
                    'type': 'dir',
                    'fileNames': ["description.txt"],
                    'folderNames': [],
                    "description.txt": {
                        'parent': 'my_outlet',
                        'type': 'text',
                        'content': [
                            "My Outlet is a unique social battery monitoring application designed to foster in-person interactions. The app displays surrounding users who are open to socializing and promotes real-life connectivity. Utilizing indoor geolocation technology, My Outlet provides users with the distance between them and others in their vicinity, making it easier to initiate spontaneous meetups. By encouraging face-to-face connections, Outlet bridges the gap between digital and in-person interactions.",
                            <br />,
                            <br />,
                            "Tech Stack: React, Django, Python, HTML, CSS, Javascript"
                        ]
                    }
                },
                "gamer_fit": {
                    'parent': 'projects',
                    'type': 'dir',
                    'fileNames': ["description.txt"],
                    'folderNames': [],
                    "description.txt": {
                        'parent': 'gamer_fit',
                        'type': 'text',
                        'content': [
                            "This Discord bot is designed specifically for gamers and individuals who spend extended periods in front of a screen. The bot helps users set activity goals and schedule reminders to take breaks, promoting a healthier balance during long gaming or work sessions. For each reminder, the bot suggests random exercises to keep users active. Additionally, it integrates a motivational quote API, allowing users to get workout motivation on demand. This tool encourages wellness and productivity through a user-friendly and interactive experience.",
                            <br />,
                            <br />,
                            "Tech Stack: Python, Discord API, Discord.py"
                        ]
                    }
                }
            },
            'network': {
                'parent': '~',
                'type': 'dir',
                'fileNames': ['email.sh'],
                'folderNames': ['socials'],
                'email.sh': {
                    'parent': 'socials',
                    'type': 'script',
                    'url': "mailto:ryan.dhingra1@gmail.com"
                },
                "socials": {
                    'parent': 'network',
                    'type': 'dir',
                    'fileNames': ["linkedIn.sh", "github.sh", "instagram.sh"],
                    'folderNames': [],
                    "linkedIn.sh": {
                        'parent': 'socials',
                        'type': 'script',
                        'url': "https://www.linkedin.com/in/rd-dev/"
                    },
                    "github.sh": {
                        'parent': 'socials',
                        'type': 'script',
                        'url': "https://github.com/RyanDhingra"
                    },
                    "instagram.sh": {
                        'parent': 'socials',
                        'type': 'script',
                        'url': "https://www.instagram.com/rd._.devs/"
                    },
                }
            }
        }
    }

    const nextInput = useRef(null);
    const [currDir, setCurrDir] = useState('~');
    const [currNode, setCurrNode] = useState(dirStructure["~"]);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handleLs = () => {
        setOutput((prev) => [...prev,
        <>
            <div className='terminal-ls-cont'>
                {currNode.folderNames.map((folder) => (
                    <p className='terminal-text'>{folder}/</p>
                ))}

                {currNode.fileNames.map((file) => (
                    <p className='terminal-text'>{file}</p>
                ))}
            </div>
            <div className='terminal-input-cont'>
                <p className='terminal-text'>root@dev-terminal:{currDir}$</p>
                <input ref={nextInput} onKeyDown={handleInput} className='terminal-input' type='text' />
            </div>
        </>
        ])
    }

    const handleCd = async (dir) => {
        if (dir === '~') {
            if (currDir === '~') {
                setOutput((prev) => [...prev,
                <div className='terminal-input-cont'>
                    <p className='terminal-text'>root@dev-terminal:{currDir}$</p>
                    <input ref={nextInput} onKeyDown={handleInput} className='terminal-input' type='text' />
                </div>
                ])
            } else {
                setCurrDir((prev) => '~');
                await sleep(0);
                setCurrNode((prev) => dirStructure['~']);
            }
        } else if (dir === '../') {

            if (currNode.parent === null) {
                setOutput((prev) => [...prev,
                <div className='terminal-input-cont'>
                    <p className='terminal-text'>root@dev-terminal:{currDir}$</p>
                    <input ref={nextInput} onKeyDown={handleInput} className='terminal-input' type='text' />
                </div>
                ])
            } else {
                let paths = currDir.split('/');
                console.log(paths);
                await sleep(0);

                let newNode = dirStructure['~'];

                for (let path of paths.slice(1, paths.length - 1)) {
                    newNode = newNode[path];
                }

                setCurrDir((prev) => paths.slice(0, paths.length - 1).join('/'));
                await sleep(0);
                setCurrNode((prev) => newNode);
                await sleep(0);
            }
        } else if (currNode.folderNames.includes(dir)) {
            setCurrDir((prev) => prev + '/' + dir);
            await sleep(0);
            setCurrNode((prev) => currNode[dir]);
        } else {
            setOutput((prev) => [...prev,
            <>
                <div className='terminal-error-cont'>
                    <p className='terminal-text'>Error: cd: {dir}: No such directory</p>
                </div>
                <div className='terminal-input-cont'>
                    <p className='terminal-text'>root@dev-terminal:{currDir}$</p>
                    <input ref={nextInput} onKeyDown={handleInput} className='terminal-input' type='text' />
                </div>
            </>
            ])
        }
    }

    const handleInput = async (e) => {
        if (e.key === 'Enter') {
            nextInput.current.disabled = true;
            nextInput.current = null;

            const cleanVal = e.target.value.trim();

            if (cleanVal === '') {
                setOutput((prev) => [...prev,
                <div className='terminal-input-cont'>
                    <p className='terminal-text'>root@dev-terminal:{currDir}$</p>
                    <input ref={nextInput} onKeyDown={handleInput} className='terminal-input' type='text' />
                </div>
                ])

                return;
            } else if (cleanVal === 'clear') { //FIXME: This doesn't clear the terminal
                setOutput((prev) => [])
                await sleep(0);
                setOutput([
                    <div className='terminal-input-cont'>
                        <p className='terminal-text'>root@dev-terminal:{currDir}$</p>
                        <input ref={nextInput} onKeyDown={handleInput} className='terminal-input' type='text' />
                    </div>
                ])

                return;
            } else if (cleanVal === 'ls') {
                handleLs();

                return;
            } else if (cleanVal.split(' ')[0] === 'cd') {
                const args = cleanVal.split(' ');
                if (args.length !== 2) {
                    setOutput((prev) => [...prev,
                    <>
                        <div className='terminal-error-cont'>
                            <p className='terminal-text'>Error: cd: expected argument</p>
                        </div>
                        <div className='terminal-input-cont'>
                            <p className='terminal-text'>root@dev-terminal:{currDir}$</p>
                            <input ref={nextInput} onKeyDown={handleInput} className='terminal-input' type='text' />
                        </div>
                    </>
                    ])

                    return;
                }

                handleCd(args[1]);
                return;
            } else if (cleanVal === 'pwd') {
                setOutput((prev) => [...prev,
                <>
                    <div className='terminal-pwd-cont'>
                        <p className='terminal-text'>{currDir}</p>
                    </div>
                    <div className='terminal-input-cont'>
                        <p className='terminal-text'>root@dev-terminal:{currDir}$</p>
                        <input ref={nextInput} onKeyDown={handleInput} className='terminal-input' type='text' />
                    </div>
                </>
                ])

                return;
            } else if (cleanVal.split(' ')[0] === 'cat') {
                const args = cleanVal.split(' ');
                if (args.length !== 2) {
                    setOutput((prev) => [...prev,
                    <>
                        <div className='terminal-error-cont'>
                            <p className='terminal-text'>Error: cat: expected a single argument</p>
                        </div>
                        <div className='terminal-input-cont'>
                            <p className='terminal-text'>root@dev-terminal:{currDir}$</p>
                            <input ref={nextInput} onKeyDown={handleInput} className='terminal-input' type='text' />
                        </div>
                    </>
                    ])

                    return;
                }

                const fileName = args[1];
                if (currNode.fileNames.includes(fileName)) {
                    if (currNode[fileName].type === 'text') {
                        setOutput((prev) => [...prev,
                        <>
                            <div className='terminal-cat-cont'>
                                <p className='terminal-cat-text'>{currNode[fileName].content}</p>
                            </div>
                            <div className='terminal-input-cont'>
                                <p className='terminal-text'>root@dev-terminal:{currDir}$</p>
                                <input ref={nextInput} onKeyDown={handleInput} className='terminal-input' type='text' />
                            </div>
                        </>
                        ])

                        return;
                    }

                    setOutput((prev) => [...prev,
                    <>
                        <div className='terminal-error-cont'>
                            <p className='terminal-text'>Error: cat: {fileName}: Permission denied</p>
                        </div>
                        <div className='terminal-input-cont'>
                            <p className='terminal-text'>root@dev-terminal:{currDir}$</p>
                            <input ref={nextInput} onKeyDown={handleInput} className='terminal-input' type='text' />
                        </div>
                    </>
                    ])

                    return;
                } else {
                    setOutput((prev) => [...prev,
                    <>
                        <div className='terminal-error-cont'>
                            <p className='terminal-text'>Error: cat: {fileName}: No such file</p>
                        </div>
                        <div className='terminal-input-cont'>
                            <p className='terminal-text'>root@dev-terminal:{currDir}$</p>
                            <input ref={nextInput} onKeyDown={handleInput} className='terminal-input' type='text' />
                        </div>
                    </>
                    ])

                    return;
                }
            } else if (cleanVal.split(' ')[0] === 'echo') {
                setOutput((prev) => [...prev,
                <>
                    <div className='terminal-echo-cont'>
                        <p className='terminal-text'>{cleanVal.split(' ').slice(1).join(' ')}</p>
                    </div>
                    <div className='terminal-input-cont'>
                        <p className='terminal-text'>root@dev-terminal:{currDir}$</p>
                        <input ref={nextInput} onKeyDown={handleInput} className='terminal-input' type='text' />
                    </div>
                </>
                ])

                return;
            } else if (cleanVal.startsWith('./')) {
                const fileName = cleanVal.substring(2);

                if (currNode.fileNames.includes(fileName) && currNode[fileName].type === 'script') {
                    window.open(currNode[fileName].url, '_blank');

                    setOutput((prev) => [...prev,
                    <>
                        <div className='terminal-input-cont'>
                            <p className='terminal-text'>root@dev-terminal:{currDir}$</p>
                            <input ref={nextInput} onKeyDown={handleInput} className='terminal-input' type='text' />
                        </div>
                    </>
                    ])

                    return;
                }

                setOutput((prev) => [...prev,
                <>
                    <div className='terminal-error-cont'>
                        <p className='terminal-text'>Error: {fileName}: No such file</p>
                    </div>
                    <div className='terminal-input-cont'>
                        <p className='terminal-text'>root@dev-terminal:{currDir}$</p>
                        <input ref={nextInput} onKeyDown={handleInput} className='terminal-input' type='text' />
                    </div>
                </>
                ])

                return;
            } else if (null) {

            } else if (null) {

            } else if (null) {

            } else if (null) {

            } else if (null) {

            } else if (null) {

            } else if (null) {

            } else if (null) {

            } else if (null) {

            } else if (null) {

            } else if (null) {

            } else if (null) {

            }

            setOutput((prev) => [...prev,
            <>
                <div className='terminal-error-cont'>
                    <p className='terminal-text'>Error: command not found</p>
                </div>
                <div className='terminal-input-cont'>
                    <p className='terminal-text'>root@dev-terminal:{currDir}$</p>
                    <input ref={nextInput} onKeyDown={handleInput} className='terminal-input' type='text' />
                </div>
            </>
            ])
        }
    }

    const [output, setOutput] = useState([
        <div className='terminal-input-cont'>
            <p className='terminal-text'>root@dev-terminal:{currDir}$</p>
            <input ref={nextInput} onKeyDown={handleInput} className='terminal-input' type='text' />
        </div>
    ]);

    useEffect(() => {
        if (nextInput.current) {
            nextInput.current.focus();
        }
    }, [output]);

    useEffect(() => {
        if (currNode !== dirStructure['~']) {
            setOutput((prev) => [...prev,
            <div className='terminal-input-cont'>
                <p className='terminal-text'>root@dev-terminal:{currDir}$</p>
                <input ref={nextInput} onKeyDown={handleInput} className='terminal-input' type='text' />
            </div>
            ])
        }
    }, [currNode]);

    const handleHelp = () => {
        nextInput.current.disabled = true;
        nextInput.current = null;

        setOutput((prev) => [...prev,
        <>
            <div className='terminal-error-cont'>
                <p className='terminal-text'>
                    &nbsp;__&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.__
                    <br />
                    /&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\&nbsp;____&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;____&nbsp;&nbsp;____&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;____
                    <br />
                    \&nbsp;&nbsp;&nbsp;\/\/&nbsp;&nbsp;&nbsp;//&nbsp;__&nbsp;\|&nbsp;&nbsp;|&nbsp;_/&nbsp;___\/&nbsp;&nbsp;_&nbsp;\&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\_/&nbsp;__&nbsp;\
                    <br />
                    &nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/\&nbsp;&nbsp;___/|&nbsp;&nbsp;|_\&nbsp;&nbsp;\__(&nbsp;&nbsp;{"<"}_{">"}&nbsp;)&nbsp;&nbsp;Y&nbsp;Y&nbsp;&nbsp;\&nbsp;&nbsp;___/
                    <br />
                    &nbsp;&nbsp;\__/\&nbsp;&nbsp;/&nbsp;&nbsp;\___&nbsp;&nbsp;{">"}____/\___&nbsp;&nbsp;{">"}____/|__|_|&nbsp;&nbsp;/\___&nbsp;&nbsp;{">"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\/
                    <br />
                    <br />
                </p>
                <p className='terminal-text'>
                    You have entered the developer terminal (•_•)
                    <br />
                    <br />
                    Here are some commands you can use:
                    <br />
                    <br />
                    ls     - list directory contents
                    <br />
                    cd     - change directory, use `cd ~` to return home, use `cd ../` to revert directory
                    <br />
                    pwd    - print working directory
                    <br />
                    cat    - display content of files
                    <br />
                    echo   - display a line of text
                    <br />
                    bash   - execute a script using `./scriptName.sh`
                    <br />
                    clear  - clear the terminal
                    <br />
                    <br />
                </p>
            </div>
            <div className='terminal-input-cont'>
                <p className='terminal-text'>root@dev-terminal:{currDir}$</p>
                <input ref={nextInput} onKeyDown={handleInput} className='terminal-input' type='text' />
            </div>
        </>
        ])
    }

    const [view, setView] = useState(false);
    const navigate = useNavigate();

    return (
        <div className='terminal-page'>
            <BackgroundVideo />
            <div className='terminal-cont'>
                <div className='terminal-header'>
                    <div className='terminal-header-dropdowns'>
                        <div className={view ? 'terminal-header-dropdown active' : 'terminal-header-dropdown'}>
                            <div onClick={() => setView(!view)} className='terminal-header-dropdown-btn' style={{ borderTopLeftRadius: '10px' }}>
                                <p>Mode</p>
                            </div>
                            <div className='terminal-header-dropdown-menu'>
                                <p onClick={() => window.open("mailto:ryandhingra@gmail.com")} style={{ borderTop: '1px solid #39FF14' }} className='terminal-dropdown-text'>Client Mode</p>
                                <p onClick={() => navigate('/bio')} className='terminal-dropdown-text'>Employer Mode</p>
                                <p onClick={() => navigate('/')} className='terminal-dropdown-text'>Return Home</p>
                            </div>
                        </div>

                        <div className='terminal-header-dropdown'>
                            <div onClick={handleHelp} className='terminal-header-dropdown-btn'>
                                <p>Help</p>
                            </div>
                        </div>
                    </div>
                    <div className='terminal-header-title'>
                        <p className='terminal-header-title-text'>root@dev-terminal: {currDir}</p>
                    </div>
                    <div className='terminal-header-btns'>

                    </div>
                </div>
                <div className='terminal-body'>
                    {output}
                </div>
            </div>
        </div>
    );
}

export default Terminal;