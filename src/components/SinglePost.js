import React from "react";
import SaveTheWorldClimateChange from "./SaveTheWorldClimateChange";
import {motion} from  'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos.css'
const SinglePost = () => {
  React.useEffect(() => {
    Aos.init({duration:1500});
  }, [])
  return (
    <motion.div
    initial={{x:"50vw",y:'00vh', opacity:0.0}} 
    animate={{x:"0vw",y:"0vh", opacity:1}}
    exit={{opacity:0}}
    transition={{type:"spring",stiffness:'120'}}
    >
    <main className="article about feature-article">
      <header className="entry-header">
        <div data-aos="fade-up" class="grid">
          <div className="x">
            <div data-aos="fade-up-left" className="c l7">
              <h1 class="headline">
                Our future is a product of the choices we make in the present
                moment.
              </h1>
              <p class="standfirst">
                You can either choose to make a better world, or you can accept
                the world that others choose for you. You make that choice
                constantly, without realising.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div data-aos="fade-up" class="grid">
        <div className="x">
          <div className="c l7 entry-content">
            <p data-aos="fade-up-left">
              You might believe you care about the world, but unless you’re
              actively doing things to change the world, you can’t make that
              claim.
            </p>
            <p data-aos="fade-up-right">
              It’s not enough to say you care. It’s not enough to vote. It’s not
              enough to be a nice person. If you really care about the world you
              have to become a leader so you can steer the decisions we make.
            </p>
            <p data-aos="fade-up-left">
              Because it’s not morally acceptable to say the leaders of the
              world are doing a bad job while you’re spending your nights glued
              to your TV, staring like a zombie, doing nothing to corroborate
              your claims of morality.
            </p>
            <p data-aos="fade-up-right">
              Those nights you’re spending watching Netflix become years while
              your apathy ticks along to the rhythm of your routine and you fail
              to appreciate the profound significance of each passing moment.
              Before you know it you’ve filled every last gap in your attention
              with ever more meaningless distractions until you find you’ve
              created a lifetime of perpetual procrastinations; each one akin to
              another swipe of Death’s scythe as it strikes carelessly at the
              dreams you once cherished.{" "}
            </p>
            <p data-aos="fade-up-left">
              It’s not up to someone else to make those dreams come true. It’s
              up to you. But the paradox of life is that when you’re young you
              feel like you’re going to live forever. And before you know what
              happened, you’re old. And then you realize: there are no second
              chances. Not of a lifetime. Not of a single moment. Because every
              moment matters. Every decision is a brushstroke upon the canvas
              that is the present moment. We are painting always. And the marks
              we leave are irreversibly ingrained into eternity.
            </p>
            <p data-aos="fade-up-right">
              The future is a product of the decisions we make in the present
              moment. We could all be living in a beautiful world. But for that
              to be true we have to make the right decisions now. That means{" "}
              <em>you</em>. Today. Now. Below is a good place to start:
            </p>
          </div>
        </div>
      </div>
      <div className="save-the-world-components">
        <SaveTheWorldClimateChange data-aos="fade-up" />
      </div>
    </main></motion.div>
  );
};

export default SinglePost;
