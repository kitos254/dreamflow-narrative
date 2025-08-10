import { Users, Coffee, Book, Moon, Music, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const dreamLoops = [
  {
    id: "coffee-lovers",
    title: "Coffee Lovers",
    description: "For those who speak fluent espresso",
    icon: Coffee,
    memberCount: 247,
    color: "from-amber-400 to-orange-500"
  },
  {
    id: "bookworms",
    title: "Bookworms",
    description: "Stories, poetry, and deep discussions",
    icon: Book,
    memberCount: 189,
    color: "from-emerald-400 to-teal-500"
  },
  {
    id: "night-owls",
    title: "Night Owls",
    description: "For souls who come alive after dark",
    icon: Moon,
    memberCount: 156,
    color: "from-indigo-400 to-purple-500"
  },
  {
    id: "music-souls",
    title: "Music Souls",
    description: "Melody makers and rhythm believers",
    icon: Music,
    memberCount: 203,
    color: "from-pink-400 to-rose-500"
  },
  {
    id: "artists",
    title: "Visual Artists",
    description: "Painters, photographers, and creators",
    icon: Camera,
    memberCount: 134,
    color: "from-violet-400 to-purple-500"
  }
];

export const DreamLoops = () => {
  return (
    <div className="min-h-screen pt-8 pb-24 px-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-playfair font-bold text-foreground mb-3">
            Dream Loops
          </h1>
          <p className="text-lg font-inter text-muted-foreground">
            Find your tribe in themed connection spaces
          </p>
        </div>

        {/* Loops Grid */}
        <div className="space-y-4">
          {dreamLoops.map((loop) => {
            const IconComponent = loop.icon;
            return (
              <div
                key={loop.id}
                className="bg-card backdrop-blur-xl rounded-3xl p-6 border border-border dream-shadow transition-gentle hover:dream-shadow-strong hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${loop.color}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-inter">{loop.memberCount}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                  {loop.title}
                </h3>
                <p className="text-muted-foreground font-inter mb-4">
                  {loop.description}
                </p>
                
                <Button variant="outline" className="w-full bg-card/60 backdrop-blur-xl border-primary/30 text-primary hover:bg-primary/10">
                  Join Loop
                </Button>
              </div>
            );
          })}
        </div>

        {/* Create New Loop */}
        <div className="mt-8">
          <Button variant="default" className="w-full dream-gradient-primary border-0 text-primary-foreground font-inter font-medium">
            Create New Loop
          </Button>
        </div>
      </div>
    </div>
  );
};