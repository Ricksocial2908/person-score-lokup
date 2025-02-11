
import { CategoryGroup } from '../types/person';

export const personScores: CategoryGroup[] = [
  {
    category: "National",
    persons: [
      { category: "National", title: "National Prime Minister/ President", score: 20 },
      { category: "National", title: "National Government Minister", score: 15 },
      { category: "National", title: "National Official", score: 12 },
      { category: "National", title: "National Influencer", score: 10 },
      { category: "National", title: "Nationally Important stakeholder", score: 10 },
    ],
  },
  {
    category: "Regional",
    persons: [
      { category: "Regional", title: "Regional Prime Minister/ President", score: 10 },
      { category: "Regional", title: "Regional Government Minister", score: 8 },
      { category: "Regional", title: "Regional Official", score: 6 },
      { category: "Regional", title: "Regional Influencer", score: 5 },
      { category: "Regional", title: "Regionally Important stakeholder", score: 5 },
    ],
  },
  {
    category: "Local",
    persons: [
      { category: "Local", title: "Local Mayor", score: 10 },
      { category: "Local", title: "County Councillor", score: 8 },
      { category: "Local", title: "Local Official", score: 6 },
      { category: "Local", title: "Resident Association", score: 5 },
      { category: "Local", title: "Local Influencer", score: 4 },
      { category: "Local", title: "Locally important stakeholder", score: 4 },
    ],
  },
];
