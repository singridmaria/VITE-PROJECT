import "./style.css"

const ButtonHeader = ({ label, onClick }) => {
    return (
        <>

            <button className="buttonheader" onClick={onClick} >{label}</button>


        </>
    )
}
export default ButtonHeader