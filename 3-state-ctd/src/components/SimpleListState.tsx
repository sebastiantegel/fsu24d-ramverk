import { useState } from "react";

export const SimpleListState = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 1, 2, 3, 5, 8, 13]);

  // 1. Lägga till tal
  const addNumber = () => {
    setNumbers([...numbers, 21]);
  };

  // 2. Ta bort tal (filter)
  const removeNumber = (numberToRemove: number) => {
    // console.log(numbers.filter((n) => n !== numberToRemove));

    setNumbers(numbers.filter((n) => n !== numberToRemove));
  };

  // 3. Ändra tal (map)
  const doubleNumber = (index: number) => {
    // console.log(
    //   numbers.map((n, i) => {
    //     if (i === index) {
    //       return n * 2;
    //     } else {
    //       return n;
    //     }
    //   })
    // );

    setNumbers(
      numbers.map((n, i) => {
        if (i === index) {
          return n * 2;
        } else {
          return n;
        }
      })
    );
  };

  return (
    <>
      <button onClick={addNumber}>Lägg till tal</button>
      <ul>
        {numbers.map((n, i) => (
          <li key={i}>
            <span>{n}</span>
            <button
              onClick={() => {
                removeNumber(n);
              }}
            >
              Ta bort
            </button>
            <button
              onClick={() => {
                doubleNumber(i);
              }}
            >
              Fördubbla
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
