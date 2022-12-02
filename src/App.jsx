import styles from "./style";
import { Navbar, ScrollToTop, Hero, Tabs, Heading, DownloadBox, FAQ } from './components';

import { quotes } from "./constants";

const App = () =>
(
  <div className="bg-primary w-full overflow-hidden">
    <ScrollToTop />
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Heading idtag='features' h2tag='Features' ptag={quotes.features} />
        <Tabs />
        <Heading idtag='download' h2tag='Download' ptag={quotes.download} />
        <DownloadBox />
        <Heading idtag='faq' h2tag='Frequently Asked Questions' ptag={quotes.faq} />
        <FAQ />
      </div>
    </div>
  </div>
)


export default App