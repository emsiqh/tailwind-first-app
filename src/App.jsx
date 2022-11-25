import styles from "./style";
import { Navbar, ScrollToTop } from './components';

const App = () =>
(
  <div className="bg-primary w-full overflow-hidden">
    <ScrollToTop />
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  </div>
)


export default App