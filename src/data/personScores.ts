
import { CategoryGroup } from '../types/person';

export const personScores: CategoryGroup[] = [
  {
    category: "National",
    persons: [
      { category: "National", title: "National Prime Minister/ President", score: 20, location: "United States", date: "2024" },
      { category: "National", title: "National Government Minister", score: 15, location: "United Kingdom", date: "2024" },
      { category: "National", title: "National Official", score: 12, location: "Canada", date: "2024" },
      { category: "National", title: "National Influencer", score: 10, location: "Australia", date: "2024" },
      { category: "National", title: "Nationally Important stakeholder", score: 10, location: "New Zealand", date: "2024" },
    ],
  },
  {
    category: "Regional",
    persons: [
      { category: "Regional", title: "Regional Prime Minister/ President", score: 10, location: "European Union", date: "2024" },
      { category: "Regional", title: "Regional Government Minister", score: 8, location: "ASEAN", date: "2024" },
      { category: "Regional", title: "Regional Official", score: 6, location: "African Union", date: "2024" },
      { category: "Regional", title: "Regional Influencer", score: 5, location: "South America", date: "2024" },
      { category: "Regional", title: "Regionally Important stakeholder", score: 5, location: "Pacific Region", date: "2024" },
    ],
  },
  {
    category: "Local",
    persons: [
      { category: "Local", title: "Local Mayor", score: 10, location: "New York City", date: "2024" },
      { category: "Local", title: "County Councillor", score: 8, location: "London Borough", date: "2024" },
      { category: "Local", title: "Local Official", score: 6, location: "Toronto District", date: "2024" },
      { category: "Local", title: "Resident Association", score: 5, location: "Sydney Suburb", date: "2024" },
      { category: "Local", title: "Local Influencer", score: 4, location: "Berlin Area", date: "2024" },
      { category: "Local", title: "Locally important stakeholder", score: 4, location: "Paris District", date: "2024" },
    ],
  },
];
