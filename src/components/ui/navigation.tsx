import { cn } from "@/lib/utils";
import { Home, Users, Calendar, MessageCircle, Archive } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigationItems = [
  { id: 'dream-flow', icon: Home, label: 'Dream Flow' },
  { id: 'dream-loops', icon: Users, label: 'Dream Loops' },
  { id: 'dream-events', icon: Calendar, label: 'Dream Events' },
  { id: 'dream-messages', icon: MessageCircle, label: 'Dream Messages' },
  { id: 'dream-capsule', icon: Archive, label: 'Dream Capsule' },
];

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-t border-border">
      <div className="flex items-center justify-around py-2 px-4 max-w-md mx-auto">
        {navigationItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={cn(
              "flex flex-col items-center justify-center p-2 rounded-2xl transition-dream min-w-[60px]",
              activeTab === id
                ? "text-primary dream-glow"
                : "text-muted-foreground hover:text-primary"
            )}
          >
            <Icon className={cn(
              "w-6 h-6 mb-1 transition-dream",
              activeTab === id && "animate-dream-float"
            )} />
            <span className="text-xs font-inter font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};