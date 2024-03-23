import { useState, useEffect } from "react";
import Home from "../../components/homeview/Home";
import Buttons from "../../components/buttons/Button";


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
            <Home conteudo={

                <form>
                    <h3>Cadastrar <br /> linguagem de programação</h3>
                    <div className="input-form">
                        <input type="text" name="lang" onChange={inputHandler} />
                    </div>
                    <br />
                    <div className="input-form">
                        <input type="text" name="percentage" onChange={inputHandler} />
                    </div>
                    <br /><br />
                    <div className="input-form">
                        <Buttons onClick={addLanguage} label="CADASTRAR" > </Buttons>
                    </div>
                </form>
            }>  </Home>
        </>

    )
}
export default Dashboard