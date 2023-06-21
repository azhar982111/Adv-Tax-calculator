// Actual HRA received from the employer
// For those living in metro cities: 50% of (Basic salary + Dearness allowance)
// For those living in non-metro cities: 40% of (Basic salary + Dearness allowance)
// Actual rent paid minus 10% of (Basic salary + Dearness allowance)

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "../css-all-pages/HouseRent.module.css"


export default function HouseRent() {

    let initstate = {
        basicSalary: "",
        DA: "",
        comissions: "",
        hraReceived: "",
        RentPaid: "",
        ifTicked: "",
        exemptedHouseRent: "",
        taxableHouseRent: ""
    }

    let [data, setData] = useState(initstate)

    // let navigate = useNavigate()

    function handleChange(e) {
        let { name, value, checked, type } = e.target;
        value = type === "checkbox" ? checked : value;

        setData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));

    }

    function calculate() {
        let a = hraReceived
        let b = (RentPaid*12) - 10/100*basicSalary*12
        let c;
        if(ifTicked === true){
           c = 50/100*basicSalary*12
        }
        else{
           c = 40/100*basicSalary*12
        }
        // console.log(basicSalary,DA,comissions,hraReceived,RentPaid,ifTicked)
        // console.log(a,b,c)
        // console.log(Math.min(a,b,c))
        setData((prevFormData) => ({
            ...prevFormData,
            exemptedHouseRent: Math.min(a,b,c),
            taxableHouseRent: 82/100*Math.min(a,b,c)
        }));
    }

    function reset() {
        setData(initstate)
        // console.log(data)
    }
    const navigate = useNavigate();
    function changePage(){
        navigate("/advTax")
    }


    const { basicSalary, DA, comissions, hraReceived, RentPaid, ifTicked, exemptedHouseRent, taxableHouseRent } = data;

    return (
        <div>
            <div style={{display:"flex"}}>
                <div className={styles.topDiv1}>
                    <h2>HOUSE RENT ALLOWANCE</h2>
                </div>

                <div onClick={changePage} className={styles.topDiv2}>
                    <h2>ADVANCE TAX CALCULATOR</h2>
                </div>
            </div>




            <table className={styles.table}>

                <tr >

                    <td>Basic Salary</td>

                    <td>
                        <input type="number" onChange={handleChange} name="basicSalary" value={basicSalary}></input>
                    </td>
                </tr>


                <tr>
                    <td>DA forming part of salary</td>
                    <td><input type="number" onChange={handleChange} name="DA" value={DA}></input></td>
                </tr>

                <tr>
                    <td> Commission (as % of turnover achieved by the employee)</td>
                    <td><input type="number" onChange={handleChange} name="comissions" value={comissions}></input></td>
                </tr>

                <tr>
                    <td>HRA Received</td>
                    <td> <input type="number" onChange={handleChange} name="hraReceived" value={hraReceived}></input></td>
                </tr>

                <tr>
                    <td>Rent Paid</td>
                    <td><input type="number" onChange={handleChange} name="RentPaid" value={RentPaid}></input></td>
                </tr>

                <tr>
                    <td>Tick if residing in metro city.</td>
                    <td> <input style={{ height: "12px" }} onChange={handleChange} type="checkbox" name="ifTicked" checked={ifTicked}></input><span style={{ marginLeft: "80px" }}>(Tick if Yes</span>)</td>
                </tr>

                <tr>
                    <td>Exempted House Rent Allowance</td>

                    <td><input type="number" disabled onChange={handleChange} name="exemptedHouseRent" value={exemptedHouseRent}></input>

                    </td>
                </tr>

                <tr>
                    <td>Taxable House Rent Allowance</td>
                    <td><input type="number" disabled onChange={handleChange} name="taxableHouseRent" value={taxableHouseRent}></input></td>
                </tr>

            </table>
            <div className={styles.buttonDiv}>
                <button onClick={calculate}>Calculate</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )

} 