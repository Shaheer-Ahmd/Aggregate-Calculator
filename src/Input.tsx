import React from 'react'

export default function input(props : {name: string, value:string | number ,type: string, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void}) {
  return (
    <div className = "input">
                <p className = "label">{props.name}</p>
                <input type={props.type}  className = "inputstyle" name = {props.name} value = {props.value} onChange={props.handleChange} />
    </div>
  )
}
