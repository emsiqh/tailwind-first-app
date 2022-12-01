import styles, { layout } from '../style';

const Heading = ({ ...info }) => {
    return (
        <section id={info.idtag}>
            <div className={`${layout.sectionInfo} mt-16 items-center`}>
                <h2 className={`${styles.heading2} mb-6 md:text-center`}>{info.h2tag}</h2>
                <p className={`${styles.paragraph} md:text-center max-w-2xl`}>
                    {info.ptag}
                </p>
            </div>
        </section>
    )
}

export default Heading