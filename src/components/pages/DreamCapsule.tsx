import { Calendar, Heart, MessageCircle, Star, Download, Archive } from "lucide-react";
import { Button } from "@/components/ui/button";

const monthlyHighlights = [
  {
    id: "1",
    type: "connection",
    title: "First Coffee Date",
    description: "Your conversation with Luna at Central Park Café",
    date: "December 15",
    image: "☕",
    color: "from-amber-400 to-orange-500"
  },
  {
    id: "2",
    type: "message",
    title: "Favorite Quote Shared",
    description: '"The best conversations happen between hearts, not minds" - Luna',
    date: "December 20",
    image: "💭",
    color: "from-pink-400 to-rose-500"
  },
  {
    id: "3",
    type: "moment",
    title: "Dream Moment Victory",
    description: "You won the weekly 'Most Creative Answer' for the stargazing question",
    date: "December 22",
    image: "⭐",
    color: "from-violet-400 to-purple-500"
  },
  {
    id: "4",
    type: "loop",
    title: "Book Club Discussion",
    description: "Led an amazing discussion about 'The Midnight Library' in Dream Loops",
    date: "December 28",
    image: "📚",
    color: "from-emerald-400 to-teal-500"
  }
];

const savedConnections = [
  { name: "Luna", connection: "Coffee Conversations", status: "Active" },
  { name: "Atlas", connection: "Adventure Stories", status: "Active" },
  { name: "Sage", connection: "Book Recommendations", status: "Paused" }
];

export const DreamCapsule = () => {
  return (
    <div className="min-h-screen pt-8 pb-24 px-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 mb-4">
            <Archive className="w-4 h-4 text-primary" />
            <span className="text-sm font-inter font-medium text-primary">December 2024</span>
          </div>
          <h1 className="text-3xl font-playfair font-bold text-foreground mb-3">
            Dream Capsule
          </h1>
          <p className="text-lg font-inter text-muted-foreground">
            Your month of beautiful connections
          </p>
        </div>

        {/* Monthly Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-card backdrop-blur-xl rounded-2xl p-4 border border-border text-center">
            <div className="text-2xl font-playfair font-bold text-primary">12</div>
            <div className="text-xs font-inter text-muted-foreground">New Connections</div>
          </div>
          <div className="bg-card backdrop-blur-xl rounded-2xl p-4 border border-border text-center">
            <div className="text-2xl font-playfair font-bold text-primary">47</div>
            <div className="text-xs font-inter text-muted-foreground">Messages Sent</div>
          </div>
          <div className="bg-card backdrop-blur-xl rounded-2xl p-4 border border-border text-center">
            <div className="text-2xl font-playfair font-bold text-primary">3</div>
            <div className="text-xs font-inter text-muted-foreground">Events Joined</div>
          </div>
        </div>

        {/* Monthly Highlights */}
        <div className="mb-8">
          <h2 className="text-xl font-playfair font-semibold text-foreground mb-4">
            Monthly Highlights
          </h2>
          <div className="space-y-4">
            {monthlyHighlights.map((highlight) => (
              <div
                key={highlight.id}
                className="bg-card backdrop-blur-xl rounded-3xl p-6 border border-border dream-shadow transition-gentle hover:dream-shadow-strong"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${highlight.color} flex items-center justify-center text-xl`}>
                    {highlight.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-playfair font-semibold text-foreground">
                        {highlight.title}
                      </h3>
                      <span className="text-xs font-inter text-muted-foreground">
                        {highlight.date}
                      </span>
                    </div>
                    <p className="text-sm font-inter text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Connections */}
        <div className="mb-8">
          <h2 className="text-xl font-playfair font-semibold text-foreground mb-4">
            Saved Connections
          </h2>
          <div className="space-y-3">
            {savedConnections.map((connection, index) => (
              <div
                key={index}
                className="bg-card backdrop-blur-xl rounded-2xl p-4 border border-border flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full flex items-center justify-center">
                    <span className="text-sm font-playfair font-semibold text-primary">
                      {connection.name[0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-foreground text-sm">
                      {connection.name}
                    </h3>
                    <p className="text-xs font-inter text-muted-foreground">
                      {connection.connection}
                    </p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-inter font-medium ${
                  connection.status === 'Active' 
                    ? 'bg-green-500/20 text-green-600' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {connection.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button variant="default" className="w-full dream-gradient-primary border-0 text-primary-foreground font-inter font-medium">
            <Download className="w-4 h-4 mr-2" />
            Export Capsule
          </Button>
          <Button variant="outline" className="w-full bg-card/60 backdrop-blur-xl border-primary/30 text-primary hover:bg-primary/10">
            <Calendar className="w-4 h-4 mr-2" />
            View Previous Months
          </Button>
        </div>
      </div>
    </div>
  );
};