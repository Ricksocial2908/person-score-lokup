
import { useState } from 'react';
import { PersonType } from '../types/person';
import { personScores } from '../data/personScores';
import { Select, SelectContent, SelectItem, SelectGroup, SelectTrigger, SelectValue, SelectLabel } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ScoreLookup() {
  const [selectedPerson, setSelectedPerson] = useState<PersonType | null>(null);

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Card className="backdrop-blur-sm bg-white/90 shadow-lg border-0">
        <CardHeader className="pb-4">
          <Badge variant="outline" className="w-fit mb-2 uppercase tracking-wider font-medium">
            Person Score Lookup
          </Badge>
          <CardTitle className="text-2xl font-semibold tracking-tight">
            Select a person type to view their score
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Select
            onValueChange={(value) => {
              const [category, title] = value.split('|');
              const person = personScores
                .find(group => group.category === category)
                ?.persons.find(p => p.title === title);
              setSelectedPerson(person || null);
            }}
          >
            <SelectTrigger className="w-full bg-white/50 backdrop-blur-sm">
              <SelectValue placeholder="Select a person type" />
            </SelectTrigger>
            <SelectContent>
              {personScores.map((group) => (
                <SelectGroup key={group.category}>
                  <SelectLabel className="font-semibold">{group.category}</SelectLabel>
                  {group.persons.map((person) => (
                    <SelectItem
                      key={`${person.category}|${person.title}`}
                      value={`${person.category}|${person.title}`}
                    >
                      {person.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>

          {selectedPerson && (
            <div className="mt-6 p-4 rounded-lg bg-gray-50/80 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">{selectedPerson.category}</p>
                  <h3 className="font-medium">{selectedPerson.title}</h3>
                </div>
                <Badge variant="secondary" className="text-lg px-4 py-1">
                  Score: {selectedPerson.score}
                </Badge>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
