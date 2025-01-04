import React, { useState } from "react";
import Slider from "./Slider";
import Buttons from "./Buttons";

const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: { min: 0, max: 200 },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: { min: 0, max: 200 },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: { min: 0, max: 200 },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: { min: 0, max: 100 },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: { min: 0, max: 100 },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: { min: 0, max: 360 },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: { min: 0, max: 20 },
    unit: "px",
  },
];

function EditingBoard() {
  const [values, setValues] = useState(DEFAULT_OPTIONS);
  const [selectedData, setSelectedData] = useState(0);

  const selectedDataInfo = values[selectedData];

  const handleChangevalue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => {
      return prev.map((item, index) => {
        if (index !== selectedData) return item;
        return { ...item, value: Number(target.value) };
      });
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center p-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[90%] h-[90%] flex">
        {/* Image Section */}
        <div className="w-2/3 relative">
          <img
            src="https://th.bing.com/th/id/OIP.SFePjxiVA220cC8hFaLx7QHaE5?rs=1&pid=ImgDetMain"
            className="w-full h-full object-cover"
            style={{
              filter: values
                .map((item) => `${item.property}(${item.value}${item.unit})`)
                .join(" "),
            }}
          />
        </div>

        {/* Button Section */}
        <div className="w-1/3 bg-gray-100 p-10 flex flex-col gap-5 justify-center items-center">
          {values.map((item, index) => (
            <Buttons
              key={index}
              active={index === selectedData}
              name={item.name}
              property={item.property}
              value={item.value}
              range={item.range}
              unit={item.unit}
              index={index}
              handleSelection={() => setSelectedData(index)}
            />
          ))}
        </div>

        {/* Render Slider only if selectedDataInfo exists */}
        {selectedDataInfo && (
          <Slider
            handleChangevalue={handleChangevalue}
            min={selectedDataInfo.range.min}
            max={selectedDataInfo.range.max}
            property={selectedDataInfo.property}
            value={selectedDataInfo.value}
            unit={selectedDataInfo.unit}
          />
        )}
      </div>
    </div>
  );
}

export default EditingBoard;
