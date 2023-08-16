import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
export default function (props: {
  Name: string;
  aggregate: number;
  Weightage: number;
  Occurence: number;
  Obtainedmarks: number[];
  id: string;
  Totalmarks: number[];
  Done: boolean;
  setComponentsdata: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        Weightage: number;
        Occurence: number;
        Name: string;
        Obtainedmarks: number[];
        Totalmarks: number[];
      }[]
    >
  >;
  setAggregate: React.Dispatch<React.SetStateAction<number>>;
}) {
  function handleChangetotm(
    event: React.ChangeEvent<HTMLInputElement>,
    occurence: number
  ) {
    const { name, value } = event.target;
    props.setComponentsdata((prevarray) =>
      prevarray.map((componentdata) =>
        props.id === componentdata.id
          ? {
              ...componentdata,
              [name]: componentdata.Totalmarks.map((p, index) =>
                occurence - 1 === index ? value : p
              ),
            }
          : componentdata
      )
    );
  }
  function handleChangeobtm(
    event: React.ChangeEvent<HTMLInputElement>,
    occurence: number
  ) {
    const { name, value } = event.target;
    props.setComponentsdata((prevarray) =>
      prevarray.map((componentdata) =>
        props.id === componentdata.id
          ? {
              ...componentdata,
              [name]: componentdata.Obtainedmarks.map((p, index) =>
                occurence - 1 === index ? value : p
              ),
            }
          : componentdata
      )
    );
  }
  const [instances, setInstances] = useState<any>([]);
  useEffect(() => {
    const occurencearray = Array.from(
      { length: props.Occurence },
      (_, i) => i + 1
    );
    setInstances(
      occurencearray.map((occurence) => (
        <div>
          <div className="rowflex">
            <p className="labelcentered">
              {props.Name + " " + (props.Occurence > 1 ? occurence.toString() : "")}
            </p>
            <div className="input">
              <p className="label">Obtained Marks</p>
              <input
                type="number"
                className="inputstyle"
                name="Obtainedmarks"
                value={props.Obtainedmarks[occurence - 1]}
                onChange={(event) => handleChangeobtm(event, occurence)}
              />
            </div>
            <div className="input">
              <p className="label">Total Marks</p>
              <input
                type="number"
                className="inputstyle"
                name="Totalmarks"
                value={props.Totalmarks[occurence - 1]}
                onChange={(event) => handleChangetotm(event, occurence)}
              />
            </div>
          </div>
          <hr />
        </div>
      ))
    );
  }, [props.Obtainedmarks, props.Totalmarks, props.Occurence, props.Name]);
  return instances;
}
