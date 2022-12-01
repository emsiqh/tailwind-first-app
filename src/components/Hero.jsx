import styles, { layout } from '../style';
import Button from "./Button";

import { heroImg } from "../assets";

const Hero = () => (
    <section id="#" className={layout.section}>
        {/* content */}
        <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading2}`}>
                A Simple Bookmark Manager
            </h2>
            <p className={`${styles.paragraph} mt-5`}>
                A clean and simple interface to organize your favourite websites.
                Open a new browser tab and see your sites load instantly.
                Try it for free.
            </p>
            <div className={`${styles.flexCenter} w-full space-x-4 md:justify-start mt-10`}>
                <Button title='Get it on chrome' styles="uppercase btn" />
                <Button title='Get it on firefox' styles="uppercase btn" />
            </div>
        </div>

        {/* image */}
        <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col">
            <img src={heroImg} />
        </div>
    </section>
)


export default Hero