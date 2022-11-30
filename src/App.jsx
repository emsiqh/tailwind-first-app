import styles from "./style";
import { Navbar, ScrollToTop, Hero, Features, Tabs } from './components';

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
        <Features />
        <Tabs />
      </div>
    </div>
  </div>
)


export default App