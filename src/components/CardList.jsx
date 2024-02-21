import React from "react";


const CardList = ({heading, listName}) => {
  return (
    <div>
      <h1 className="font-semibold text-lg text-pink md:text-4xl">{heading}</h1>

      {listName.map((item, index) => (
        <div className="m-6">
          <div className="bg-teal h-10 text md:h-20 rounded-xl flex items-center justify-between p-3">
            <div className="text-left text-xs md:text-3xl font-bold text-grey ">{item.name}</div>
            <div className="text-sm md:text-3xl font-bold ">{item.regno}</div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
