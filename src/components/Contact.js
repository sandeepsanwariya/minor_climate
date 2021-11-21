import React from "react";
import {motion} from  'framer-motion'
class About extends React.Component {
  render() {
    return (
      <motion.div
    initial={{x:"10vw",y:'100vh', opacity:0.0}} 
    animate={{x:"0vw",y:"0vh", opacity:1}}
    exit={{opacity:0}}
    transition={{type:"spring",stiffness:'120'}}
    >
      <main className="grid article single">
        <article className="x">
          <div className="c l7">
            <header className="entry-header">
              <h1>Contact</h1>
              <p>
                For all enquiries, please contact chris@arevolutionaryact.com.
              </p>
            </header>
            <div className="entry-content">
              <p>
                You can also contact Chris on social media using the links
                below:
              </p>
              <ul>
                <li>
                  <a href="https://twitter.com/ARevolutionary7">Twitter</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/arevolutionaryact/">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/A-Revolutionary-Act-100177155707169">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </main></motion.div>
    );
  }
}
export default About;
