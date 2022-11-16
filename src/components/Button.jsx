const Button = ({ styles }) => {
    return (
        <button type='button' className={`btn capitalize py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
            get started
        </button>
    )
}

export default Button