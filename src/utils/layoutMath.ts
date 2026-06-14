import type { Position } from "../types/flower";

export const NODE_SIZE = 170;
export const NODE_PADDING = 10;
export const SLOT_GAP = 8;
export const MARGIN = 36;

export const SLOT_SIZE =
  (NODE_SIZE - NODE_PADDING * 2 - SLOT_GAP * 2) / 3;

export const STEP_PX = SLOT_SIZE + SLOT_GAP;

export function getLayoutBounds(
  positions: Record<string, Position>
) {
  const values = Object.values(positions);

  const minRow = Math.min(...values.map(p => p.row));
  const maxRow = Math.max(...values.map(p => p.row));
  const minCol = Math.min(...values.map(p => p.col));
  const maxCol = Math.max(...values.map(p => p.col));

  const shiftRow = -minRow;
  const shiftCol = -minCol;

  return {
    shiftRow,
    shiftCol,
    width: MARGIN * 2 + (maxCol - minCol) * STEP_PX + NODE_SIZE,
    height: MARGIN * 2 + (maxRow - minRow) * STEP_PX + NODE_SIZE
  };
}

export function toPixelLayout(
  positions: Record<string, Position>,
  bounds: {
    shiftRow: number;
    shiftCol: number;
  }
) {
  return Object.fromEntries(
    Object.entries(positions).map(([id, pos]) => [
      id,
      {
        x: MARGIN + (pos.col + bounds.shiftCol) * STEP_PX,
        y: MARGIN + (pos.row + bounds.shiftRow) * STEP_PX
      }
    ])
  ) as Record<string, { x: number; y: number }>;
}