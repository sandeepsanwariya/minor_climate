import React from "react";
import SaveTheWorldClimateChange from "../SaveTheWorldClimateChange";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Broadband = () => {
  React.useEffect(() => {
    Aos.init({duration:1500});
    window.scrollTo(0, 0);
  }, [])
  return (
    
    <main className="article campaign broadband">
      <header data-aos="fade-up" className="entry-header high-impact-viewport x">
            <div className="text c l6">
              <h1 className="headline">
                Broadband Providers Ranked By Carbon Emissions
              </h1>
              <p className="standfirst">
                Not sure which broadband provider to choose? They're all
                basically the same so you might as well choose the one that does
                the least damage to the environment. The table below shows UK
                broadband providers ranked by carbon emissions, so it's easy as
                pie to be green.
              </p>
        </div>
      </header>
      <div class="grid">
        <div className="x">
          <div className="c l7 entry-content">
            <p data-aos="fade-up-right">
              Here are the top 10 UK broadband providers based on their CO2
              emissions, so you can decide which provider provides the best
              broadband service, environmentally friendly and their plans for
              going net zero.
            </p>

            <div className="business-rankings">
              <section>
                <h2>1. Virgin Media</h2>
                <ul className="key-facts">
                  <li className="carbon-emissions">
                    157,845 <small>carbon emissions (2019)</small>
                  </li>
                  <li className="carbon-neutral-year">
                    2025 <small>Net zero by</small>
                  </li>
                  <li className="other-highlights">
                    Zero landfill waste since 2020
                  </li>
                </ul>

                <h3>Net zero by 2025</h3>
                <p data-aos="fade-up-left">
                  The company's goal is to achieve net-zero carbon emissions by
                  the end of 2025. The company is also looking forward to
                  introducing electric vehicles with improved infrastructure and
                  technology.
                </p>

                <h3>Zero landfill waste</h3>
                <p data-aos="fade-up-left">
                  Virgin Media revealed in its latest 2020 Sustainability Report
                  that the business has achieved zero waste to landfill
                  operations for the first time and that it has reduced its
                  operational carbon footprint (scope 1 and 2) by 46 per cent
                  since 2014, as well as refurbishing and reusing more than 8
                  million products. This has been accomplished via multi-year
                  expenditures in energy-saving techniques and the elimination
                  of obsolete equipment and technology. Consequently, Virgin
                  Media is consuming less energy today than it has at any time
                  in the previous 6-7 years, according to the company.
                </p>

                <h3>More green benefits</h3>
                <p data-aos="fade-up-right">
                  The company has also decreased its carbon emissions by 22% and
                  by 80% per terabyte of data since 2014. In 2020 Virgin Media
                  boosted the circulation of its goods by repairing and
                  recycling 1.3 million devices, including set-top boxes and
                  routers. Furthermore, since 2014, the business has decreased
                  its paper use by 88 per cent, and 80 per cent of its
                  operational waste is now recycled.{" "}
                </p>
              </section>
              <section data-aos="fade-up">
                <h2>2. Vodafone UK</h2>
                <ul className="key-facts">
                  <li className="carbon-emissions">
                    294,394 <small>carbon emissions (2018)</small>
                  </li>
                  <li className="carbon-neutral-year">
                    2040 <small>Net zero by</small>
                  </li>
                </ul>
                <p data-aos="fade-up-right">
                  Vodafone is a British multinational telecommunications
                  company. Vodafone is a very broad business currently operating
                  in 22 countries and offering competitive broadband services.
                </p>

                <h3>Emission Reduction</h3>
                <p data-aos="fade-up-left">
                  Vodafone established a 2030 authorized scientific target to
                  limit global warming at 1.5°C following the carbon reduction
                  target, making it the first large telecommunications operator
                  to adopt the ICT emission reductions route. Over the past
                  year, Vodafone reduced its total emissions from Scope 1 and
                  Scope 2 greenhouse gases by 30 per cent a year, to 1.37
                  million tons of CO2e (the equivalents of carbon dioxide),
                  driven by Vodafone's continued focus on energy efficiency and
                  an increase from 33 per cent for FY20 to 80 per cent in FY21
                  in the share of renewable electricity bought in Europe.{" "}
                </p>
                <h3>Commitments</h3>
                <p data-aos="fade-up-right">
                  By 2027, Vodafone expects to have eliminated carbon emissions
                  from all of its operations in the United Kingdom. This is part
                  of a broader set of commitments to see the technology giant
                  invest in electric vehicles. By 2040, the company would go
                  net-zero for emissions of operations.
                </p>
              </section>
              <section data-aos="fade-up">
                <h2>3. SSE Broadband</h2>
                <ul className="key-facts">
                  <li class="carbon-emissions">
                    255,000 <small>carbon emissions (2021)</small>
                  </li>
                  <li className="carbon-neutral-year">
                    2050 <small>Net zero by</small>
                  </li>
                </ul>
                <p data-aos="fade-up-right">
                  SSE Broadband is an excellent service – particularly if SSE is
                  also your energy provider, especially if you want to take
                  advantage of SSE Rewards. The service is dependable, the
                  fibre-optic option offers respectable speeds, and it is quite
                  secure. Emission Reduction With its movement to renewable
                  energy sources, the emission of greenhouse gases would be
                  minimal. Commitments SSE would go net zero by the end of 2050.
                  SSE would also be shifting to Green Electricity, which is 100%
                  renewable electricity with zero emissions.
                </p>
              </section>
              <section data-aos="fade-up"> 
                <h2>4. BT</h2>
                <ul className="key-facts">
                  <li className="carbon-emissions">
                    298,461 tonnes <small>carbon emissions (2019)</small>
                  </li>
                  <li className="carbon-neutral-year">
                    2045 <small>Net zero by</small>
                  </li>
                </ul>
                <p data-aos="fade-up-right">
                  BT is the largest broadband provider in the UK and meets
                  customers' needs in 180 countries worldwide. BT Group is
                  currently dealing with more than six million customers and has
                  an excellent customer policy. They have specific aims
                  regarding climate control.{" "}
                </p>

                <h3>Emission Reduction</h3>
                <p data-aos="fade-up-left">
                  BT Group has reduced its scope 1 and 2 emissions by 80%
                  between 1996 and 2019. Between 2018 and 2019, the BT Group
                  decreased its emissions from direct operations and energy
                  consumption (scopes 1 and 2) by 17 per cent, and between 2017
                  and 2018, it cut its emissions by 26 per cent.
                </p>

                <h3>Commitments</h3>
                <p data-aos="fade-up-left">
                  BT Group aims to become net-zero carbon by 2045. By 2030 BT
                  Group aims to reduce its greenhouse gas emissions intensity to
                  87% 2030. BT Group is also aiming to shift to electric
                  vehicles to support climate.
                </p>
              </section>
              <section data-aos="fade-up">
                <h2>5. John Lewis</h2>
                <ul className="key-facts">
                  <li class="carbon-emissions">
                    302,964 tonnes <small>carbon emissions (2020)</small>
                  </li>
                  <li class="carbon-neutral-year">
                    2050 <small>Net zero by</small>
                  </li>
                  <li class="other-highlights">
                    Introducing food-waste-fuelled delivery trucks
                  </li>
                </ul>
                <p data-aos="fade-up-right">
                  Perhaps John Lewis isn't the first name that's worth
                  considering when it comes to broadband. It's not the cheapest,
                  but neither is it the most expensive. John Lewis broadband
                  provides basic bundles of no-nonsense. Three bundles are
                  available: unlimited broadband, Fibre broadband and
                  Fibre Extra broadband. They provide 10Mbps, 36Mbps and 66Mbps
                  average download speeds. All three broadband packages come
                  with a telephone line with UK phone calls both at night and
                  during weekends.
                </p>
                <h3>
                  Emission Reduction through transition to bio-fuel delivery
                  trucks
                </h3>
                <p data-aos="fade-up-left">
                  Since the beginning of 2019, the Partnership has lowered its
                  overall operating carbon emissions by 6.6 per cent, and its
                  emissions from transportation have decreased by 6.9 per cent.
                  The vehicles, which will transport about 120 Waitrose heavy
                  goods trucks, will operate on biomethane, produced from food
                  waste and food industry waste materials, rather than diesel.
                  This will result in an 80 per cent reduction in CO2 emissions,
                  with each truck saving more than 100 tonnes of CO2 each year.
                </p>
                <h3>Commitments</h3>
                <p data-aos="fade-up-right">
                  In March 2019, the employee-owned company committed to become
                  net-zero carbon throughout its whole operation by 2050 at the
                  very latest and to transition its 600 heavy goods trucks to
                  run on low-carbon biomethane by 2028 at the very latest. The
                  Partnership's goal is to completely phase out the use of
                  fossil fuels in its commercial vehicle and automobile fleets
                  by 2030 to significantly decrease carbon emissions throughout
                  its transportation network.
                </p>
              </section>
              <section data-aos="fade-up">
                <h2>6. Shell Energy (380,000 Tonnes CO2e 2020)</h2>
                <p data-aos="fade-up-right">
                  Shell Energy Retail Limited, previously known as First
                  Utility, is a gas, electricity, and internet provider in the
                  United Kingdom. Shell Energy Retail Limited was founded in
                  1998. The Coventry-based business was rated as the seventh
                  biggest supplier in the United Kingdom in October 2013, making
                  it the largest supplier outside of the Big Six. It had a 2 per
                  cent market share in September 2014, and it has 700,000
                  subscribers as of March 2019.
                </p>
                <h3>Emission Reduction</h3>
                <p data-aos="fade-up-left">
                  Shell has set an unconditional three-year goal to decrease its
                  carbon intensity by 2-3 per cent by the end of 2021, compared
                  to the baseline year of 2016. The target was established in
                  2019. When it came to emissions reductions, the business set a
                  3-4 per cent reduction by the end of 2022. Then in 2021, the
                  company set a new aim of a 6-8 per cent reduction by the end
                  of 2023.
                </p>
                <h3>Commitments</h3>
                <p data-aos="fade-up-right">
                  Shell Energy plans to be net-zero by 2050, and they have
                  specific plans to achieve their target. Shell will continue to
                  set short-term goals to reduce carbon emissions as it moves
                  toward its 2050 goal, tied to the compensation of more than
                  16,500 employees. Included in this are additional goals to
                  decrease the net carbon intensity, which are as follows: 6-8
                  per cent by 2023, 20 per cent by 2030, 45 per cent by 2035,
                  and 100 per cent by 2050, all based on a baseline of 2016
                  emissions.
                </p>
              </section>
              <section data-aos="fade-up">
                <h2>7. Zen Internet (Net Zero By 2028)</h2>
                <p data-aos="fade-up-right">
                  First, the company declared it was officially the Carbon
                  Neutral Plus. That is, it will assist in removing more carbon
                  from the environment than it will produce via various
                  programs. Whether you use your internet connection for online
                  shopping or are a serious gamer, this broadband provider
                  offers various packages to select from, depending on your
                  needs. Zen provides connection rates ranging from fast to
                  ultrafast, depending on your connectivity requirements.
                </p>
                <h3>Emission Reduction</h3>
                <p data-aos="fade-up-left">
                  Zen Internet, in February 2020, announced that it had achieved
                  Carbon Neutral Plus status. In the first year, the company
                  offset 12743 emissions which is 4.5 times more carbon than
                  they used between October 2018 and September 2019, as they
                  supported different projects in India and Africa. On that
                  basis, Zen internet has managed in only one year to reduce the
                  carbon footprint from 3,645 tCO2 to 460 tCO2, showing its
                  dedication to energy use reduction and a global impact. In
                  addition, they also have already offset another 12 699 tCO2,
                  nearly eight times as much carbon as they used to assist
                  several energy projects in Thailand, the United Kingdom, and
                  Brazil between October 2019 and September 2020.
                </p>
                <h3>Commitments</h3>
                <p data-aos="fade-up-right">
                  The company has made it clear that it will achieve net-zero
                  status by 2028. Zen Internet managed to reduce their energy
                  usage by 13% in 2020, and they plan on reducing it further to
                  5%. The company also aims to reduce paper waste by 25-50%.
                  Although the company has a 100% renewable electricity tariff,
                  they want to reduce their reliance on National Grid by
                  generating more renewable energy.
                </p>
              </section>
              <section data-aos="fade-up">
                <h2>8. Sky Broadband (Net Zero By 2030)</h2>
                <p data-aos="fade-up-right">
                  Sky Broadband is a Sky UK broadband service in the UK. Sky
                  Broadband refers to ADSL broadband packages with the launch of
                  Sky Fibre. Sky offers download speeds up to 20Mbit/s to Sky
                  subscribers and up to 76Mbit/s from FTTC enabled exchanges via
                  an Openreach landline.
                </p>
                <h3>Emission Reduction</h3>
                <p data-aos="fade-up-left">
                  Sky is powered by renewables, which in turn have led to a 22.7
                  per cent decrease in emissions across the 2018 Baseline Scope
                  1 & 2, mainly via onsite generation and renewables energy
                  prices purchases and traceable certificates. Sky has made all
                  of its original productions
                </p>
                <p data-aos="fade-up-right">
                  Carbon Neutral from 2019, including its popular program
                  Chernobyl, to monitor and offset the lifecycle emission from
                  start to broadcast with Carbon Neutral production
                  certification. Commitments Sky has announced its plans to go
                  net-zero carbon by 2030 across its entire value chain. Since
                  becoming carbon neutral, it has maintained carbon neutrality
                  while steadily expanding its group's carbon base objectives.
                </p>
              </section>
              <section data-aos="fade-up">
                <h2>9. TalkTalk Group (Net Zero By 2030)</h2>
                <p data-aos="fade-up-right">
                  TalkTalk has been in business for almost two decades, so it is
                  a name that most people are already acquainted with. The
                  company provides pay television, telecommunications, Internet
                  access, and mobile network services to companies and
                  individuals across the United Kingdom.
                </p>
                <h3>Emission Reduction</h3>
                <p data-aos="fade-up-left">
                  TalkTalk Group reduced their carbon footprint in their offices
                  and data centres by over 60% between 2015-2020. Commitments
                  TalkTalk Group is planning to become net-zero by 2030, and
                  fibre is the key to it.
                </p>
              </section>
              <section data-aos="fade-up">
                10. EE Broadband (Net Zero By 2045) What EE broadband lacks in
                speed, it more than makes up for in reliability. In addition, it
                is a fairly priced product. EE's service, which operates on the
                same network as its parent company BT, is similar in terms of
                reliability and speed - with speeds reaching up to a whopping
                900Mbps in certain places in some locations. Emission Reduction
                Since 2016, they have already cut their carbon emissions by 57
                per cent, which is an impressive achievement. Commitments As a
                subsidiary of BT, the company strives to make the world a better
                place by minimizing the negative effect of its operations. They
                have set a target of being a net-zero carbon company by 2045,
                and they are making excellent progress toward that objective. By
                2030, they aim to convert the vast majority of their fleet of
                33,000 cars to electric or zero-emission vehicles.
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="save-the-world-components">
        <SaveTheWorldClimateChange />
      </div>
    </main>
  );
};

export default Broadband;
