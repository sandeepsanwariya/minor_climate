import React,{useState,useEffect, Fragment} from "react";
import { HashLink } from 'react-router-hash-link';

const ElectricCars = () =>{

    const [data, setData] = useState({user:[]});

    useEffect(() => {
      var url = 'https://script.google.com/macros/s/AKfycbyR8Srz7is-HX-5C-K8UMXSyK5APFSvTQuYJgfTPA8FLEA-ByfcxCfqvG3fygL-UGEUig/exec'

        fetch(url)
        .then(response => response.json())
        .then(data => setData(data));

    }, []);
  

    return(
        <>
            
            <main className="article campaign electric-cars">
                <header className="entry-header high-impact-viewport x">
                    <div className="text c l6">
                        <h1>Longest Range Electric Cars, Ordered by Range (in Miles)</h1>
                        <p>Probably the most useful page on the internet for anyone who wants to buy an electric car right now.</p>
                        <p className='cta with-icon with-pulsing-icon'>
                            <HashLink to='#business-rankings'>View the cars</HashLink>
                        </p>
                        <div className='mouse_scroll'>
                            <div className='mouse'>
                            <div className='wheel'></div>
                            </div>
                            <div>
                            <span className='m_scroll_arrows unu'></span>
                            <span className='m_scroll_arrows doi'></span>
                            <span className='m_scroll_arrows trei'></span>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="grid entry-content">
                    <div className="x product-tables electric-cars" id="business-rankings">
                        <div className="c l12">
                        
                            {data.user.map((object, i) => (
            
                                <section key={i+'ecd'}>
                                    <h2>{object['Car (Name And Model)']}</h2>
                                    <img alt={object['Car (Name And Model)']} src={object['Image URL']} />
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>Range (Miles)</td>
                                                <td>Quick charge</td>
                                                <td>Price (&pound;)</td>
                                                <td>Price (&#36;)</td>
                                                <td>Lease (&pound;)</td>
                                                <td>Lease (&#36;)</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="miles">{object['Range']}</td>
                                                <td>{object['Quick charge time and range']}</td>
                                                <td className="pounds">{object['Price In GB Pounds']}</td>
                                                <td className="dollars">{object['Price In US Dollars']}</td>
                                                <td className="pounds">{object['Car lease price per month UK']}</td>
                                                <td className="dollars">{object['Car lease price per month (US)']}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="x">
                                        <div className="c l6 buy-car">
                                            <h3>View buying options</h3>
                                            <div class="buy cta"><a href={object['Website link uk']}>Customize your {object['Car (Name And Model)']}</a></div>
                                        </div>
                                        <div className="c l6 buy-car">
                                            <h3>View leasing options</h3>
                                            <div class="buy cta"><a href={object['Car lease link uk']}>Customize your {object['Car (Name And Model)']}</a></div>
                                        </div>
                                    </div>
                                </section>
                            
                                ))}

                            </div>
                        </div>
                    </div>
                </main>
        </>
    )
}
export default ElectricCars