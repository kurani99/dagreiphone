export type Page = 'home' | 'apps' | 'settings';
export type CategoryId = 'all' | 'games' | 'music' | 'entertainment' | 'education' | 'social' | 'tools';

export interface App {
  id: string;
  nameKu: string;
  nameEn: string;
  developerKu: string;
  category: CategoryId;
  rating: number;
  reviewCount: number;
  sizeMB: number;
  isFree: boolean;
  price?: number;
  iconColors: [string, string];
  iconSymbol: string;
  isNew?: boolean;
  isTrending?: boolean;
  isFeatured?: boolean;
  descriptionKu?: string;
  downloadUrl?: string;
}

export interface Category {
  id: CategoryId;
  labelKu: string;
  gradient: [string, string];
  bgPattern?: string;
}
