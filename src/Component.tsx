import "./index.css";
export default function Component(props: {
  id: string;
  Weightage: number;
  Occurence: number;
  Obtainedmarks: number[];
  Name: string;
  Totalmarks: number[];
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
}) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    props.setComponentsdata((prevarray) =>
      prevarray.map((componentdata) =>
        props.id === componentdata.id
          ? {
              ...componentdata,
              [name]: value,
              ["Obtainedmarks"]: Array.from(
                {
                  length:
                    name === "Occurence" ? Number(value) : props.Occurence,
                },
                (_) => 0
              ),
              ["Totalmarks"]: Array.from(
                {
                  length:
                    name === "Occurence" ? Number(value) : props.Occurence,
                },
                (_) => 0
              ),
            }
          : componentdata
      )
    );
  }

  return (
    <div className="Component">
      <div className="inputs">
        <div className="input">
          <p className="label">Component Name</p>
          <input
            type="text"
            id="Name"
            placeholder=""
            className="inputstyle"
            name="Name"
            value={props.Name}
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <p className="label">Weightage % (Total)</p>
          <input
            type="number"
            id="Weightage"
            placeholder="Weightage"
            className="inputstyle"
            name="Weightage"
            value={props.Weightage}
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <p className="label">Occurences</p>
          <input
            type="number"
            id="Occurences"
            placeholder="Occurences"
            className="inputstyle"
            name="Occurence"
            value={props.Occurence}
            onChange={handleChange}
          />
        </div>
      </div>
      <hr />
    </div>
  );
}
