import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
    const [showGoTop, setShowGoTop] = useState(false)

    const handleVisibleButton = () => {
        setShowGoTop(window.pageYOffset > 50)
    }

    const handleScrollUp = () => {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleVisibleButton)
    }, [])

    return (
        <button
            type='button'
            className={`btn z-[999] fixed bottom-5 right-5 cursor-pointer text-white bg-blue-gradient rounded-[50%] h-8 w-8 ${showGoTop ? 'block' : 'hidden'}`}
            onClick={handleScrollUp}
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    )
}

export default ScrollToTop