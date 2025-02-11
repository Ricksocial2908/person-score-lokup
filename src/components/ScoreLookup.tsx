
import { useState } from 'react';
import { PersonType } from '../types/person';
import { personScores } from '../data/personScores';
import { Select, SelectContent, SelectItem, SelectGroup, SelectTrigger, SelectValue, SelectLabel } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ScoreLookup() {
  const [selectedPerson, setSelectedPerson] = useState<PersonType | null>(null);
  const [editedLocation, setEditedLocation] = useState<string>("");

  const handlePersonSelect = (value: string) => {
    const [category, title] = value.split('|');
    const person = personScores
      .find(group => group.category === category)
      ?.persons.find(p => p.title === title);
    
    if (person) {
      setSelectedPerson(person);
      setEditedLocation(person.location);
    } else {
      setSelectedPerson(null);
      setEditedLocation("");
    }
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedLocation(e.target.value);
    if (selectedPerson) {
      setSelectedPerson({
        ...selectedPerson,
        location: e.target.value
      });
    }
  };

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
          <Select onValueChange={handlePersonSelect}>
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
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">{selectedPerson.category}</p>
                    <h3 className="font-medium">{selectedPerson.title}</h3>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-1">
                    Score: {selectedPerson.score}
                  </Badge>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>Location</span>
                    </label>
                    <Input
                      value={editedLocation}
                      onChange={handleLocationChange}
                      placeholder="Enter location"
                      className="bg-white/50"
                    />
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedPerson.date}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
