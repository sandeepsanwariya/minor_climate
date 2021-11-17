import React from "react";

class WwfClimatePetition extends React.Component {
   
    render() {
        return (
            <section>
                <h4>Sign this WWF petition</h4>
                <p>If everyone in the country signed this petition the government would be forced to make fighting climate change a top priority.</p>
                <ul className="meta">
                    <li className="difficulty">Difficulty: Easy</li>
                    <li className="time">Time: 2 minutes</li>
                    <li className="impact">Impact: Significant</li>
                </ul>
                <div className="cta"><a href="">Sign the petition</a></div>
            </section>
        );
    }
}
export default WwfClimatePetition;

