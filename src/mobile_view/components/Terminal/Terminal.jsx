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
                'folderNames': ['ar_rackets', 'code_clash', 'tenno_trader', 'e_mersed', 'inventory_software', 'club_companion', 'underground_oasis', 'tank_wars'],
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
                        'content': "AR Rackets is a React-based website, powered by a Flask Python backend and CockroachDB. Specializing in badminton racket restringing and servicing, it also offers a diverse selection of new and used rackets available for customers to purchase."
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
                        'content': "Embark on an exhilarating coding adventure with Code-Clash, an upcoming online multiplayer game that promises to revolutionize the coding challenge experience. Engage in fierce 1v1 or collaborative 2v2 coding competitions, featuring diverse challenges like time trials, clean code contests, code efficiency battles, and timed debugging showdowns. Immerse yourself in a dynamic and competitive coding environment, where every keystroke counts. But Code-Clash isn't just about competition—it's a platform designed to boost your coding skills. Dive into learning modules crafted to enhance your programming prowess, making it an ideal space for both beginners and seasoned coders alike. Get ready to code, compete, and elevate your skills in the electrifying world of Code-Clash."
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
                        'content': "TennoTrader is a mobile IOS app for Warframe players, offering seamless tracking of buy and sell orders from warframe.market. With a user-friendly watchlist, users can monitor up to 5 items, receiving mobile notifications when prices hit their specified thresholds. TennoTrader enhances the trading experience for Warframe enthusiasts."
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
                        'content': "E-Mersed is an innovative gaming equipment ecommerce site, featuring a unique Virtual Setup Designer (VSD). Developed with React Three Fiber, the VSD is a cutting-edge 3D modeling software on the web that empowers users to customize their gaming setups in a dynamic and immersive 3D environment."
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
                        'content': "Inventory software created with Javay Swing. Allows for adding and deleting products, inventory search, as well as price, size and quantity updates. Also lets you have images for items and displays them in a nice viewable format along with all product details."
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
                        'content': "Add description here ********************************"
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
                        'content': "Add description here ********************************"
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
                        'content': "Add description here ********************************"
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
            <div className='mobile-terminal-ls-cont'>
                {currNode.folderNames.map((folder) => (
                    <p className='mobile-terminal-text'>{folder}/</p>
                ))}

                {currNode.fileNames.map((file) => (
                    <p className='mobile-terminal-text'>{file}</p>
                ))}
            </div>
            <div className='mobile-terminal-input-cont'>
                <p className='mobile-terminal-text'>root@dev-terminal:{currDir}$</p>
                <input ref={nextInput} onKeyDown={handleInput} className='mobile-terminal-input' type='text' />
            </div>
        </>
        ])
    }

    const handleCd = async (dir) => {
        console.log("dir:", dir);
        if (dir === '~') {
            if (currDir === '~') {
                setOutput((prev) => [...prev,
                <div className='mobile-terminal-input-cont'>
                    <p className='mobile-terminal-text'>root@dev-terminal:{currDir}$</p>
                    <input ref={nextInput} onKeyDown={handleInput} className='mobile-terminal-input' type='text' />
                </div>
                ])
            } else {
                setCurrDir((prev) => '~');
                await sleep(0);
                setCurrNode((prev) => dirStructure['~']);
            }
        } else if (currNode.folderNames.includes(dir)) {
            setCurrDir((prev) => prev + '/' + dir);
            await sleep(0);
            setCurrNode((prev) => currNode[dir]);
        } else {
            setOutput((prev) => [...prev,
            <>
                <div className='mobile-terminal-error-cont'>
                    <p className='mobile-terminal-text'>Error: cd: {dir}: No such directory</p>
                </div>
                <div className='mobile-terminal-input-cont'>
                    <p className='mobile-terminal-text'>root@dev-terminal:{currDir}$</p>
                    <input ref={nextInput} onKeyDown={handleInput} className='mobile-terminal-input' type='text' />
                </div>
            </>
            ])
        }
    }

    const handleInput = async (e) => {
        if (e.key === 'Enter') {
            nextInput.current.disabled = true;
            nextInput.current = null;

            console.log("Terminal Input:", e.target.value);
            const cleanVal = e.target.value.trim();
            console.log("Terminal Input:", cleanVal);

            if (cleanVal === '') {
                setOutput((prev) => [...prev,
                <div className='mobile-terminal-input-cont'>
                    <p className='mobile-terminal-text'>root@dev-terminal:{currDir}$</p>
                    <input ref={nextInput} onKeyDown={handleInput} className='mobile-terminal-input' type='text' />
                </div>
                ])

                return;
            } else if (cleanVal === 'clear') { //FIXME: This doesn't clear the terminal
                setOutput((prev) => [])
                await sleep(0);
                setOutput([
                    <div className='mobile-terminal-input-cont'>
                        <p className='mobile-terminal-text'>root@dev-terminal:{currDir}$</p>
                        <input ref={nextInput} onKeyDown={handleInput} className='mobile-terminal-input' type='text' />
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
                        <div className='mobile-terminal-error-cont'>
                            <p className='mobile-terminal-text'>Error: cd: expected argument</p>
                        </div>
                        <div className='mobile-terminal-input-cont'>
                            <p className='mobile-terminal-text'>root@dev-terminal:{currDir}$</p>
                            <input ref={nextInput} onKeyDown={handleInput} className='mobile-terminal-input' type='text' />
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
                    <div className='mobile-terminal-pwd-cont'>
                        <p className='mobile-terminal-text'>{currDir}</p>
                    </div>
                    <div className='mobile-terminal-input-cont'>
                        <p className='mobile-terminal-text'>root@dev-terminal:{currDir}$</p>
                        <input ref={nextInput} onKeyDown={handleInput} className='mobile-terminal-input' type='text' />
                    </div>
                </>
                ])

                return;
            } else if (cleanVal.split(' ')[0] === 'cat') {
                const args = cleanVal.split(' ');
                if (args.length !== 2) {
                    setOutput((prev) => [...prev,
                    <>
                        <div className='mobile-terminal-error-cont'>
                            <p className='mobile-terminal-text'>Error: cat: expected a single argument</p>
                        </div>
                        <div className='mobile-terminal-input-cont'>
                            <p className='mobile-terminal-text'>root@dev-terminal:{currDir}$</p>
                            <input ref={nextInput} onKeyDown={handleInput} className='mobile-terminal-input' type='text' />
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
                            <div className='mobile-terminal-cat-cont'>
                                <p className='mobile-terminal-cat-text'>{currNode[fileName].content}</p>
                            </div>
                            <div className='mobile-terminal-input-cont'>
                                <p className='mobile-terminal-text'>root@dev-terminal:{currDir}$</p>
                                <input ref={nextInput} onKeyDown={handleInput} className='mobile-terminal-input' type='text' />
                            </div>
                        </>
                        ])

                        return;
                    }

                    setOutput((prev) => [...prev,
                    <>
                        <div className='mobile-terminal-error-cont'>
                            <p className='mobile-terminal-text'>Error: cat: {fileName}: Permission denied</p>
                        </div>
                        <div className='mobile-terminal-input-cont'>
                            <p className='mobile-terminal-text'>root@dev-terminal:{currDir}$</p>
                            <input ref={nextInput} onKeyDown={handleInput} className='mobile-terminal-input' type='text' />
                        </div>
                    </>
                    ])

                    return;
                } else {
                    setOutput((prev) => [...prev,
                    <>
                        <div className='mobile-terminal-error-cont'>
                            <p className='mobile-terminal-text'>Error: cat: {fileName}: No such file</p>
                        </div>
                        <div className='mobile-terminal-input-cont'>
                            <p className='mobile-terminal-text'>root@dev-terminal:{currDir}$</p>
                            <input ref={nextInput} onKeyDown={handleInput} className='mobile-terminal-input' type='text' />
                        </div>
                    </>
                    ])

                    return;
                }
            } else if (cleanVal.split(' ')[0] === 'echo') {
                setOutput((prev) => [...prev,
                <>
                    <div className='mobile-terminal-echo-cont'>
                        <p className='mobile-terminal-text'>{cleanVal.split(' ').slice(1).join(' ')}</p>
                    </div>
                    <div className='mobile-terminal-input-cont'>
                        <p className='mobile-terminal-text'>root@dev-terminal:{currDir}$</p>
                        <input ref={nextInput} onKeyDown={handleInput} className='mobile-terminal-input' type='text' />
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
                        <div className='mobile-terminal-input-cont'>
                            <p className='mobile-terminal-text'>root@dev-terminal:{currDir}$</p>
                            <input ref={nextInput} onKeyDown={handleInput} className='mobile-terminal-input' type='text' />
                        </div>
                    </>
                    ])

                    return;
                }

                setOutput((prev) => [...prev,
                <>
                    <div className='mobile-terminal-error-cont'>
                        <p className='mobile-terminal-text'>Error: {fileName}: No such file</p>
                    </div>
                    <div className='mobile-terminal-input-cont'>
                        <p className='mobile-terminal-text'>root@dev-terminal:{currDir}$</p>
                        <input ref={nextInput} onKeyDown={handleInput} className='mobile-terminal-input' type='text' />
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
                <div className='mobile-terminal-error-cont'>
                    <p className='mobile-terminal-text'>Error: command not found</p>
                </div>
                <div className='mobile-terminal-input-cont'>
                    <p className='mobile-terminal-text'>root@dev-terminal:{currDir}$</p>
                    <input ref={nextInput} onKeyDown={handleInput} className='mobile-terminal-input' type='text' />
                </div>
            </>
            ])
        }
    }

    const [output, setOutput] = useState([
        <div className='mobile-terminal-input-cont'>
            <p className='mobile-terminal-text'>root@dev-terminal:{currDir}$</p>
            <input ref={nextInput} onKeyDown={handleInput} className='mobile-terminal-input' type='text' />
        </div>
    ]);

    useEffect(() => {
        if (nextInput.current) {
            nextInput.current.focus();
        }
    }, [output]);

    useEffect(() => {
        console.log("currNode:", currNode);
        if (currNode !== dirStructure['~']) {
            setOutput((prev) => [...prev,
            <div className='mobile-terminal-input-cont'>
                <p className='mobile-terminal-text'>root@dev-terminal:{currDir}$</p>
                <input ref={nextInput} onKeyDown={handleInput} className='mobile-terminal-input' type='text' />
            </div>
            ])
        }
    }, [currNode]);

    const handleHelp = () => {
        nextInput.current.disabled = true;
        nextInput.current = null;

        setOutput((prev) => [...prev,
        <>
            <div className='mobile-terminal-error-cont'>
                <p className='mobile-terminal-text' style={{fontSize: '2.9vw'}}>
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
                <p className='mobile-terminal-text'>
                    You have entered the developer terminal (•_•)
                    <br />
                    <br />
                    Here are some commands you can use:
                    <br />
                    <br />
                    ls     - list directory contents
                    <br />
                    cd     - change directory, use `cd ~` to return to the home directory
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
            <div className='mobile-terminal-input-cont'>
                <p className='mobile-terminal-text'>root@dev-terminal:{currDir}$</p>
                <input ref={nextInput} onKeyDown={handleInput} className='mobile-terminal-input' type='text' />
            </div>
        </>
        ])
    }

    const [view, setView] = useState(false);
    const navigate = useNavigate();

    return (
        <div className='mobile-terminal-page'>
            <BackgroundVideo />
            <div className='mobile-terminal-cont'>
                <div className='mobile-terminal-header'>
                    <div className='mobile-terminal-header-dropdowns'>
                        <div className='mobile-terminal-header-dropdown'>
                            <div onClick={handleHelp} className='mobile-terminal-header-dropdown-btn'>
                                <p>Help</p>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-terminal-header-title'>
                        <p className='mobile-terminal-header-title-text'>root@dev-terminal: {currDir}</p>
                    </div>
                    <div className='mobile-terminal-header-btns'>
                        
                    </div>
                </div>
                <div className='mobile-terminal-body'>
                    {output}
                </div>
            </div>
        </div>
    );
}

export default Terminal;