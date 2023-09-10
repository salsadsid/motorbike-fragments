import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/image/salsadsid.jpg'
const MyPortfolio = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt={img} />
                <div>
                    <h1 className="text-2xl font-bold">Salman Sadik Siddiquee</h1>
                    <h1 className="text-xl font-light">salman.dnj@gmail.com</h1>
                    
                    <h1 className="text-2xl font-bold">Skill Highlights: <br></br><span className='text-lg font-normal'> Expertise: </span><span className="text-lg font-light">JavaScript, ES6, React.js, Redux, React Router, React Hooks, SPA, Node.js, Express.js,
MongoDB, Mongoose, HTML5, CSS3, Bootstrap, Tailwind CSS.</span>
<br></br><span className='text-lg font-normal'> Familier: </span><span className="text-lg font-light">Material UI, React Native.</span>
<br></br><span className='text-lg font-normal'> Tools: </span><span className="text-lg font-light">Github, VS Code, Firebase, Chrome dev tools, Heroku, Vercel, Render, Netlify, Figma,
Adobe Illustrator, Adobe Photoshop.
</span><br></br><span className='text-lg font-normal'>
                        Personal Skills: </span><span className="text-lg font-light">Leadership, Project Management, Team Work, Organization.</span>
                    </h1>
                    <h1 className="text-2xl font-bold">Educational Background:<br></br><span className='text-lg font-light'> Bachelor of Science <br></br>Geography and Environmental Science<br></br>
                        Begum Rokeya University, Rangpur.<br></br>
                        Rangpur, Bangladesh
                    </span></h1>
                    <h1 className="text-2xl font-bold">Github:<br></br> <a href="https://github.com/salsadsid" target="_blank" className='btn btn-xs btn-primary'>Go to profile</a>
                        </h1>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;