import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styles from "../css-all-pages/Home.module.css"


export default function AdvanceTaxCalculator() {
    let copyInitstate = {
        taxpayer: "",
        Section115BAC: "",
        netTaxableIncome: "",
        incomeTax: "",
        Surcharge: "",
        educationCess: "",
        secondaryHigherEducation: "",
        totalTaxLiability: "",
        relief: "",
        TDS_TCS_MAT: "",
        assessedTax: "",
        Section115BAD: "",
        Section115BAE: "",
        gender: "",
        residentialStatus: "",
        incomeFromSalary: "",
        incomeFromHouseProperty: "",
        interestonHousingLoan: "",
        selfOccupiedHouseProperty: "",
        annualLetableValue: "",
        municipalTaxesPaid: "",
        unrealizedRent: "",
        netAnnualValue: "",
        standardDeduction: "",
        interestOnHousingLoan2: "",
        incomeFromLetOutHouse: ""
    }

    let initstate = {
        taxpayer: "",
        Section115BAC: "",
        netTaxableIncome: "",
        incomeTax: "",
        Surcharge: "",
        educationCess: "",
        secondaryHigherEducation: "",
        totalTaxLiability: "",
        relief: "",
        TDS_TCS_MAT: "",
        assessedTax: "",
        Section115BAD: "",
        Section115BAE: "",
        gender: "",
        residentialStatus: "",
        incomeFromSalary: "",
        incomeFromHouseProperty: "",
        interestonHousingLoan: "",
        selfOccupiedHouseProperty: "",
        annualLetableValue: "",
        municipalTaxesPaid: "",
        unrealizedRent: "",
        netAnnualValue: "",
        standardDeduction: "",
        interestOnHousingLoan2: "",
        incomeFromLetOutHouse: ""
    }



    let [data, setData] = useState(initstate)
    // let [value, setValue] = useState("")

    const { taxpayer, Section115BAC, netTaxableIncome, incomeTax, Surcharge, educationCess, secondaryHigherEducation, totalTaxLiability, relief, TDS_TCS_MAT, assessedTax, Section115BAD, Section115BAE, gender, residentialStatus, incomeFromSalary, incomeFromHouseProperty, interestonHousingLoan, selfOccupiedHouseProperty, annualLetableValue, municipalTaxesPaid, unrealizedRent, netAnnualValue, standardDeduction, interestOnHousingLoan2, incomeFromLetOutHouse } = data;

    function AssessTax() {
        let inc_tax = 0
        if (netTaxableIncome > 250000 && netTaxableIncome <= 500000) {
            inc_tax = 0.05 * (netTaxableIncome - 250000)
        }
        else if (netTaxableIncome > 500000 && netTaxableIncome <= 750000) {
            inc_tax = 12500 + 0.1 * (netTaxableIncome - 500000)
        }
        else if (netTaxableIncome > 750000 && netTaxableIncome <= 1000000) {
            inc_tax = 37500 + 0.15 * (netTaxableIncome - 750000)
        }
        else if (netTaxableIncome > 1000000 && netTaxableIncome <= 1250000) {
            inc_tax = 75000 + 0.2 * (netTaxableIncome - 1000000)
        }
        else if (netTaxableIncome > 1250000 && netTaxableIncome <= 1500000) {
            inc_tax = 125000 + 0.25 * (netTaxableIncome - 1250000)
        }
        else if (netTaxableIncome > 1500000) {
            inc_tax = 187500 + 0.30 * (netTaxableIncome - 1500000)
        }

        let surchrge = 0
        if (netTaxableIncome > 5000000 && netTaxableIncome <= 10000000) {
            surchrge = 0.1 * netTaxableIncome
        }
        else if (netTaxableIncome > 10000000 && netTaxableIncome <= 20000000) {
            surchrge = 0.15 * netTaxableIncome
        }
        else if (netTaxableIncome > 20000000 && netTaxableIncome <= 50000000) {
            surchrge = 0.25 * netTaxableIncome
        }

        else if (netTaxableIncome > 50000000) {
            surchrge = 0.37 * netTaxableIncome
        }

        let educess = 0.04 * (inc_tax + surchrge)
        let total_tax = inc_tax + surchrge + educess

        let final_tax = total_tax - Number(relief) - Number(TDS_TCS_MAT) 

        setData((prevFormData) => ({
            ...prevFormData,
            "incomeTax": inc_tax,
            "Surcharge": surchrge,
            "educationCess":educess,
            "totalTaxLiability":total_tax,
            "assessedTax":final_tax
        }));
        console.log(incomeTax)
    }

    function handleChange(e) {
        let { name, value } = e.target;

        setData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));

        
        // let values = e.target.value
        // setValue(values)
    }

    let navigate = useNavigate()

    function backBtn() {
        navigate("/")
    }

    function calculate() {
        console.log(data)
    }

    function reset(){
        setData((prevFormData) => ({
            ...prevFormData,
            "incomeTax": "",
            "Surcharge": "",
            "educationCess":"",
            "totalTaxLiability":"",
            "assessedTax":""
        }));
    }

    if (taxpayer === "") {
        return (

            <div>
                <div style={{ display: "flex" }}>
                    <div className={styles.topDiv}>
                        <h2>ADVANCE TAX CALCULATOR FOR FINANCIAL YEAR 2023-24</h2>
                    </div>

                    <div>
                        <button onClick={backBtn} className={styles.backBtn}>B a c k</button>
                    </div>
                </div>

                <table className={styles.table}>

                    <tr >

                        <td>Tax Payer</td>

                        <td>
                            <select onChange={(e) => handleChange(e)} name="taxpayer" value={taxpayer} >
                                <option value="">select</option>
                                <option value="individual">Individual</option>
                                <option value="huf">HUF</option>
                                <option value="aops">AOPs/BOI</option>
                                <option value="domestic">Domestic Company</option>
                                <option value="foreign">Foreign Company</option>
                                <option value="firms">Firms</option>
                                <option value="llp">LLP</option>
                                <option value="co-operative">Co-operative Society</option>
                            </select>
                        </td>
                    </tr>

                    <tr className={styles.tr2}>
                        <td>
                            <tr>Whether opting for taxation under Section 115BAC?</tr>
                            <tr>Net Taxable Income</tr>
                        </td>
                        <td>
                            <tr>
                                <select onChange={handleChange} name="Section115BAC" value={Section115BAC}>
                                    <option value="">select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>


                                </select>
                            </tr>
                            <tr><input onChange={handleChange} name="netTaxableIncome" value={netTaxableIncome} type="number"></input></tr>
                        </td>
                    </tr>



                    <tr>
                        <td> Income Tax</td>
                        <td><input onChange={handleChange} name="incomeTax" value={incomeTax}></input></td>
                    </tr>

                    <tr>
                        <td> Surcharge</td>
                        <td><input onChange={handleChange} name="Surcharge" value={Surcharge}></input></td>
                    </tr>

                    <tr>
                        <td>Education Cess</td>
                        <td> <input onChange={handleChange} name="educationCess" value={educationCess}></input></td>
                    </tr>

                    <tr>
                        <td>Secondary and higher education cess</td>
                        <td><input onChange={handleChange} name="secondaryHigherEducation" value={secondaryHigherEducation}></input></td>
                    </tr>

                    <tr>
                        <td>Total Tax Liability</td>
                        <td> <input onChange={handleChange} name="totalTaxLiability" value={totalTaxLiability}></input></td>
                    </tr>

                    <tr>
                        <td>Relief</td>
                        <td> <input onChange={handleChange} name="relief" value={relief}></input></td>
                    </tr>

                    <tr>
                        <td>TDS/TCS/MAT (AMT) Credit Utilized</td>
                        <td><input onChange={handleChange} name="TDS_TCS_MAT" value={TDS_TCS_MAT}></input></td>
                    </tr>

                    <tr>
                        <td>Assessed Tax</td>
                        <td> <input onChange={handleChange} name="assessedTax" value={assessedTax}></input></td>
                    </tr>

                </table>
                <div className={styles.buttonDiv}>
                    <button onClick={calculate}>Calculate</button>
                    <button>Reset</button>
                </div>

            </div>
        )
    }

    else if (taxpayer === "huf" || taxpayer === "aops") {
        return (
            <div onClick={AssessTax}>
                <div style={{ display: "flex" }}>
                    <div className={styles.topDiv}>
                        <h2>ADVANCE TAX CALCULATOR FOR FINANCIAL YEAR 2023-24</h2>
                    </div>

                    <div>
                        <button onClick={backBtn} className={styles.backBtn}>B a c k</button>
                    </div>
                </div>

                <table className={styles.table}>

                    <tr >

                        <td>Tax Payer</td>

                        <td>
                            <select onChange={(e) => handleChange(e)} name="taxpayer" value={taxpayer} >
                                <option value="">select</option>
                                <option value="individual">Individual</option>
                                <option value="huf">HUF</option>
                                <option value="aops">AOPs/BOI</option>
                                <option value="domestic">Domestic Company</option>
                                <option value="foreign">Foreign Company</option>
                                <option value="firms">Firms</option>
                                <option value="llp">LLP</option>
                                <option value="co-operative">Co-operative Society</option>
                            </select>
                        </td>
                    </tr>

                    <tr className={styles.tr2}>
                        <td>
                            <tr>Whether opting for taxation under Section 115BAC?</tr>
                            <tr>Net Taxable Income</tr>
                        </td>
                        <td>
                            <tr>
                                <select onChange={handleChange} name="Section115BAC" value={Section115BAC}>
                                    <option value="">select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>


                                </select>
                            </tr>
                            <tr><input onChange={handleChange} name="netTaxableIncome" value={netTaxableIncome} type="number"></input></tr>
                        </td>
                    </tr>

                    <tr>
                        <td> Income Tax</td>
                        <td><input name="incomeTax" value={incomeTax}></input></td>
                    </tr>

                    <tr>
                        <td> Surcharge</td>
                        <td><input name="Surcharge" value={Surcharge}></input></td>
                    </tr>

                    <tr>
                        <td> Health and Education Cess</td>
                        <td> <input name="educationCess" value={educationCess}></input></td>
                    </tr>

                    <tr>
                        <td>Total Tax Liability</td>
                        <td><input name="totalTaxLiability" value={totalTaxLiability}></input></td>
                    </tr>

                    <tr>
                        <td>Relief</td>
                        <td> <input onChange={handleChange} name="relief" value={relief}></input></td>
                    </tr>

                    <tr>
                        <td>TDS/TCS/MAT (AMT) Credit Utilized</td>
                        <td><input onChange={handleChange} name="TDS_TCS_MAT" value={TDS_TCS_MAT}></input></td>
                    </tr>

                    <tr>
                        <td>Assessed Tax</td>
                        <td> <input name="assessedTax" value={assessedTax}></input></td>
                    </tr>

                </table>
                <div className={styles.buttonDiv}>
                    <button onClick={calculate}>Calculate</button>
                    <button onClick={reset}>Reset</button>
                </div>

            </div>
        )
    }


    else if (taxpayer === "domestic" || taxpayer === "foreign" || taxpayer === "firms" || taxpayer === "llp") {
        return (
            <div>
                <div style={{ display: "flex" }}>
                    <div className={styles.topDiv}>
                        <h2>ADVANCE TAX CALCULATOR FOR FINANCIAL YEAR 2023-24</h2>
                    </div>

                    <div>
                        <button onClick={backBtn} className={styles.backBtn}>B a c k</button>
                    </div>
                </div>

                <table className={styles.table}>

                    <tr>

                        <td>Tax Payer</td>

                        <td>
                            <select onChange={(e) => handleChange(e)} name="taxpayer" value={taxpayer} >
                                <option value="">select</option>
                                <option value="individual">Individual</option>
                                <option value="huf">HUF</option>
                                <option value="aops">AOPs/BOI</option>
                                <option value="domestic">Domestic Company</option>
                                <option value="foreign">Foreign Company</option>
                                <option value="firms">Firms</option>
                                <option value="llp">LLP</option>
                                <option value="co-operative">Co-operative Society</option>
                            </select>
                        </td>
                    </tr>

                    <tr className={styles.tr2}>
                        <td>
                            <tr>Net Taxable Income</tr>
                        </td>
                        <td>
                            <tr><input onChange={handleChange} name="netTaxableIncome" value={netTaxableIncome} type="number"></input></tr>
                        </td>
                    </tr>



                    <tr>
                        <td> Income Tax</td>
                        <td><input onChange={handleChange} name="incomeTax" value={incomeTax}></input></td>
                    </tr>

                    <tr>
                        <td> Surcharge</td>
                        <td><input onChange={handleChange} name="Surcharge" value={Surcharge}></input></td>
                    </tr>

                    <tr>
                        <td> Health and Education Cess</td>
                        <td> <input onChange={handleChange} name="educationCess" value={educationCess}></input></td>
                    </tr>

                    <tr>
                        <td>Total Tax Liability</td>
                        <td><input onChange={handleChange} name="secondaryHigherEducation" value={secondaryHigherEducation}></input></td>
                    </tr>

                    <tr>
                        <td>Relief</td>
                        <td> <input onChange={handleChange} name="relief" value={relief}></input></td>
                    </tr>

                    <tr>
                        <td>TDS/TCS/MAT (AMT) Credit Utilized</td>
                        <td><input onChange={handleChange} name="TDS_TCS_MAT" value={TDS_TCS_MAT}></input></td>
                    </tr>

                    <tr>
                        <td>Assessed Tax</td>
                        <td> <input onChange={handleChange} name="assessedTax" value={assessedTax}></input></td>
                    </tr>

                </table>
                <div className={styles.buttonDiv}>
                    <button onClick={calculate}>Calculate</button>
                    <button>Reset</button>
                </div>

            </div>
        )
    }


    else if (taxpayer === "co-operative") {
        return (

            <div>
                <div style={{ display: "flex" }}>
                    <div className={styles.topDiv}>
                        <h2>ADVANCE TAX CALCULATOR FOR FINANCIAL YEAR 2023-24</h2>
                    </div>

                    <div>
                        <button onClick={backBtn} className={styles.backBtn}>B a c k</button>
                    </div>
                </div>

                <table className={styles.table}>

                    <tr >

                        <td>Tax Payer</td>

                        <td>
                            <select onChange={(e) => handleChange(e)} name="taxpayer" value={taxpayer} >
                                <option value="">select</option>
                                <option value="individual">Individual</option>
                                <option value="huf">HUF</option>
                                <option value="aops">AOPs/BOI</option>
                                <option value="domestic">Domestic Company</option>
                                <option value="foreign">Foreign Company</option>
                                <option value="firms">Firms</option>
                                <option value="llp">LLP</option>
                                <option value="co-operative">Co-operative Society</option>
                            </select>
                        </td>
                    </tr>

                    <tr className={styles.tr2}>
                        <td>
                            <tr>Co-operative society opted and qualify for section 115BAD</tr>
                            <tr>Co-operative society opted and qualify for section 115BAE</tr>
                            <tr>Net Taxable Income</tr>
                        </td>
                        <td>
                            <tr>
                                <select onChange={handleChange} name="Section115BAD" value={Section115BAD}>
                                    <option value="">select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>


                                </select>
                            </tr>
                            <tr>
                                <select onChange={handleChange} name="Section115BAE" value={Section115BAE}>
                                    <option value="">select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>


                                </select>
                            </tr>
                            <tr><input onChange={handleChange} name="netTaxableIncome" value={netTaxableIncome} type="number"></input></tr>
                        </td>
                    </tr>



                    <tr>
                        <td> Income Tax</td>
                        <td><input onChange={handleChange} name="incomeTax" value={incomeTax}></input></td>
                    </tr>

                    <tr>
                        <td> Surcharge</td>
                        <td><input onChange={handleChange} name="Surcharge" value={Surcharge}></input></td>
                    </tr>

                    <tr>
                        <td>Health and Education Cess</td>
                        <td> <input onChange={handleChange} name="educationCess" value={educationCess}></input></td>
                    </tr>

                    <tr>
                        <td>Total Tax Liability</td>
                        <td> <input onChange={handleChange} name="totalTaxLiability" value={totalTaxLiability}></input></td>
                    </tr>

                    <tr>
                        <td>Relief</td>
                        <td> <input onChange={handleChange} name="relief" value={relief}></input></td>
                    </tr>

                    <tr>
                        <td>TDS/TCS/MAT (AMT) Credit Utilized</td>
                        <td><input onChange={handleChange} name="TDS_TCS_MAT" value={TDS_TCS_MAT}></input></td>
                    </tr>

                    <tr>
                        <td>Assessed Tax</td>
                        <td> <input onChange={handleChange} name="assessedTax" value={assessedTax}></input></td>
                    </tr>

                </table>
                <div className={styles.buttonDiv}>
                    <button onClick={calculate}>Calculate</button>
                    <button>Reset</button>
                </div>

            </div>
        )
    }

    if (taxpayer === "individual") {
        return (

            <div>
                <div style={{ display: "flex" }}>
                    <div className={styles.topDiv}>
                        <h2>ADVANCE TAX CALCULATOR FOR FINANCIAL YEAR 2023-24</h2>
                    </div>

                    <div>
                        <button onClick={backBtn} className={styles.backBtn}>B a c k</button>
                    </div>
                </div>

                <table className={styles.table}>
                    <tbody>
                        <tr >

                            <td>Tax Payer</td>

                            <td>
                                <select onChange={(e) => handleChange(e)} name="taxpayer" value={taxpayer} >
                                    <option value="">select</option>
                                    <option value="individual">Individual</option>
                                    <option value="huf">HUF</option>
                                    <option value="aops">AOPs/BOI</option>
                                    <option value="domestic">Domestic Company</option>
                                    <option value="foreign">Foreign Company</option>
                                    <option value="firms">Firms</option>
                                    <option value="llp">LLP</option>
                                    <option value="co-operative">Co-operative Society</option>
                                </select>
                            </td>
                        </tr>

                        <tr className={styles.tr2}>
                            <td>
                                <tr>Whether opting for taxation under Section 115BAC?</tr>
                                <tr>Male / Female / Senior Citizen</tr>
                                <tr>Residential Status</tr>
                            </td>
                            <td>
                                <tr>
                                    <select onChange={handleChange} name="Section115BAC" value={Section115BAC}>
                                        <option value="">select</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </tr>

                                <tr>
                                    <select onChange={handleChange} name="gender" value={gender}>
                                        <option value="">select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="seniorCitizen">Senior Citizen</option>
                                        <option value="superSeniorCitizen">Super Senior Citizen</option>
                                    </select>
                                </tr>

                                <tr>
                                    <select onChange={handleChange} name="residentialStatus" value={residentialStatus}>
                                        <option value="">select</option>
                                        <option value="male">Resident</option>
                                        <option value="female">Non-Resident</option>
                                        <option value="seniorCitizen">Not Ordinary Resident</option>
                                    </select>
                                </tr>
                            </td>
                        </tr>



                        <tr>
                            <td>Income from Salary (Income from salary after standard deduction of Rs.50000.)</td>
                            <td><input onChange={handleChange} name="incomeFromSalary" value={incomeFromSalary}></input></td>
                        </tr>

                        <tr>
                            <td>Income From House Property</td>
                            <td><input onChange={handleChange} name="incomeFromHouseProperty" value={incomeFromHouseProperty}></input></td>
                        </tr>
                    </tbody>

                    {/* <tbody className={styles.IncomeFromHouseProperty}>
                        <tr>
                            <td>a. Income from Self-occupied Property</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>Interest Paid/Payable on Housing Loan</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1. Interest on Housing Loan</td>
                            <td><input onChange={handleChange} name="interestonHousingLoan" value={interestonHousingLoan}></input></td>
                        </tr>

                        <tr>
                            <td>Income from self-occupied house property</td>
                            <td><input onChange={handleChange} name="selfOccupiedHouseProperty" value={selfOccupiedHouseProperty}></input></td>
                        </tr>

                        <tr>
                            <td>b. Income from Let-out Property</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>1. Annual Letable Value/Rent Received or Receivable</td>
                            <td><input onChange={handleChange} name="annualLetableValue" value={annualLetableValue}></input></td>
                        </tr>

                        <tr>
                            <td>2. Less: Municipal Taxes Paid During the Year</td>
                            <td><input onChange={handleChange} name="municipalTaxesPaid" value={municipalTaxesPaid}></input></td>
                        </tr>
                    </tbody> */}

                    <tr>
                        <td>3. Less:Unrealized Rent</td>
                        <td><input onChange={handleChange} name="unrealizedRent" value={unrealizedRent}></input></td>
                    </tr>

                    <tr>
                        <td>4. Net Annual Value (1-(2+3))</td>
                        <td><input onChange={handleChange} name="netAnnualValue" value={netAnnualValue}></input></td>
                    </tr>

                    <tr>
                        <td>Less: Deductions from Net Annual Value</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>i. Standard Deduction @ 30% of Net Annual Value</td>
                        <td><input onChange={handleChange} name="standardDeduction@30%" value={standardDeduction}></input></td>
                    </tr>

                    <tr>
                        <td>ii. Interest on Housing Loan</td>
                        <td><input onChange={handleChange} name="interestOnHousingLoan2" value={interestOnHousingLoan2}></input></td>
                    </tr>

                    <tr>
                        <td>Income from Let-out House Property</td>
                        <td><input onChange={handleChange} name="incomeFromLetOutHouse" value={incomeFromLetOutHouse}></input></td>
                    </tr>







                    <tr>
                        <td>Education Cess</td>
                        <td> <input onChange={handleChange} name="educationCess" value={educationCess}></input></td>
                    </tr>

                    <tr>
                        <td>Secondary and higher education cess</td>
                        <td><input onChange={handleChange} name="secondaryHigherEducation" value={secondaryHigherEducation}></input></td>
                    </tr>

                    <tr>
                        <td>Total Tax Liability</td>
                        <td> <input onChange={handleChange} name="totalTaxLiability" value={totalTaxLiability}></input></td>
                    </tr>

                    <tr>
                        <td>Relief</td>
                        <td> <input onChange={handleChange} name="relief" value={relief}></input></td>
                    </tr>

                    <tr>
                        <td>TDS/TCS/MAT (AMT) Credit Utilized</td>
                        <td><input onChange={handleChange} name="TDS_TCS_MAT" value={TDS_TCS_MAT}></input></td>
                    </tr>

                    <tr>
                        <td>Assessed Tax</td>
                        <td> <input onChange={handleChange} name="assessedTax" value={assessedTax}></input></td>
                    </tr>

                </table>
                <div className={styles.buttonDiv}>
                    <button onClick={calculate}>Calculate</button>
                    <button>Reset</button>
                </div>

            </div>
        )
    }
} 