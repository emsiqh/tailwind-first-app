import { useState } from "react";
import { arrowDown } from "../assets";
import { questions } from "../constants";

const FAQ = () => {
    const [active, setActive] = useState(false);
    const [target, setTarget] = useState("");
    const handleClick = (id) => {
        setActive(!active);
        setTarget(id);
    };

    return (
        <section className='mx-auto px-6 mb-32'>
            <div className='max-w-2xl m-8 mx-auto overflow-hidden'>
                {
                    questions.map((question, index) => {
                        return (
                            <div key={question.id} className='py-1 border-b outline-none' onClick={() => handleClick(question.id)}>
                                <div className='flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer'>
                                    {/* Tab title */}
                                    <div className={`${active && target === question.id ? "text-blueGradient" : ""}`}>
                                        {question.q}
                                    </div>
                                    {/* Tab icon */}
                                    <div className="transition duration-500">
                                        <img src={arrowDown} alt="down" className={`${active && target === question.id ? "transition -rotate-180 duration-500" : ""}`} />
                                    </div>
                                </div>
                                <div className={`${active && target === question.id ? "max-h-screen" : ""} overflow-hidden max-h-0`}>
                                    <p className="py-2 text-justify text-gray-400">{question.a}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default FAQ