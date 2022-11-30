import styles, { layout } from '../style';

const Features = () => (
    <section id='features'>
        <div className={`${layout.sectionInfo} mt-16 items-center`}>
            <h2 className={`${styles.heading2} mb-6 text-4xl md:text-center`}>Features</h2>
            <p className={`${styles.paragraph} md:text-center max-w-2xl`}>
                Our aim is to make it quick and easy for you to access your favourite websites.
                Your bookmarks sync between your devices so you can access them on the go.
            </p>
        </div>

    </section>
)


export default Features