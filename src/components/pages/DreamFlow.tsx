import { useState, useEffect } from "react";
import { ProfileCard } from "@/components/ui/profile-card";
import { DreamMoment } from "@/components/ui/dream-moment";
import profile1 from "@/assets/profile-1.jpg";
import profile2 from "@/assets/profile-2.jpg";
import profile3 from "@/assets/profile-3.jpg";
import { Button } from "@/components/ui/button";
import { MessageCircle, Infinity, User as UserIcon } from "lucide-react";

interface Profile {
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
}

const dreamProfiles: Profile[] = [
  {
    id: "1",
    name: "Luna",
    age: 25,
    location: "San Francisco",
    mood: "Artistic Soul",
    backgroundImage: profile1,
    quote: "I believe in magic moments and midnight conversations under the stars",
    dreamFacts: [
      "🎨 Paints landscapes at sunrise",
      "☕ Coffee shop philosopher", 
      "🌙 Night owl who loves astronomy",
      "📚 Collects vintage poetry books"
    ],
    isVisible: false
  },
  {
    id: "2",
    name: "Atlas",
    age: 28,
    location: "Brooklyn",
    mood: "Adventure Seeker",
    backgroundImage: profile2,
    quote: "Life's too short for small talk - let's dive into the deep end together",
    dreamFacts: [
      "🏔️ Climbed mountains on 3 continents",
      "🎵 Plays guitar by campfires",
      "🌅 Chases sunrises around the world",
      "📖 Writes travel journals"
    ],
    isVisible: false
  },
  {
    id: "3",
    name: "Sage",
    age: 26,
    location: "Portland",
    mood: "Cozy Dreamer",
    backgroundImage: profile3,
    quote: "I find magic in quiet moments and deep conversations over tea",
    dreamFacts: [
      "📚 Reads 100+ books a year",
      "🍃 Grows herbs and makes tea blends",
      "🧶 Knits scarves for friends",
      "🎭 Performs in local theater"
    ],
    isVisible: false
  }
];

export const DreamFlow = () => {
  const [profiles, setProfiles] = useState(dreamProfiles);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const [focusedProfileId, setFocusedProfileId] = useState<string | null>(null);

  const toggleFocus = (p: Profile) => {
    setFocusedProfileId((prev) => (prev === p.id ? null : p.id));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardId = entry.target.getAttribute('data-card-id');
          if (cardId) {
            if (entry.isIntersecting) {
              setVisibleCards(prev => new Set(prev).add(cardId));
            } else {
              setVisibleCards(prev => {
                const newSet = new Set(prev);
                newSet.delete(cardId);
                return newSet;
              });
            }
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '0px 0px -20% 0px'
      }
    );

    // Observe all profile cards
    const cardElements = document.querySelectorAll('[data-card-id]');
    cardElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Update profile visibility based on intersection
  useEffect(() => {
    setProfiles(prev => 
      prev.map(profile => ({
        ...profile,
        isVisible: visibleCards.has(profile.id)
      }))
    );
  }, [visibleCards]);

  const focusedProfile = focusedProfileId ? profiles.find((p) => p.id === focusedProfileId) : undefined;

  return (
    <>
      <div className={`dream-flow-container transition-opacity duration-300 ${focusedProfile ? 'opacity-0' : 'opacity-100'}`}>
        {/* Profile 1 */}
        <div data-card-id="1" onClick={() => toggleFocus(profiles[0])} className="relative cursor-pointer">
          {/* Card-level action bar */}
          <div className="absolute top-4 left-0 right-0 flex justify-center z-10" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2 md:gap-3 bg-background/70 backdrop-blur-xl rounded-full px-3 py-2 border border-border/50 shadow-sm">
              <Button size="sm" variant="default" className="font-inter font-medium">
                <MessageCircle className="mr-2 h-4 w-4" />
                Send Message
              </Button>
              <Button size="sm" variant="outline" className="font-inter font-medium">
                <Infinity className="mr-2 h-4 w-4" />
                Start a Loop
              </Button>
              <Button size="sm" variant="secondary" className="font-inter font-medium">
                <UserIcon className="mr-2 h-4 w-4" />
                Profile
              </Button>
            </div>
          </div>
          <ProfileCard profile={profiles[0]} />
        </div>

        {/* Profile 2 */}
        <div data-card-id="2" onClick={() => toggleFocus(profiles[1])} className="relative cursor-pointer">
          {/* Card-level action bar */}
          <div className="absolute top-4 left-0 right-0 flex justify-center z-10" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2 md:gap-3 bg-background/70 backdrop-blur-xl rounded-full px-3 py-2 border border-border/50 shadow-sm">
              <Button size="sm" variant="default" className="font-inter font-medium">
                <MessageCircle className="mr-2 h-4 w-4" />
                Send Message
              </Button>
              <Button size="sm" variant="outline" className="font-inter font-medium">
                <Infinity className="mr-2 h-4 w-4" />
                Start a Loop
              </Button>
              <Button size="sm" variant="secondary" className="font-inter font-medium">
                <UserIcon className="mr-2 h-4 w-4" />
                Profile
              </Button>
            </div>
          </div>
          <ProfileCard profile={profiles[1]} />
        </div>

        {/* Dream Moment */}
        <div data-card-id="dream-moment">
          <DreamMoment 
            question="Do you believe in love at first conversation?"
            isVisible={visibleCards.has('dream-moment')}
          />
        </div>

        {/* Profile 3 */}
        <div data-card-id="3" onClick={() => toggleFocus(profiles[2])} className="relative cursor-pointer">
          {/* Card-level action bar */}
          <div className="absolute top-4 left-0 right-0 flex justify-center z-10" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2 md:gap-3 bg-background/70 backdrop-blur-xl rounded-full px-3 py-2 border border-border/50 shadow-sm">
              <Button size="sm" variant="default" className="font-inter font-medium">
                <MessageCircle className="mr-2 h-4 w-4" />
                Send Message
              </Button>
              <Button size="sm" variant="outline" className="font-inter font-medium">
                <Infinity className="mr-2 h-4 w-4" />
                Start a Loop
              </Button>
              <Button size="sm" variant="secondary" className="font-inter font-medium">
                <UserIcon className="mr-2 h-4 w-4" />
                Profile
              </Button>
            </div>
          </div>
          <ProfileCard profile={profiles[2]} />
        </div>

        {/* Add some bottom padding for the navigation */}
        <div className="h-24" />
      </div>

      {focusedProfile && (
        <div className="fixed inset-0 z-50 animate-fade-in" onClick={() => setFocusedProfileId(null)}>
          {/* Top action bar */}
          <div
            className="absolute top-0 left-0 right-0 p-4 md:p-6 flex justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 md:gap-3 bg-background/70 backdrop-blur-xl rounded-full px-3 py-2 border border-border/50 shadow-sm">
              <Button size="sm" variant="default" className="font-inter font-medium">
                <MessageCircle className="mr-2 h-4 w-4" />
                Send Message
              </Button>
              <Button size="sm" variant="outline" className="font-inter font-medium">
                <Infinity className="mr-2 h-4 w-4" />
                Start a Loop
              </Button>
              <Button size="sm" variant="secondary" className="font-inter font-medium">
                <UserIcon className="mr-2 h-4 w-4" />
                Profile
              </Button>
            </div>
          </div>

          {/* Fullscreen image */}
          <img
            src={focusedProfile.backgroundImage}
            alt={`${focusedProfile.name} profile image`}
            className="h-screen w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      )}
    </>
  );
};