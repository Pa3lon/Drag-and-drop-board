import React, { useState } from "react";
import Label from "./Label";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useEffect } from "react";

const labels = [
  {
    title: "Forespørsel",
    id: 1,
  },
  {
    title: "Bestilt",
    id: 2,
  },
  {
    title: "Tilbud",
    id: 3,
  },
  {
    title: "Leveranse",
    id: 4,
  },
  {
    title: "Levert",
    id: 5,
  },
];

const initItems = [
  {
    ids: 1,
    title: "Sveisen Legekontor",
    label_id: 1,
    address: "Totenvegen 26A",
    created_at: "2022-03-03 14:00:00",
    responsible: "Knut Hansen",
  },
  {
    ids: 2,
    title: "Toten Legekontor",
    label_id: 2,
    address: "Totenvegen 26A",
    created_at: "2022-03-03 14:00:00",
    responsible: "Knut Hansen",
  },
  {
    ids: 3,
    title: "Kurts Legekontor",
    label_id: 3,
    address: "Totenvegen 26A",
    created_at: "2022-03-03 14:00:00",
    responsible: "Knut Hansen",
  },
  {
    ids: 4,
    title: "Finns Legekontor",
    label_id: 3,
    address: "Totenvegen 26A",
    created_at: "2022-03-03 14:00:00",
    responsible: "Knut Hansen",
  },
];

const Board = () => {
  const [items, setItems] = useState(initItems);

  const updateItem = (item, newLabel) => {
    setItems(
      items.map((i) =>
        i.ids === item.ids ? { ...item, label_id: newLabel } : i
      )
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-full">
        <div className="flex space-x-5">
          {labels.map((label) => (
            <Label
              updateItem={updateItem}
              key={label.id}
              label={label}
              items={items.filter((i) => i.label_id === label.id)}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default Board;
