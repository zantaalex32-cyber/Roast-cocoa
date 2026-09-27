export type MenuCategory = 'Coffee' | 'Tea' | 'Chocolate' | 'Pastries' | 'Cold Drinks';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  description: string;
  detailedDescription: string;
  image: string;
  tags: string[];
  tastingNotes?: string[];
  origin?: string;
  calories?: number;
  allergens?: string[];
  featured?: boolean;
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  milkOption?: string;
  sweetness?: string;
  temperature?: 'Hot' | 'Iced';
  notes?: string;
}

export interface ExperienceStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detail: string;
  image: string;
  accent: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  date: string;
}
