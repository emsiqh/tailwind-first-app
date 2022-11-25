const Button = ({ title, styles }) => {
    return (
        <button type='button' className={`capitalize py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
            {title}
        </button>
    )
}

export default Button