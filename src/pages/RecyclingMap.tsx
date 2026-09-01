import { MapPin, Clock, ExternalLink, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RECYCLING_CENTERS } from "@/data/mockData";

export const RecyclingMap = () => {
  return (
    <div className="container px-4 md:px-6 py-12 space-y-12">
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">Recycling Points</h1>
        <p className="text-muted-foreground text-lg">
          Find the nearest drop-off point for items that can't be picked up at your curb.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Mock Map Placeholder */}
        <div className="lg:col-span-2 relative min-h-[400px] bg-muted rounded-2xl overflow-hidden flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000')] bg-cover opacity-20 grayscale" />
          <div className="relative z-10 text-center space-y-4 max-w-sm px-6">
            <MapPin className="w-12 h-12 mx-auto text-primary animate-bounce" />
            <h3 className="text-xl font-bold">Interactive Map coming soon!</h3>
            <p className="text-sm text-muted-foreground">
              We're currently integrating with local GIS services to provide real-time locations. For now, please use the list below.
            </p>
          </div>
        </div>

        {/* List of Centers */}
        <div className="space-y-4 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
          {RECYCLING_CENTERS.map((center) => (
            <Card key={center.id} className="hover:border-primary/50 transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{center.name}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {center.address}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" /> {center.hours}
                </div>
                <div className="flex flex-wrap gap-2">
                  {center.categories.map((cat) => (
                    <Badge key={cat} variant="outline" className="text-[10px]">
                      {cat}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full gap-2" variant="secondary" size="sm">
                  Get Directions <ExternalLink className="w-3 h-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5 text-primary" />
            Recycling Special Items
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Hazardous materials such as paints, chemicals, and medical waste require special handling. Please contact the municipal waste department at (555) 012-3457 for specific drop-off days for hazardous waste.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};


