
export type PersonType = {
  category: string;
  title: string;
  score: number;
  location: string;
  date: string;
};

export type CategoryGroup = {
  category: string;
  persons: PersonType[];
};
