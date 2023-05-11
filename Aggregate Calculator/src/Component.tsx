import "./index.css"
import { useState } from "react"
// import Input from "./input.tsx"
export default function Component(props: {id: string, Weightage: number, Occurence: number,Name:string, setComponentsdata: React.Dispatch<React.SetStateAction<{ id: string; Weightage: number; Occurence: number; Name: string; Obtainedmarks: number; Totalmarks: number; }[]>>}) {
  
  function handleChange(event : React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target
    props.setComponentsdata((prevarray) => 
    (prevarray).map(componentdata => props.id===componentdata.id ? 
        {...componentdata, [name]: value} : componentdata))}
//    const [inputs] = useState([{name: "Name", type:"text", value: props.Name}
//    ,{name: "Weightage", type:"number", value: props.Weightage}
//    ,{name: "Occurence", type:"number", value: props.Occurence}])
//    const inputelements = inputs.map((input) => <Input name = {input.name} type = {input.type} value = {input.value} handleChange = {handleChange} /> )
    return (
    <div className = "Component">
        
        <div className = "inputs">
            {/* {inputelements} */}
             <div className = "input">
                <p className = "label">Component Name</p>
                <input type="text" id = "Name" placeholder="" className = "inputstyle" name = "Name" value = {props.Name} onChange={handleChange} />
                
            </div>
            
            <div className = "input">
                <p className = "label">Weightage %</p>
                <input type="number" id = "Weightage" placeholder="Weightage" className = "inputstyle" name = "Weightage" value = {props.Weightage} onChange={handleChange} />
                
            </div>
        
            <div className = "input">
                <p className = "label">Occurences</p>
                <input type="number" id = "Occurences" placeholder="Occurences" className = "inputstyle" name = "Occurence" value = {props.Occurence} onChange={handleChange} />
            </div> 
        </div>
        <hr />
    </div>

    )
}