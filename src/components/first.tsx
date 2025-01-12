import { DataType } from "../App";
import BodyOfForms from "./BodyOfForms";
type props = {
  fullname: string;
  email: string;
  phoneNumber: string;
};

type UserFormProps = props & {
  updateFields: (fields: Partial<props>) => void;
};
function First({ fullname, email, phoneNumber, updateFields }: UserFormProps) {
  const primary = "primary Information";
  return (
    <>
      <BodyOfForms title={primary}>
        <div className="my-5">
          <label htmlFor="userName" className="mx-4"></label>
          <input
            value={fullname}
            onChange={(e) => {
              updateFields({ fullname: e.target.value });
            }}
            required
            type="text"
            autoFocus
            id="userName"
            className="px-[4%] py-[2%] bg-gray-200 text-black rounded-[10px]"
          />
        </div>

        <div className="my-5">
          <label htmlFor="userName" className="mx-4"></label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => {
              updateFields({ email: e.target.value });
            }}
            id="userName"
            className="px-[4%] py-[2%] bg-gray-200 text-black rounded-[10px]"
          />
        </div>

        <div className="my-5">
          <label htmlFor="userName" className="mx-4"></label>
          <input
            type="number"
            required
            value={phoneNumber}
            onChange={(e) => {
              updateFields({ phoneNumber: e.target.value });
            }}
            id="userName"
            className="px-[4%] py-[2%] bg-gray-200 text-black rounded-[10px]"
          />
        </div>
      </BodyOfForms>
    </>
  );
}

export default First;
