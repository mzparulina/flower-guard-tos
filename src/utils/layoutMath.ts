import type { Position } from "../types/flower";

export const NODE_SIZE = 170;
export const NODE_PADDING = 10;
export const SLOT_GAP = 8;
export const MARGIN = 36;

export const SLOT_SIZE =
  (NODE_SIZE - NODE_PADDING * 2 - SLOT_GAP * 2) / 3;

export const STEP_PX = SLOT_SIZE + SLOT_GAP;

export interface LayoutBounds {
  minRow: number;
  maxRow: number;
  minCol: number;
  maxCol: number;
  shiftRow: number;
  shiftCol: number;
  width: number;
  height: number;
}

export function getLayoutBounds(
  positions: Record<string, Position>
): LayoutBounds {
  const values = Object.values(positions);

  const minRow = Math.min(...values.map(p => p.row));
  const maxRow = Math.max(...values.map(p => p.row));
  const minCol = Math.min(...values.map(p => p.col));
  const maxCol = Math.max(...values.map(p => p.col));

  const shiftRow = -minRow;
  const shiftCol = -minCol;

  return {
    minRow,
    maxRow,
    minCol,
    maxCol,
    shiftRow,
    shiftCol,
    width: MARGIN * 2 + (maxCol + shiftCol) * STEP_PX + NODE_SIZE,
    height: MARGIN * 2 + (maxRow + shiftRow) * STEP_PX + NODE_SIZE
  };
}

export function toPixelLayout(
  positions: Record<string, Position>,
  bounds: LayoutBounds
) {
  return Object.fromEntries(
    Object.entries(positions).map(([flowerId, pos]) => [
      flowerId,
      {
        x: MARGIN + (pos.col + bounds.shiftCol) * STEP_PX,
        y: MARGIN + (pos.row + bounds.shiftRow) * STEP_PX
      }
    ])
  ) as Record<string, { x: number; y: number }>;
}