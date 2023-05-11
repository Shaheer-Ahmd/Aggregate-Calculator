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
      Obtainedmarks: 0,
      Totalmarks: 0,
    },
  ]);
  const components = componentsdata.map((componentdata) => (
    <Component
      key={componentdata.id}
      Name={componentdata.Name}
      id={componentdata.id}
      Weightage={componentdata.Weightage}
      Occurence={componentdata.Occurence}
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
  console.log("rendered!");
  useEffect(() => {
    if (submitted) {
      let totalweightage = 0;
      let total = 0;
      componentsdata.forEach((componentdata) => {
        totalweightage += Number(componentdata.Weightage);
        total +=
          (componentdata.Obtainedmarks / componentdata.Totalmarks) *
          componentdata.Weightage;
        console.log(totalweightage);
      });
      if (totalweightage / 100 === 1) {
        setAggregate(total);
      } else {
        alert("Total weightage should be 100");
      }
    }
  }, [submitted]);

  return (
    <div className="Main">
      <h1 className="Heading">{JSON.stringify(componentsdata)}</h1>
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
                    Obtainedmarks: 0,
                    Totalmarks: 0,
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
          <button onClick={() => setSubmitted((p) => !p)}>Calculate</button>
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
