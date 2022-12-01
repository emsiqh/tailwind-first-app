import { browsers } from "../constants"
import Button from "./Button"

const DownloadBox = () => {
    return (
        <section id="download-boxes" className="py-32">
            <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
                {
                    browsers.map((browser, index) => {
                        return (
                            <div key={browser.id} className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
                                <div className="flex justify-center">
                                    <img src={browser.img} alt={browser.id} />
                                </div>
                                <h5 className="pt-6 text-xl font-bold uppercase">Add to {browser.id}</h5>
                                <p className="text-gray-400">Minimum version {browser.version}</p>
                                <div className="">
                                    <Button title="Add & Install Extension" styles="btn" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default DownloadBox