import React from "react";


const CardList = ({heading, listName}) => {
  return (
    <div>
      <h1 className="text-pink text-5xl font-semibold">{heading}</h1>

      {listName.map((item, index) => (
        <div className="m-10">
          <div className="bg-teal h-20 rounded-xl flex items-center justify-between p-5">
            <div className="text-3xl font-bold text-black">{item.name}</div>
            <div className="text-3xl font-bold ">{item.regno}</div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
