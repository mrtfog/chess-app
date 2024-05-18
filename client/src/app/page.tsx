"use client";

import { getChessBoard } from "@/lib/constants";
import { useEffect, useState } from "react";

interface ChessBoardProps {
  key: string;
  label: string;
  color: string;
}

export default function Home() {
  const [chessBoard, setChessBoard] = useState<ChessBoardProps[] | null>(null);

  useEffect(() => {
    const board = getChessBoard();
    if (board) setChessBoard(board);
  }, []);

  console.log(chessBoard);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World
    </main>
  );
}
