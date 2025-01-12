import React from "react";
import BodyOfForms from "./BodyOfForms";

type props = {
  dateOfBirth: string;
  gender: string;
  hobby: string;
};

type UserFormData = props & {
  updateFields: (fields: Partial<props>) => void;
};

function Third({ dateOfBirth, gender, hobby, updateFields }: UserFormData) {
  const third = "last information";

  return (
    <>
      <BodyOfForms title={third}>
        <div className="my-5">
          <label htmlFor="userName" className="mx-4"></label>
          <input
            value={dateOfBirth}
            onChange={(e) => {
              updateFields({ dateOfBirth: e.target.value });
            }}
            type="text"
            autoFocus
            id="userName"
            className="px-[4%] py-[2%] bg-gray-200 text-black rounded-[10px]"
          />
        </div>

        <div className="my-5">
          <label htmlFor="userName" className="mx-4"></label>
          <input
            type="text"
            value={gender}
            onChange={(e) => {
              updateFields({ gender: e.target.value });
            }}
            id="userName"
            className="px-[4%] py-[2%] bg-gray-200 text-black rounded-[10px]"
          />
        </div>

        <div className="my-5">
          <label htmlFor="userName" className="mx-4"></label>
          <input
            type="text"
            value={hobby}
            onChange={(e) => {
              updateFields({ hobby: e.target.value });
            }}
            id="userName"
            className="px-[4%] py-[2%] bg-gray-200 text-black rounded-[10px]"
          />
        </div>
      </BodyOfForms>
    </>
  );
}

export default Third;
