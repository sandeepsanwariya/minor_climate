import React from "react";

const MediaMonitor = () => {

      return (
        <main className="media-monitor">
            <article>
                <header className="entry-header">
                    <h1>Media Monitor</h1>
                    <p>How bias is the news?</p>
                    {/*<p>How is the media <span class="line-through">brainwashing you</span> <span class="line-through">manipulating your thoughts</span> informing you?</p>*/}
                </header>
                <section className="sentiment-grid topics-sentiment">
                    <header>
                        <h2>
                            <small>Bias Scores for</small> 
                            <select>
                                <option>Megan Markle</option>
                                <option>immigration</option>
                                <option>climate change</option>
                                <option>Donald Trump</option>
                                <option>Boris Johnson</option>
                                <option>Brexit</option>
                            </select>
                        </h2>
                        <p>Select a topic above to see how positively/negatively news publications talk about thpse topics.</p>
                    </header>
                    <div className="grid-narrow quick-stats">
                        <ul className="x">
                            <li className="c l4">
                                <p><small>Mentioned most by</small> <strong>[news site name]</strong> <small>(x times per day average)</small></p>
                            </li>
                            <li className="c l4">
                                <p><strong>[most used word]</strong> is the most used word</p>
                            </li>
                            <li className="c l4">
                                <p><small>Mentioned least by</small> <strong>[news site name]</strong> <small>(x times per day average)</small></p>
                            </li>
                            <li className="c l4">
                                <p><strong>[news site name]</strong> <small>was the most negative (% negative words)</small></p>
                            </li>
                            <li className="c l4">
                                <p><strong>[news site name]</strong> <small>was the most positive (% positive words)</small></p>
                            </li>
                            <li className="c l4">
                                <p><strong>[news site name]</strong> <small>was the most neutral (% positive or negative words)</small></p>
                            </li>
                        </ul>
                    </div>
                    <div className="sentiment-charts-grid">
                        <ol className="x">
                            <li className="c t4 l3">
                                <h2>BBC</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Avg daily mentions</td>
                                            <td>% mentions</td>
                                            <td>
                                                Sentiment Score 
                                                <span className="helper">?</span>
                                                
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>6</td>
                                            <td>2%</td>
                                            <td data-sentiment="45">45</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                Insert Chart here
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <div className="cta explore-cta"><a href="">Explore</a></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li className="c t4 l3">
                                <h2>BBC</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Avg daily mentions</td>
                                            <td>% mentions</td>
                                            <td>
                                                Sentiment Score 
                                                <span className="helper">?</span>
                                                
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>6</td>
                                            <td>2%</td>
                                            <td data-sentiment="45">45</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                Insert Chart here
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <div className="cta explore-cta"><a href="">Explore</a></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li className="c t4 l3">
                                <h2>BBC</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Avg daily mentions</td>
                                            <td>% mentions</td>
                                            <td>
                                                Sentiment Score 
                                                <span className="helper">?</span>
                                                
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>6</td>
                                            <td>2%</td>
                                            <td data-sentiment="45">45</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                Insert Chart here
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <div className="cta explore-cta"><a href="">Explore</a></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li className="c t4 l3">
                                <h2>BBC</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Avg daily mentions</td>
                                            <td>% mentions</td>
                                            <td>
                                                Sentiment Score 
                                                <span className="helper">?</span>
                                                
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>6</td>
                                            <td>2%</td>
                                            <td data-sentiment="45">45</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                Insert Chart here
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <div className="cta explore-cta"><a href="">Explore</a></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li className="c t4 l3">
                                <h2>BBC</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Avg daily mentions</td>
                                            <td>% mentions</td>
                                            <td>
                                                Sentiment Score 
                                                <span className="helper">?</span>
                                                
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>6</td>
                                            <td>2%</td>
                                            <td data-sentiment="45">45</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                Insert Chart here
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <div className="cta explore-cta"><a href="">Explore</a></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li className="c t4 l3">
                                <h2>BBC</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Avg daily mentions</td>
                                            <td>% mentions</td>
                                            <td>
                                                Sentiment Score 
                                                <span className="helper">?</span>
                                                
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>6</td>
                                            <td>2%</td>
                                            <td data-sentiment="45">45</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                Insert Chart here
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <div className="cta explore-cta"><a href="">Explore</a></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li className="c t4 l3">
                                <h2>BBC</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Avg daily mentions</td>
                                            <td>% mentions</td>
                                            <td>
                                                Sentiment Score 
                                                <span className="helper">?</span>
                                                
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>6</td>
                                            <td>2%</td>
                                            <td data-sentiment="45">45</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                Insert Chart here
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <div className="cta explore-cta"><a href="">Explore</a></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li className="c t4 l3">
                                <h2>BBC</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Avg daily mentions</td>
                                            <td>% mentions</td>
                                            <td>
                                                Sentiment Score 
                                                <span className="helper">?</span>
                                                
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>6</td>
                                            <td>2%</td>
                                            <td data-sentiment="45">45</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                Insert Chart here
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <div className="cta explore-cta"><a href="">Explore</a></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li className="c t4 l3">
                                <h2>BBC</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Avg daily mentions</td>
                                            <td>% mentions</td>
                                            <td>
                                                Sentiment Score 
                                                <span className="helper">?</span>
                                                
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>6</td>
                                            <td>2%</td>
                                            <td data-sentiment="45">45</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                Insert Chart here
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <div className="cta explore-cta"><a href="">Explore</a></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li className="c t4 l3">
                                <h2>BBC</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Avg daily mentions</td>
                                            <td>% mentions</td>
                                            <td>
                                                Sentiment Score 
                                                <span className="helper">?</span>
                                                
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>6</td>
                                            <td>2%</td>
                                            <td data-sentiment="45">45</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                Insert Chart here
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <div className="cta explore-cta"><a href="">Explore</a></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li className="c t4 l3">
                                <h2>BBC</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Avg daily mentions</td>
                                            <td>% mentions</td>
                                            <td>
                                                Sentiment Score 
                                                <span className="helper">?</span>
                                                
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>6</td>
                                            <td>2%</td>
                                            <td data-sentiment="45">45</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                Insert Chart here
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <div className="cta explore-cta"><a href="">Explore</a></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li className="c t4 l3">
                                <h2>BBC</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Avg daily mentions</td>
                                            <td>% mentions</td>
                                            <td>
                                                Sentiment Score 
                                                <span className="helper">?</span>
                                                
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>6</td>
                                            <td>2%</td>
                                            <td data-sentiment="45">45</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                Insert Chart here
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <div className="cta explore-cta"><a href="">Explore</a></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li className="c t4 l3">
                                <h2>BBC</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Avg daily mentions</td>
                                            <td>% mentions</td>
                                            <td>
                                                Sentiment Score 
                                                <span className="helper">?</span>
                                                s
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>6</td>
                                            <td>2%</td>
                                            <td data-sentiment="45">45</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                Insert Chart here
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <div className="cta explore-cta"><a href="">Explore</a></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li className="c t4 l3">
                                <h2>BBC</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Avg daily mentions</td>
                                            <td>% mentions</td>
                                            <td>
                                                Sentiment Score 
                                                <span className="helper">?</span>
                                                
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>6</td>
                                            <td>2%</td>
                                            <td data-sentiment="45">45</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                Insert Chart here
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <div className="cta explore-cta"><a href="">Explore</a></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li className="c t4 l3">
                                <h2>BBC</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Avg daily mentions</td>
                                            <td>% mentions</td>
                                            <td>
                                                Sentiment Score 
                                                <span className="helper">?</span>
                                                
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>6</td>
                                            <td>2%</td>
                                            <td data-sentiment="45">45</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                Insert Chart here
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <div className="cta explore-cta"><a href="">Explore</a></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li className="c t4 l3">
                                <h2>BBC</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Avg daily mentions</td>
                                            <td>% mentions</td>
                                            <td>
                                                Sentiment Score 
                                                <span className="helper">?</span>
                                                
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>6</td>
                                            <td>2%</td>
                                            <td data-sentiment="45">45</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                Insert Chart here
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <div className="cta explore-cta"><a href="">Explore</a></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li className="c t4 l3">
                                <h2>BBC</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Avg daily mentions</td>
                                            <td>% mentions</td>
                                            <td>
                                                Sentiment Score 
                                                <span className="helper">?</span>
                                                
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>6</td>
                                            <td>2%</td>
                                            <td data-sentiment="45">45</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                Insert Chart here
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <div className="cta explore-cta"><a href="">Explore</a></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li className="c t4 l3">
                                <h2>BBC</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Avg daily mentions</td>
                                            <td>% mentions</td>
                                            <td>
                                                Sentiment Score 
                                                <span className="helper">?</span>
                                                
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>6</td>
                                            <td>2%</td>
                                            <td data-sentiment="45">45</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                Insert Chart here
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <div className="cta explore-cta"><a href="">Explore</a></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                        </ol>
                        <div className="help">
                            <h3>Sentiment score</h3>
                            <p>The number of negative words associated with the topic is added together and subtracted from the number of positive words. The resulting number is turned into a range on a scale of negative 100 to positive 100. A score of positive 100 denotes the highest positive sentiment and means the news outlet only writes positive content about the topic.</p>
                        </div>
                    </div>
                </section>
                <section className="topics">
                    <h2>Explore more topics</h2>
                    <ul>

                    </ul>
                </section>
            </article>
        </main>
      );
  }

export default MediaMonitor