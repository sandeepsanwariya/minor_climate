import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function TellTwoFriends() {
  React.useEffect(() => {
    Aos.init({duration:1500});
  }, [])
  return (
    <section className="save-the-world-component">
      <div className="grid">
        <div data-aos="fade-up" className="x">
          <div className="c t4 hero-level">
            <h3 className="subhead">
              Become a <strong>level 5 Climate Hero</strong>
            </h3>
          </div>
          <div data-aos="fade-up-left" className="c t8">
            <h4 className="headline">
              Ask two friends to complete these steps
            </h4>
            <ul className="meta">
              <li className="difficulty">Difficulty: Hard</li>
              <li className="time">Time: 90+ minutes</li>
              <li className="impact">Impact: World changing</li>
            </ul>
            <p>What you've done so far is incredible. Now we need to get everyone else to do it.</p>
            <p>
              If each person who completes these steps
              can get two friends to complete them too, we will change the
              world.
            </p>
            <p>
              If you really want to do this, call your friends, go and meet
              them with your laptop or phone, load this web page and ask them
              to complete these steps.</p>
            <p>You might be embarressed to do this, or you might think they won't receive your message positively. But more and more people want this change to happen. It's likely your friends want it just as much as you. But sometimes people need a friendly push.</p>

            <p>If you want to save the world, you might need to go outside of your confort zone. You might need to sell this idea to your friends and family and get them to buy in.</p>
              
              
            <p>
              You almost certainly don't want to do
              this I know. But if you really want to save the world, I hope
              that you will consider trying.
            </p>
            <p>Remember: you want to stop climate change. But it's not going to happen unless you go the extra mile. </p>
            <div className="cta">
              <a href="https://gmail.com" target="_blank">
                Ask them now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


