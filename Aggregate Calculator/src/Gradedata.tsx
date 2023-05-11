import React from "react";
import { useEffect } from "react";
import "./index.css";
import Instance from "./Instance.tsx";
export default function (props: {
  Name: string;
  aggregate: number;
  Weightage: number;
  Occurence: number;
  Obtainedmarks: number;
  id: string;
  Totalmarks: number;
  Done: boolean;
  setComponentsdata: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        Weightage: number;
        Occurence: number;
        Name: string;
        Obtainedmarks: number;
        Totalmarks: number;
      }[]
    >
  >;
  setAggregate: React.Dispatch<React.SetStateAction<number>>;
}) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    props.setComponentsdata((prevarray) =>
      prevarray.map((componentdata) =>
        props.id === componentdata.id
          ? { ...componentdata, [name]: value }
          : componentdata
      )
    );
  }
  useEffect(() => {
    const occurencearray = Array.from(
      { length: props.Occurence },
      (_, i) => i + 1
    );
    console.log(occurencearray);
    // const instances = occurencearray.map( id=><Instance />)
  }, []);
  return (
    <div>
      <div className="rowflex">
        <p className="Heading">{props.Name}</p>
        <div className="input">
          <p className="label">Obtained Marks</p>
          <input
            type="number"
            className="inputstyle"
            name="Obtainedmarks"
            value={props.Obtainedmarks}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <p className="label">Total Marks</p>
          <input
            type="number"
            className="inputstyle"
            name="Totalmarks"
            value={props.Totalmarks}
            onChange={handleChange}
          />
        </div>
      </div>
      <hr />
    </div>
  );
}
