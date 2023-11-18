import "./style.css"

const ButtonHomeView = ({label, onClick}) => {
    return (
        <>
            <button className = "buttonHomeView" onClick={onClick}>{label}</button>
        </>
    )
}

export default ButtonHomeView