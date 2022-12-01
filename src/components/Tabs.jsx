import { useState } from "react";

import { tabLinks } from "../constants";
import styles from '../style';
import Button from "./Button";

const Tabs = () => {
    const [active, setActive] = useState("tab1");
    return (

        <section id='tabs' className="sm:py-12 py-4">
            {/* Tab flex container */}
            <div className="flex flex-col md:flex-row justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10">
                {
                    tabLinks.map((tabLink, index) => {
                        return (
                            <div key={index} className={`${styles.flexCenter} cursor-pointer text-lg text-gray-600 border-b md:border-b-0 md:w-1/3 hover:text-blueGradient`}>
                                <div className={`py-5 ${tabLink.id === active ? "border-blueGradient border-b-4" : ""}`} onClick={() => setActive(tabLink.id)}>
                                    {tabLink.name}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* Tab panels */}
            <>
                {
                    tabLinks.map((tabLink, index) => {
                        return (
                            <div key={index} id="panels" className={`${tabLink.id === active ? "flex" : "hidden"} flex-col py-5 md:flex-row md:space-x-7`}>
                                {/* Panel Image */}
                                <div className="flex justify-center md:w-1/2">
                                    <img src={tabLink.img} alt={tabLink.name} />
                                </div>
                                {/* Panel Content */}
                                <div className="flex flex-col space-y-8 md:w-1/2">
                                    <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">{tabLink.title}</h3>
                                    <p className={`${styles.paragraph} md:text-left md:text-lg max-w-2xl`}>{tabLink.desc}</p>
                                    <div className="mx-auto md:mx-0">
                                        <Button title="more info" styles="btn" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </>

        </section>
    )
}

export default Tabs