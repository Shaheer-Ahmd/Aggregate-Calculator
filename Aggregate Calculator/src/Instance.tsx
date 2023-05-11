import React from "react";

export default function Instance(props: {
  Name: string;
  aggregate: number;
  Weightage: number;
  Occurence: number;
  Obtainedmarks: number;
  id: string;
  Totalmarks: number;
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
  return (
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
  );
}
