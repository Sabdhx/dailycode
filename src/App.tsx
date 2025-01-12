import "./App.css";
import useFormHook from "./hook/useFormHook";
import First from "./components/first";
import Second from "./components/Second";
import Third from "./components/Third";
import { useState, useEffect } from "react";

export type DataType = {
  fullname: string;
  email: string;
  phoneNumber: string;
  adress: string;
  city: string;
  postalAdress: string;
  dateOfBirth: string;
  gender: string;
  hobby: string;
};

export const INITIALDATA: DataType = {
  fullname: "",
  email: "",
  phoneNumber: "",
  adress: "",
  city: "",
  postalAdress: "",
  dateOfBirth: "",
  gender: "",
  hobby: "",
};

function App() {
  const [data, setData] = useState<DataType>(INITIALDATA);
  const [defaultData, setDefaultData] = useState<DataType[]>([]); // Store a single object instead of an array
  const [booleanData, setBooleanData] = useState(false);
  const updateFields = (fields: Partial<DataType>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  // Use useEffect to add data to defaultData only once when all fields are filled
  // Only update when data changes and defaultData is null

  console.log("default data ", defaultData);

  const { next, step, index, steps, backWard, firststep } = useFormHook([
    <First key={0} {...data} updateFields={updateFields} />,
    <Second key={1} {...data} updateFields={updateFields} />,
    <Third key={2} {...data} updateFields={updateFields} />,
  ]);

  console.log(data);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    next();
  };

  const buttonText = index < steps.length - 1 ? "Next" : "Finish";
  useEffect(() => {
    setBooleanData(buttonText === "Finish" ? true : false);
  }, [buttonText]);
  useEffect(() => {
    // Check if all fields are filled
    if (booleanData === true) {
      // Only update defaultData if it's not already set

      setDefaultData((prev) => [...prev, { ...data }]); // Store the filled data as a single object
    }
  }, [booleanData]);
  console.log(booleanData);
  return (
    <>
      <div className="">
        <form onSubmit={onSubmit}>
          {step}
          {!firststep && (
            <button
              onClick={backWard}
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300"
            >
              Back
            </button>
          )}

          <button
            type="submit"
            className=" mx-5 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
