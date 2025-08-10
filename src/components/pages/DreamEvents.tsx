import { Calendar, Clock, Users, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    id: "trivia-night",
    title: "Dream Trivia Night",
    description: "Test your knowledge while making connections",
    time: "Tonight, 8:00 PM",
    participants: 45,
    type: "Interactive Game",
    isLive: false
  },
  {
    id: "coffee-chat",
    title: "Virtual Coffee Chat",
    description: "Cozy conversations over your favorite brew",
    time: "Tomorrow, 10:00 AM",
    participants: 23,
    type: "Video Hangout",
    isLive: false
  },
  {
    id: "live-music",
    title: "Live Music Session",
    description: "Share your musical talents with the community",
    time: "Live Now",
    participants: 67,
    type: "Live Performance",
    isLive: true
  },
  {
    id: "book-club",
    title: "Dream Book Club",
    description: "Discussing 'The Midnight Library' by Matt Haig",
    time: "Sunday, 3:00 PM",
    participants: 31,
    type: "Discussion Group",
    isLive: false
  }
];

export const DreamEvents = () => {
  return (
    <div className="min-h-screen pt-8 pb-24 px-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-playfair font-bold text-foreground mb-3">
            Dream Events
          </h1>
          <p className="text-lg font-inter text-muted-foreground">
            Live hangouts, games, and shared experiences
          </p>
        </div>

        {/* Live Event Banner */}
        <div className="mb-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl p-6 text-white animate-dream-glow">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-inter font-medium">LIVE NOW</span>
          </div>
          <h3 className="text-xl font-playfair font-semibold mb-2">
            Live Music Session
          </h3>
          <p className="text-white/90 font-inter mb-4">
            Share your musical talents with the community
          </p>
          <Button variant="outline" className="w-full bg-white/10 backdrop-blur-xl border-white/30 text-white hover:bg-white/20">
            <Video className="w-4 h-4 mr-2" />
            Join Live Event
          </Button>
        </div>

        {/* Upcoming Events */}
        <div className="space-y-4">
          <h2 className="text-xl font-playfair font-semibold text-foreground mb-4">
            Upcoming Events
          </h2>
          
          {upcomingEvents.filter(event => !event.isLive).map((event) => (
            <div
              key={event.id}
              className="bg-card backdrop-blur-xl rounded-3xl p-6 border border-border dream-shadow transition-gentle hover:dream-shadow-strong hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-inter font-medium rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground font-inter text-sm mb-3">
                    {event.description}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-inter">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-inter">{event.participants}</span>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full bg-card/60 backdrop-blur-xl border-primary/30 text-primary hover:bg-primary/10">
                <Calendar className="w-4 h-4 mr-2" />
                Join Event
              </Button>
            </div>
          ))}
        </div>

        {/* Host Event */}
        <div className="mt-8">
          <Button variant="default" className="w-full dream-gradient-primary border-0 text-primary-foreground font-inter font-medium">
            Host Your Own Event
          </Button>
        </div>
      </div>
    </div>
  );
};