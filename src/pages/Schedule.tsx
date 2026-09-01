import { useState } from "react";
import { Search, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WASTE_SCHEDULES, IMAGES } from "@/data/mockData";

export const Schedule = () => {
  const [search, setSearch] = useState("");

  const filteredSchedules = WASTE_SCHEDULES.filter(s =>
    s.street.toLowerCase().includes(search.toLowerCase()) ||
    s.neighborhood.toLowerCase().includes(search.toLowerCase())
  );

  const wasteTypes = [
    { type: "General Waste", key: "generalWaste", color: "bg-gray-500", icon: IMAGES.general },
    { type: "Recyclables", key: "recyclables", color: "bg-blue-500", icon: IMAGES.recyclables },
    { type: "Organic Waste", key: "organicWaste", color: "bg-green-600", icon: IMAGES.organic },
  ];

  return (
    <div className="container px-4 md:px-6 py-12 space-y-12">
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">Collection Schedule</h1>
        <p className="text-muted-foreground text-lg">
          Find out when waste is collected in your neighborhood. Search by street or area.
        </p>
      </div>

      <div className="max-w-xl mx-auto relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Search for your street or neighborhood..."
          className="pl-10 h-12"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSchedules.map((schedule, idx) => (
          <Card key={idx} className="overflow-hidden hover:shadow-md transition-shadow">
            <CardHeader className="bg-primary/5">
              <CardTitle>{schedule.street}</CardTitle>
              <CardDescription>{schedule.neighborhood}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              {wasteTypes.map((wt) => (
                <div key={wt.key} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={wt.icon} alt={wt.type} className="w-8 h-8 rounded-full border bg-white" />
                    <span className="font-medium text-sm">{wt.type}</span>
                  </div>
                  <Badge variant="secondary" className={`${wt.color} text-white`}>
                    {(schedule as any)[wt.key]}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
        {filteredSchedules.length === 0 && (
          <div className="col-span-full py-20 text-center space-y-4">
            <Info className="w-12 h-12 mx-auto text-muted-foreground" />
            <p className="text-xl font-medium text-muted-foreground">No schedules found for "{search}"</p>
            <p className="text-sm text-muted-foreground">Try searching for a different street name.</p>
          </div>
        )}
      </div>

      <section className="bg-muted p-8 rounded-2xl space-y-6">
        <h2 className="text-2xl font-bold">Waste Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-500" /> General Waste
            </h3>
            <p className="text-sm text-muted-foreground">
              Non-recyclable items, broken ceramics, dirty diapers, and general household trash.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" /> Recyclables
            </h3>
            <p className="text-sm text-muted-foreground">
              Clean paper, cardboard, plastic bottles, glass jars, and metal cans.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-600" /> Organic Waste
            </h3>
            <p className="text-sm text-muted-foreground">
              Food scraps, vegetable peels, coffee grounds, and garden waste.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
