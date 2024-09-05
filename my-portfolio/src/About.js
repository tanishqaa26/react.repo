import React from "react";

const About = () => {
    return (
        <article>
            <header>
                <h2>About Me</h2>
                <p>Persistent problem-solver, turning challenges into triumphs, one line of code at a time.</p>
            </header>
            <section id="Projects">
                <h2>Projects</h2>
                <ul>
                <li>
            <h3>Project 1: Calculator using Python</h3>
            <p>Created a basic calculator using python that can do multiple operations together from the input given by the user.</p>
          </li>
          <li>
            <h3>Project 2: To-Do App using Python</h3>
            <p>An app that can add, list, delete and mark tasks as resolved according to the user's need.</p>
          </li>
          <li>
            <h3>Project 3: Animal Avenue</h3>
            <p>
              A web-application created by using React.js and machine learning to make lives of furry friends easier. By using animal avenue, the user can find vets nearby, buy animal products, donate for animal shelters and apply for adoption.
            </p>
          </li>
          <li>
            <h3>Project 4: Nirog Bharat - A Virtual Hospital</h3>
            <p>
              A mobile app created using flutter and machine learning for people to easily get hands on best doctor advices and do video chat for urgent consultations.
              <br />
              Frontend: Flutter
              <br />
              Backend: Node.js
              <br />
              Database: MongoDB, Hosted on Azure
            </p>
          </li>
        </ul> 
        </section>
     </article>
    );
};

export default About;