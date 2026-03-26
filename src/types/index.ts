// Task 1.3: User and Recipe

export interface User {
  id: number;
  email: string;
  name?: string;
  role?: string;
}

export interface Recipe {
  id: number;
  userId: number;
  name: string;
  bowlId: number;
  ingredientIds: number[];
  slots?: Record<string, any>;
  is_public?: boolean;
}

// Task 1.4: PriceListItem

export interface PriceListItem {
  id: number;
  item_id: number;
  price: number;
  type?: string;
}
