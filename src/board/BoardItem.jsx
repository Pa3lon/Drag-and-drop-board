import React from "react";
import { useDrag } from "react-dnd";

const BoardItem = (props) => {
  const [, drag] = useDrag(
    () => ({ type: "box", item: props.item }),
    [props.item]
  );

  return (
    <div
      ref={drag}
      className="flex text-xs space-y-5 flex-col bg-white border-2 border-gray-300 shadow-lg py-4 px-2 cursor-grab mx-1 opacity-75 rounded-lg"
    >
      <div>
        <h2 className="font-bold hover:underline cursor-pointer">
          {props.item.title}
        </h2>
      </div>
      <div>
        <p>{props.item.created_at}</p>
      </div>
    </div>
  );
};

export default BoardItem;
