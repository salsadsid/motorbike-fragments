import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/image/salman-lg.png'
const MyPortfolio = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row">
                <img src={img} class="max-w-sm rounded-lg shadow-2xl" alt={img} />
                <div>
                    <h1 class="text-2xl font-bold">Salman Sadik Siddiquee</h1>
                    <h1 class="text-xl">salman.dnj@gmail.com</h1>
                    <h1 class="text-2xl font-bold">Educational Background:<br></br><span className='text-lg font-normal'> Bachelor of Science <br></br>Geography and Environmental Science<br></br>
                        Begum Rokeya University, Rangpur.<br></br>
                        Rangpur, Bangladesh
                    </span></h1>
                    <h1 class="text-2xl font-bold">Skill Highlights:<br></br><span className='text-lg font-normal'> Expertise: JavaScript, ES6, React.js, React Router, React Hook, SPA, HTML5, CSS3, Bootstrap-5, Tailwind CSS, Firebase.
                        <br></br>Familiar: Node.js, MongoDB, Express.js.
                        <br></br>
                        Design Skills: Adobe Illustrator, Adobe Photoshop.
                        <br></br>
                        Tools and Softwares:  Github, VS Code, Chrome dev tools, Heroku, Netlify, Firebase, Figma.<br></br>
                        Personal Skills: Leadership, Project Management, Team Work, Organization.
                    </span></h1>
                    <h1 class="text-2xl font-bold">Project:<br></br><span className='text-lg font-normal'>1. Genius Car Services <a href="https://genius-car-services-ddc8e.web.app/" target="_blank" className='btn btn-xs btn-secondary'>Live Website link</a>
                        <br></br>2. React Todo List <a href="https://react-todo-list-c6c18.web.app/" target="_blank" className='btn btn-xs btn-secondary'>Live Website link</a>
                        <br></br>
                        3. Generate copy enabled hex color and display toast <a href="https://salsadsid.github.io/generate-copy-enabled-hex-color-and-display-toast-message/" target="_blank" className='btn btn-xs btn-secondary'>Live Website link</a>
                    </span></h1>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;