export const getChessBoard = () => {
  const chessboard = [];

  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const label = `${letters[j]}${8 - i}`;
      const color = (i + j) % 2 === 0 ? "light" : "dark";
      chessboard.push({
        key: `${label}-square`,
        label: label,
        color: color,
      });
    }
  }

  return chessboard;
};
