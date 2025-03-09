import cpp from './assets/cpp.png';
import c from './assets/c.png';
import csharp from './assets/csharp.png';
import react from './assets/react.png';
import typescript from './assets/typescript.png';
import linux from './assets/linux.png';
import api from './assets/api.png';
import mysql from './assets/mysql.png';
import python from './assets/python.png';
import docker from './assets/docker.png'; 
import Me from './assets/ME.jpeg';




function Home() {
  return (<>
    <div className="container" id="main">
        <br/>
        <img src={Me} alt="Me gleaming cheesily" style={{ width: '125px', height: '125px', borderRadius: '50%' }} />
        <br/>
        <h1>Hi! I'm John!</h1>
        <br/>
        <br/>
        <p>A Software Developer from Dayton, OH.</p>
        <br/>
        
        <code style={{ fontSize: '24px'}}><p id="code">Let's code -&gt;</p></code>
        <p>
          <a href="https://www.linkedin.com/in/johnsdurham/" className="fa fa-linkedin fa-4x" style={{ width: '150px', height: '150px' }}>  </a>
          
          <a href="https://github.com/kilodelta8" className="fa fa-github fa-4x" style={{ width: '150px', height: '150px' }}>  </a>
          
          <a href="https://twitter.com/KiloDelta8" className="fa fa-twitter fa-4x" style={{ width: '150px', height: '150px'}}></a>  
        </p>
        
        
        <br/>
        <p id="about"> 
            Skilled and passionate Developer with a proven ability to design and develop
        TypeScript-based applications for web environments, C/C++ applications for Linux environments,
        and more. Practitioner in React, TypeScript, and various frameworks, libraries and programming 
        languages including C/C++, Python, and MySQL. Experienced in all stages of the software development 
        lifecycle, from concept to deployment. Enthusiastic about creating innovative solutions and adept 
        at working remotely with excellent communication, organization and leadership skills.
        </p>
        <br/>
        <p><b>NOTE:</b> I am in the process of changing this site from Flask to React and adding several other features and projects.</p>
        <br />
        <div>
            <img src={cpp} alt="C++ programming language" style={{width: '55px', height: '55px'}} />
            <img src={c} alt="C programming language" style={{width: '50px', height: '50px'}} />
            <img src={csharp} alt="C# programming language" style={{width: '50px', height: '50px'}} />
            <img src={react} alt="React framework" style={{width: '50px', height: '50px'}} />
            <img src={typescript} alt="Typescript programming language" style={{width: '45px', height: '45px'}} />
            <img src={linux} alt="Linux logo" style={{width: '50px', height: '50px'}} />
            <img src={api} alt="API logo" style={{width: '50px', height: '50px'}} />
            <img src={mysql} alt="MySQL logo" style={{width: '57px', height: '57px'}} />
            <img src={python} alt="Python programming language" style={{width: '50px', height: '50px'}} />
            <img src={docker} alt="Docker logo" style={{width: '50px', height: '50px'}} />
        </div>
    </div>
    <br />
    <a href="#top" id="top-link">Back To The Top</a>
  </>);
}
export default Home;