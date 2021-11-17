import React from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function ClimateChangeMethodology() {
  React.useEffect(() => {
    Aos.init({duration:1500});
  }, [])
  return (
    <section className="methodology">
      <h2 class="headline">
        This map uses real altitude data to calculate where coastal flooding
        will occur
      </h2>
      <div className="x">
        <div data-aos="fade-up-right"  className="c l6">
          <h2 class="subhead">How is it calculated?</h2>
          <p>
            An altitude value (in metres) is assigned to every square
            kilometre of land. The JavaScript is designed to add a blue pixel
            over any patch of land that's zero metres above sea level (0
            altitude). With each 0.2 seconds that pass, the threshold value at
            which blue pixels are added decreases by 3cm. As a result, we can
            observe an accurate representation of how coastal areas would
            flood if the sea level were to rise by 3cm every year.
          </p>
        </div>
        <div data-aos="fade-up-left"  class="c l6">
          <h3 class="subhead">Why 3cm per year?</h3>
          <p>
            Although the actual annual sea level rise is closer to 3mm, there
            is a serious unknown risk factor of significant increase in sea
            rise due to the future effects of loss of reflective white ice and
            release of locked up greenhouse gasses resulting from future ice
            melting. These factors, as well as several others, are likely to
            multiply the rate of sea level rise, which could lead to far more
            extreme flooding. Therefore 3cm annual rise has been selected for
            this animation as a demonstration of how bad things are likely to
            get in the near future, if extreme changes to human behaviour are
            not made.
          </p>
        </div>
        <div data-aos="fade-up-right"  class="c l6">
          <h3 class="subhead">It could be much worse than this</h3>
          <p>
            This map shows a steady rate of sea level rise. However, it's
            likely that as the atmosphere becomes richer in greenhouse gases;
            larger portions of heat reflecting ice melt; fires become more
            common; and large ecosystems die out that multiplier effects will
            cause accellerated flooding.
          </p>
          <p>
            In addition to flooding, desertification, loss of crops and
            rapidly accelerating loss of biodiversity will quickly lead to an
            uncontrollable global disaster. There are over 7 billion people
            relying on the climate staying as it is. But if it changes
            quickly, we're not prepared to help everyone. Billions will lose
            their homes. Migration from poor to rich countries will occur on a
            scale never before seen. Millions--perhaps billions--of animals
            will die. And we don't know the full scale of the consequencies.
            If you value your life and the lives of your children you're going
            to have to fight to keep it that way.
          </p>
        </div>
      </div>
    </section>
  );
}

