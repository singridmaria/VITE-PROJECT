import { useState, useEffect } from "react";


const Dashboard = () => {
    const [dataForm, setDataForm] = useState({
        lang: "",
        percentage: "",
    });

    const inputHandler = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value });

    };

    const addLanguage = (event) => {
        event.preventDefault();



        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/jason",
            },
            body: JSON.stringify(dataForm),
        })

        console.log(dataForm);
    }


    return (
        <>
            <form>
                <h3>Cadastrar <br /> linguagem de programação</h3>
                <div className="input-form">
                    <input type="text" name="lang" onChange={inputHandler} />
                </div>
                <div className="input-form">
                    <input type="text" name="percentage" onChange={inputHandler} />
                </div>
                <div className="input-form">
                    <button onClick={addLanguage} className="add">Cadastar</button>
                </div>
            </form>
        </>
    )
}
export default Dashboard