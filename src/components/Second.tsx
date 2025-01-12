import BodyOfForms from "./BodyOfForms";
type props = {
  adress: string;
  city: string;
  postalAdress: string;
};

type NewFormData = props & {
  updateFields: (fields: Partial<props>) => void;
};
function Second({ adress, city, postalAdress, updateFields }: NewFormData) {
  const secondary = "secondary information";

  return (
    <>
      <BodyOfForms title={secondary}>
        <div className="my-5">
          <label htmlFor="userName" className="mx-4"></label>
          <input
            value={adress}
          onChange={(e)=>updateFields({adress : e.target.value})}
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
            value={city}
            onChange={(e)=>updateFields({city : e.target.value})}

            id="userName"
            className="px-[4%] py-[2%] bg-gray-200 text-black rounded-[10px]"
          />
        </div>

        <div className="my-5">
          <label htmlFor="userName" className="mx-4"></label>
          <input
            type="text"
            value={postalAdress}
            onChange={(e)=>updateFields({postalAdress : e.target.value})}

            id="userName"
            className="px-[4%] py-[2%] bg-gray-200 text-black rounded-[10px]"
          />
        </div>
      </BodyOfForms>
    </>
  );
}

export default Second;
