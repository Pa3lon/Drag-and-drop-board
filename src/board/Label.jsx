import React, { useState } from "react";
import { useEffect } from "react";
import BoardItem from "./BoardItem";
import { useDrop } from "react-dnd";

const Label = (props) => {
  const [items, setItems] = useState([]);

  const [, drop] = useDrop(
    () => ({
      accept: "box",
      drop(item, monitor) {
        monitor.didDrop();
        props.updateItem(item, props.label.id);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
      }),
    }),
    [items]
  );

  useEffect(() => {
    setItems(props.items);
  }, [props.items]);

  return (
    <div ref={drop} className="w-1/6">
      <div className="text-center py-2 rounded-t-lg text-indigo-100 font-semibold opacity-80 bg-indigo-800">
        <h2>{props.label.title}</h2>
      </div>
      <div className="bg-gray-100 border shadow-xl border-indigo-100 pb-16 rounded-b-lg">
        <ul className="flex flex-col space-y-1 py-1">
          {items.map((item, index) => (
            <BoardItem key={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Label;
