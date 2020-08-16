import create from 'zustand';

import { Board } from '../types/model';

export const [useSelectedBoard] = create<{
  selectedBoardId?: number;
  selectedBoard?: Board;
  setSelectedBoard: (selectedBoard: Board) => void;
}>((set) => ({
  setSelectedBoard: (selectedBoard) =>
    set(() => ({ selectedBoard, selectedBoardId: selectedBoard?.id })),
}));

export const [useLastListPosition] = create<{
  lastPosition: number;
  setLastPosition: (lastPosition: number) => void;
}>((set) => ({
  lastPosition: 0,
  setLastPosition: (lastPosition) => set(() => ({ lastPosition })),
}));
