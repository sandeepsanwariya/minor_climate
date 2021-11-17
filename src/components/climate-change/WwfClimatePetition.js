import React from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'
export default function WwfClimatePetition() {
    React.useEffect(() => {
        Aos.init({duration:1500});
      }, [])
    return (
        <section data-aos="fade-up">
            <h4>Sign this WWF petition</h4>
            <p>If everyone in the country signed this petition the government would be forced to make fighting climate change a top priority.</p>
            <ul data-aos="fade-up-left" className="meta">
                <li className="difficulty">Difficulty: Easy</li>
                <li className="time">Time: 2 minutes</li>
                <li className="impact">Impact: Significant</li>
            </ul>
            <div className="cta"><a href="">Sign the petition</a></div>
        </section>
    );
}
