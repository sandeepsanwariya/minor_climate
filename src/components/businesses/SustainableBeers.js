import React from 'react';
import SaveTheWorldClimateChange from '../SaveTheWorldClimateChange';
import { HashLink } from 'react-router-hash-link';

import Aos from 'aos'
import 'aos/dist/aos.css'
const SustainableBeers = () => {
  React.useEffect(() => {
    Aos.init({duration:1500});
    window.scrollTo(0, 0);

  }, [])
  return (
   
    <main className='article campaign beers feature-article'>
      <header className='entry-header high-impact-viewport x'>
        <div className='text c l6'>
          <h1 data-aos="fade-up"  className='headline'>
            Sustainable Beers: Beers that Don't Use Fossil Fuels
          </h1>
          <p data-aos="fade-up"  className='standfirst'>
            Want to stop climate change? Like drinking beer? Combine the two by
            only drinking beers that are made without using fossil fuels. It's a
            win-win for everyone!
          </p>
          <p data-aos="fade-up"  className='cta with-icon with-pulsing-icon'>
            <HashLink to='#business-rankings'>View the beers</HashLink>
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
      <div className='grid'>
        <div className='x'>
          <div className='c l7 entry-content'>
            <div className='business-rankings' id='business-rankings'>
              <section data-aos="fade-up" >
                <h2>
                  <span>Winner</span> 1. BrewDog: Carbon negative
                </h2>
                <img src='./assets/img/businesses/brewdog.jpg' alt='Brewdog' />
                <p data-aos="fade-up" >
                  The Scottish brewery now removes twice as much carbon as it
                  emmits into the atmosphere, s there's no way you'll feel
                  guilty about drinking a Brewdog. In fact you'll be reversing
                  climate change with every beer you drink!
                </p>
                <p data-aos="fade-up" >
                  Brewdog have also bought 9,308 acres of Scottish Highlands,
                  where they're planting trees and restoring the peatland that's
                  important for storing carbon.
                </p>
              </section>
              <section data-aos="fade-up" >
                <h2>2. Gloucester Brewery: Carbon neutral in 2022</h2>
                <img
                  src='./assets/img/businesses/gloucester.jpg'
                  alt='Gloucester Brewery'
                />
                <p data-aos="fade-up" >
                  A much lesser know brewery called Gloucester Brewery are going
                  carbon neutral in 2022. They have already started using waste
                  bread to brew beers and have a vegan range.
                </p>
              </section>
              <section data-aos="fade-up" >
                <h2>3. Anderson Valley Brewing Company</h2>
                <img
                  src='./assets/img/businesses/anderson_valley.jpg'
                  alt='Anderson Valley Beer'
                />
                <p data-aos="fade-up" >
                  Anderson Valley uses solar energy to power more than 40% of
                  its energy. They treat 100% of wastewater and reuse it as
                  irrigation for their pastures and farm in an effort to help
                  the California drought. They also use spent hops as a natural
                  fertilizer and distribute spent grain to local cows. In
                  addition, Anderson Valley is also in the process of solely
                  using recycled cardboard packaging and 100% aluminum cans.
                  With this effort, they will be able to ship more packages at a
                  time, reducing the carbon impact of their packaging.
                </p>
              </section>
              <section data-aos="fade-up" >
                <h2>4. New Belgium Brewing Company</h2>
                <img
                  src='./assets/img/businesses/New-Belgium.jpg'
                  alt='New Belgium'
                />
                <p data-aos="fade-up" >
                  New Belgium is a Certified B-Corp company committed to social
                  and environmental change. They are the first wind-powered
                  brewery and have invested in multiple technologies for more
                  efficient use of energy. New Belgium's beer 'Fat Tire' is the
                  first certified carbon-neutral beer in the U.S. They're on a
                  mission to make all their beers carbon-neutral by 2030.
                </p>
                <p data-aos="fade-up" >More of their climate commitments include:</p>
                <ul>
                  <li>
                    Working with other brewing companies to improve recycling.
                  </li>
                  <li>
                    Founding the Brewers Association Sustainability
                    Subcommittee.{' '}
                  </li>
                  <li>
                    Urging the city of Fort Collins to establish a renewable
                    energy goal by 2030. 
                  </li>
                </ul>
              </section>
              <section data-aos="fade-up" >
                <h2>5. Brooklyn Brewery</h2>
                <img
                  src='./assets/img/businesses/Brooklyn-Beer.jpg'
                  alt='Brooklyn Beer'
                />
                <p data-aos="fade-up" >
                  Brooklyn Brewery has been implementing sustainable practices
                  since 1996 when they began reducing energy demand and switched
                  to wind energy for all their processes. Their sustainable
                  initiatives have continued to grow over the years, finding new
                  ways to save energy and reduce waste.  In 2016, they planted
                  375 acres of trees to offset 1,500 tons of carbon dioxide.
                  Their contribution offset the carbon emitted from their
                  Williamsburg operations, including the electricity and natural
                  gas used to produce the cases for their bottles and barrel
                  kegs.  Read more about their sustainability initiatives here!
                </p>
              </section>
              <section data-aos="fade-up" >
                <h2>6. Ninkasi Brewery</h2>
                <img
                  src='./assets/img/businesses/Ninkasi-Brewery.jpg'
                  alt='Ninkasi Brewery'
                />
                <p data-aos="fade-up" >
                  Ninkasi Brewery is community-driven and believes in using its
                  beer to help others. With their Beer Is Love program, they
                  donate to local nonprofit organizations dedicated to making
                  their community better. Ninkasi Brewery is among one of the
                  many beer companies that use solar power to produce their
                  beers.  They've won three Good Food Awards since 2015 because
                  of their commitment to social responsibility and sustainable
                  business practices. 
                </p>
              </section>
              <section data-aos="fade-up" >
                <h2>7. Hops and Grain</h2>
                <img
                  src='./assets/img/businesses/Hops-and-Grain.jpg'
                  alt='Hops and Grain Mosaic beer'
                />
                <p data-aos="fade-up" >
                  Hops and Grain focus on crafting their beer in an
                  environmentally responsible way. They recycle their spent
                  grain by making them into dog treats, source their ingredients
                  from local and green providers, and donate 1% of their profits
                  to environmental causes. 
                </p>
              </section>
              <section data-aos="fade-up" >
                <h2>8. Alaskan Brewing</h2>
                <img
                  src='./assets/img/businesses/Alaskan.jpg'
                  alt='Alaskan Brewery'
                />
                <p data-aos="fade-up" >
                  In 1998, Alaskan Brewing became the first brewery in the U.S.
                  to install a system that captures and cleans the carbon
                  emitted from producing beer. They also implemented a mash
                  filter press in 2008 that allowed them to use less than
                  roughly 2 million gallons of water and 6% less malt to make
                  the same amount of beer.  Since there are no farms in Alaska,
                  they've been shipping their spent grain to farmers in the
                  Pacific Northwest for almost 20 years. In 2011, they developed
                  the first steam boiler fueled solely by spent grain and aimed
                  to reduce their oil consumption by more than 65% with this new
                  system. The Alaskan Brewing Company continues to look for new
                  and innovative ways to reduce its environmental impact. 
                </p>
              </section>
              <section data-aos="fade-up" >
                <h2>9. Sierra Nevada</h2>
                <img
                  src='./assets/img/businesses/Sierra-Nevada.jpg'
                  alt='Sierra Nevada Pale Ale'
                />
                <p data-aos="fade-up" >
                  Sierra Nevada was founded in 1980 with the purpose of being
                  environmentally responsible while crafting the best beer.
                  Their impressive sustainability initiatives include water
                  conservation, composting all food waste produced at their
                  operations facility, using solar panels that generate 73% of
                  their power, and more. They also recycle the carbon dioxide
                  produced during fermentation by recovering, cleaning, and
                  returning it to the brewery to pressurize tanks and aid in
                  packing. Their Chico brewery was certified as a TRUE Zero
                  Waste facility in 2013 because of their recycling and
                  composting programs, which currently diverts 95% of their
                  waste from landfills. 
                </p>
              </section>

              <section data-aos="fade-up" >
                <h2>11. Maine Beer</h2>
                <img
                  src='./assets/img/businesses/gloucester.jpg'
                  alt='Gloucester Brewery'
                />
                <p data-aos="fade-up" >
                  Since its founding in 2009, Maine Beer has remained a member
                  of 1% for the Planet and partners with many more environmental
                  and animal conservation organizations. They purchased wind
                  credits to offset their power and invested in solar energy to
                  reduce their impact further. 
                </p>
              </section>
              <section data-aos="fade-up" >
                <h2>12. Victor Brewing</h2>
                <img
                  src='./assets/img/businesses/gloucester.jpg'
                  alt='Gloucester Brewery'
                />
                <p data-aos="fade-up" >
                  Victor Brewing has always been committed to the environment
                  and natural resources. In 2014, they went beyond their
                  standard efforts and changed the way their company produces
                  beer. They've taken an initiative to fund endeavors to keep
                  local water sources clean, make their 12-and-24 packs from
                  Sustainable Forestry Initiative certified materials, and
                  recycle waste oil by Waste Oil Recyclers of Modena. Victor
                  Brewing also uses renewable energy for their Parkesburg
                  location and power their Downingtown location with solar
                  energy.
                </p>
              </section>
              <section data-aos="fade-up" >
                <h2>13. Great Lakes Brewing</h2>
                <img
                  src='./assets/img/businesses/gloucester.jpg'
                  alt='Gloucester Brewery'
                />
                <p data-aos="fade-up" >
                  Great Lakes Brewing has believed in making beers in an
                  environmentally and socially responsible way since the
                  beginning. They are conscious of their water usage and have
                  lowered it by 9% since 2016, and they're continuing to look
                  for new ways to reduce it. They see waste as an opportunity
                  and repurpose most of their waste in environmentally conscious
                  ways. They use their spent grain on their farms and the waste
                  from their beers to create soups, sauces, bread, and compost. 
                </p>
              </section>
              <section data-aos="fade-up" >
                <h2>14. Allagash Brewing Company</h2>
                <img
                  src='./assets/img/businesses/Alagash.jpg'
                  alt='Alagash Brewing White Beer'
                />
                <p data-aos="fade-up" >
                  Allagash Brewing is a Certified B-Corp and takes great care to
                  ensure everything they are doing is in the most sustainable
                  way. From donating ten cents from every barrel they brew to
                  Sebago Clean Waters to recycling 99.8% of their waste, they're
                  way ahead of the game.  Allagash has been powered by solar
                  energy since 2015 and has saved 313,241 pounds of CO2
                  emissions. To encourage their customers to recycle, you can
                  get a discount if you bring in a bag full of your recycles! I
                  mean, how awesome is that?
                </p>
              </section>
              <section data-aos="fade-up" >
                <h2>15. Karbach Brewing Company </h2>
                <img
                  src='./assets/img/businesses/Karbach-Horseshoe-beer.jpg'
                  alt='Karbach beer'
                />
                <p data-aos="fade-up" >
                  Karbach Brewing has been trying to find ways to make
                  meaningful change and, in 2019, got the opportunity to do so
                  when they installed a solar power system that generates 100%
                  of their energy needs.  Karbach Brewing also donates a portion
                  of proceeds to the Texas Parks and Wildlife foundation for
                  each can of their Southern Wheat sold. Their other beer,
                  Coastal Conservation Ale, gives a portion of proceeds to the
                  Coastal Conservation Association of Texas. 
                </p>
              </section>
              <section data-aos="fade-up" >
                <h2>16. Worthy Brewing Company</h2>
                <img
                  src='./assets/img/businesses/Worthy.jpg'
                  alt='Worthy hazy pale ale'
                />
                <p data-aos="fade-up" >
                  Located in Bend, Oregon, Worthy Brewing's sustainability
                  initiatives include donating to environmental causes and
                  investing in green technology and practices. They produce
                  their hops under sustainable practices that protect water
                  quality. Worthy Brewing has 117 solar panels that save 15 tons
                  of CO2 annually. They repurpose their spent grains and hops
                  and use 100% post-consumer material for their packaging.
                </p>
              </section>
              <section data-aos="fade-up" >
                <h2>17. Firestone Walker Brewery Company</h2>
                <img
                  src='./assets/img/businesses/Firestone-Walker.jpg'
                  alt='Firestone Walker Brewery'
                />
                <p data-aos="fade-up" >
                  Firestone Walker Brewery bases many of its sustainability
                  initiatives on the concept of "reuse, reduce, recycle." 100%
                  of their processed plastic, glass, aluminum, and cardboard are
                  recycled. They use a waste program that repurposes old
                  equipment into new items.  Firestone Walker installed 9.7
                  acres of solar panels as part of their commitment to clean and
                  renewable energy. They also established a water treatment
                  facility in 2015 and have recovered about 10,000 gallons of
                  wastewater per week. This year, they launched a new
                  sustainability initiative, Brewing for Tomorrow, encompassing
                  clean energy, water conservation, and waste elimination. Talk
                  about doing it all. 
                </p>
              </section>
              <section data-aos="fade-up" >
                <h2>18. Maui Brewing Company</h2>
                <img
                  src='./assets/img/businesses/gloucester.jpg'
                  alt='Gloucester Brewery'
                />
                <p data-aos="fade-up" >
                  Hawaii's largest craft brewery, Maui Brewing, began running
                  more than 80% of its energy needs on renewable solar energy in
                  2019. Leading in sustainability has been one of their
                  priorities, and as the most sustainable brewery in Hawaii,
                  they're on track to doing so.  Other sustainability efforts
                  include capturing and reusing CO2. Together, solar and CO2
                  recovery will reduce emissions by more than 2 million pounds
                  per year. 
                </p>
              </section>
              <section data-aos="fade-up" >
                <h2>19. 10 Barrel Brewing Company</h2>
                <img
                  src='./assets/img/businesses/gloucester.jpg'
                  alt='Gloucester Brewery'
                />
                <p data-aos="fade-up" >
                  For 10 Barrel Brewing, sustainable responsibility is at the
                  core of what they do. In 2019, 97.5% of their solid waste was
                  diverted from landfills by recycling, reusing, and reducing
                  plastic consumption.  Along with reducing their waste, they're
                  also looking for ways to conserve energy. 10 Barrel tracks
                  their energy consumption every month to record leaks or
                  overuse to prevent this in the future. They installed 1,026
                  solar panels, saving 365 metric tons annually. 10 Barrel's
                  future projects include transforming their Oregon locations to
                  100% renewable energy by November of this year. If you're ever
                  in the Oregon location, stop by and show your support!
                </p>
              </section>
              <section data-aos="fade-up" >
                <h2>20. Anchor Brewing Company</h2>
                <img
                  src='./assets/img/businesses/gloucester.jpg'
                  alt='Gloucester Brewery'
                />
                <p data-aos="fade-up" >
                  Anchor Brewing, a California-based company, is committed to
                  preserving and protecting California's natural landscapes. In
                  2013, they partnered with CSPF, the California States Park
                  Foundation, which donates a portion of proceeds from their
                  'Anchor California Lager' to conservation projects in
                  California.  They're also encouraging other people to become a
                  member of CSPF to help preserve and protect state parks. The
                  California State Parks Foundation (CSPF) is responsible for
                  maintaining the state's 279 parks and ensuring that everyone
                  can enjoy their natural beauty.
                </p>
              </section>
              <section data-aos="fade-up" >
                <h2>21. Golden Road Brewing Company</h2>
                <img
                  src='./assets/img/businesses/gloucester.jpg'
                  alt='Gloucester Brewery'
                />
                <p data-aos="fade-up" >
                  Not every company can do everything, but every company can
                  do something. Golden Road Brewing was founded in 2011 in Los
                  Angeles with the goal to bring fresh beer in the most
                  sustainable way possible.  With their Heal the Bay IPA, Golen
                  Road Brewing donates a portion of the proceeds to Heal the
                  Bay, a local nonprofit dedicated to preserving the beaches and
                  watersheds of Southern California. Final Thoughts Who knew so
                  many breweries were leading the way in sustainable business
                  practices? With more companies adopting these methods, it's
                  getting easier to reduce your impact. Show these companies
                  your support by buying their beers, and cheers to a more
                  sustainable future!
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className='save-the-world-components'>
        <SaveTheWorldClimateChange />
      </div>
    </main>
  );
};

export default SustainableBeers;
