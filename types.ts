export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;        // ✅ ADD THIS (IMPORTANT)
  steps: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export type ProjectCategory =
  | 'All'
  | 'Infrastructure'
  | 'Aluminium'
  | 'Fabrication'
  | 'Interiors';
