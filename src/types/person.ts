
export type PersonType = {
  category: string;
  title: string;
  score: number;
};

export type CategoryGroup = {
  category: string;
  persons: PersonType[];
};
