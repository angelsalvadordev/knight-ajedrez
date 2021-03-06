export const ItemTypes = {
  KNIGHT: "knight",
};

let knightPosition = [0, 0];
let observer = null;

const emitChange = () => {
  observer(knightPosition);
};

export const observe = (o) => {
  // const randPos = () => Math.floor(Math.random() * 8);
  // setInterval(() => receive([randPos(), randPos()]), 500);
  if (observer) {
    throw new Error("Multiple observers not implemented");
  }

  observer = o;
  emitChange();
};

export const moveKnight = (toX, toY) => {
  knightPosition = [toX, toY];
  emitChange();
};

export function canMoveKnight(toX, toY) {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  );
}
