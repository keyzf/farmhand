const { freeze } = Object;

export const FERTILIZER_BONUS = 0.5;
export const FERTILIZER_ITEM_ID = 'fertilizer';

export const INITIAL_FIELD_WIDTH = 4;
export const INITIAL_FIELD_HEIGHT = 4;

export const PURCHASEABLE_FIELD_SIZES = freeze(
  new Map([
    [1, { columns: 2, rows: 4, price: 1000 }],
    [2, { columns: 4, rows: 6, price: 2000 }],
    [3, { columns: 6, rows: 8, price: 3000 }],
  ])
);

export const PURCHASEABLE_COW_PENS = freeze(
  new Map([
    [1, { cows: 10, price: 500 }],
    [2, { cows: 20, price: 1000 }],
    [3, { cows: 30, price: 1500 }],
  ])
);

// Buff/nerf chances
export const CROW_CHANCE = 0;
export const RAIN_CHANCE = 0;

export const SCARECROW_ITEM_ID = 'scarecrow';
export const SPRINKLER_ITEM_ID = 'sprinkler';
export const SPRINKLER_RANGE = 1;

export const COW_STARTING_WEIGHT_BASE = 1800;
export const COW_STARTING_WEIGHT_VARIANCE = 200;

export const MAX_ANIMAL_NAME_LENGTH = 30;
