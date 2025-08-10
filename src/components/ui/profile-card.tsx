import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MapPin, Play, Pause } from "lucide-react";


interface ProfileCardProps {
  profile: {
    id: string;
    name: string;
    age: number;
    location: string;
    mood: string;
    backgroundImage: string;
    quote?: string;
    audioQuote?: string;
    dreamFacts: string[];
    isVisible: boolean;
  };
  className?: string;
}

export const ProfileCard = ({ profile, className }: ProfileCardProps) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setParallaxOffset(scrollProgress * 50);
        
        // Update current section based on scroll position
        const sectionProgress = Math.max(0, Math.min(1, scrollProgress));
        setCurrentSection(Math.floor(sectionProgress * 4));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    setIsPlaying(!isPlaying);
    // Audio implementation would go here
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative h-screen w-full overflow-hidden transition-dream",
        profile.isVisible 
          ? "profile-blur-out" 
          : "profile-blur-in",
        className
      )}
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{ 
          backgroundImage: `url(${profile.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${parallaxOffset}px) scale(1.1)`
        } as React.CSSProperties}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
      
      {/* Content Sections */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8 space-y-8">
        
        {/* Section 1: Portrait & Basic Info */}
        <div className={cn(
          "transition-dream duration-700",
          currentSection >= 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="flex items-center gap-3 mb-4">
            <div className="px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
              <span className="text-sm font-inter font-medium text-primary">{profile.mood}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-inter">{profile.location}</span>
            </div>
          </div>
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-2">
            {profile.name}, {profile.age}
          </h2>
        </div>

        {/* Section 2: Quote/Voice Note */}
        <div className={cn(
          "transition-dream duration-700 delay-200",
          currentSection >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {profile.quote && (
            <div className="bg-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border dream-shadow">
              <div className="flex items-center gap-3 mb-3">
                <button
                  onClick={handleAudioToggle}
                  className="w-12 h-12 rounded-full dream-gradient-primary flex items-center justify-center text-primary-foreground transition-gentle hover:scale-105"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>
                <span className="text-sm font-inter font-medium text-muted-foreground">
                  Tap to hear my voice
                </span>
              </div>
              <p className="text-lg font-inter text-foreground italic">
                "{profile.quote}"
              </p>
            </div>
          )}
        </div>

        {/* Section 3: Dream Facts */}
        <div className={cn(
          "transition-dream duration-700 delay-400",
          currentSection >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h3 className="text-xl font-playfair font-semibold text-foreground mb-4">
            Dream Facts
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {profile.dreamFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-card/40 backdrop-blur-sm rounded-2xl p-4 border border-border/50"
              >
                <p className="text-sm font-inter text-foreground">{fact}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};