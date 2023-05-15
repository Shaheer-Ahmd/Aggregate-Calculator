import { useState, useEffect } from "react";
import Component from "./Component.tsx";
import { nanoid } from "nanoid";
import Gradedata from "./Gradedata.tsx";
import "./index.css";
export default function App() {
  const [componentsdata, setComponentsdata] = useState([
    {
      id: nanoid(),
      Weightage: 0,
      Occurence: 0,
      Name: "",
      Obtainedmarks: [0],
      Totalmarks: [0],
    },
  ]);
  const components = componentsdata.map((componentdata) => (
    <Component
      key={componentdata.id}
      Name={componentdata.Name}
      id={componentdata.id}
      Weightage={componentdata.Weightage}
      Occurence={componentdata.Occurence}
      Obtainedmarks={componentdata.Obtainedmarks}
      Totalmarks={componentdata.Totalmarks}
      setComponentsdata={setComponentsdata}
    />
  ));
  const [aggregate, setAggregate] = useState(0);
  const [done, setDone] = useState(false);

  const aftercalculations = componentsdata.map((componentdata) => (
    <Gradedata
      Name={componentdata.Name}
      Done={done}
      setAggregate={setAggregate}
      aggregate={aggregate}
      Weightage={componentdata.Weightage}
      Occurence={componentdata.Occurence}
      id={componentdata.id}
      Obtainedmarks={componentdata.Obtainedmarks}
      Totalmarks={componentdata.Totalmarks}
      setComponentsdata={setComponentsdata}
    />
  ));
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      let total = 0;
      let totalweightage = 0;
      componentsdata.forEach((componentdata) => {
        totalweightage += Number(componentdata.Weightage)
        componentdata.Obtainedmarks.forEach((element, index) => {
          total +=
            (element / componentdata.Totalmarks[index]) *
            (componentdata.Weightage/componentdata.Occurence);
          });});
        if (totalweightage == 100) {
          setAggregate(total);
        } else {
          alert("The Total Weightage Must be 100%!");
        }
      ;
    }
  }, [submitted]);

  function Reset() {
    setComponentsdata([
      {
        id: nanoid(),
        Weightage: 0,
        Occurence: 0,
        Name: "",
        Obtainedmarks: [0],
        Totalmarks: [0],
      },
    ]);
    setSubmitted(false);
    setDone(false);
  }

  return (
    <div className="Main">
      <h1 className="Heading">Aggregate Calculator</h1>
      {!done ? (
        <div className="beforecalculation">
          <div className="Components">{components}</div>
          <div className="rowflex">
            <button
              onClick={() =>
                setComponentsdata((p) => [
                  ...p,
                  {
                    id: nanoid(),
                    Weightage: 0,
                    Occurence: 0,
                    Name: "",
                    Obtainedmarks: [0],
                    Totalmarks: [0],
                  },
                ])
              }
            >
              Add new component
            </button>
            <button
              onClick={() => setComponentsdata((p) => p.slice(0, p.length - 1))}
            >
              Remove last component
            </button>
          </div>
          <button onClick={() => setDone((prevDone) => !prevDone)}>Next</button>
        </div>
      ) : (
        <div>
          <div>{aftercalculations}</div>
          <div className = "rowflex">
          <button onClick={() => setSubmitted((p) => !p)}>Calculate</button>
          {submitted ? (<button onClick = {Reset}>Reset</button>):(<div></div>)}
          </div>
        </div>
      )}
      {submitted && (
        <p className="Heading">
          Your aggregate is: {aggregate.toPrecision(4)}%{" "}
        </p>
      )}
    </div>
  );
}
