export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
}
export interface Job {
  id: number;
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Remote';
  description: string;
  requirements: string[];
  responsibilities: string[];
}