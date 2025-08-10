import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { DreamFlow } from "@/components/pages/DreamFlow";
import { DreamLoops } from "@/components/pages/DreamLoops";
import { DreamEvents } from "@/components/pages/DreamEvents";
import { DreamMessages } from "@/components/pages/DreamMessages";
import { DreamCapsule } from "@/components/pages/DreamCapsule";

const Index = () => {
  const [activeTab, setActiveTab] = useState('dream-flow');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'dream-flow':
        return <DreamFlow />;
      case 'dream-loops':
        return <DreamLoops />;
      case 'dream-events':
        return <DreamEvents />;
      case 'dream-messages':
        return <DreamMessages />;
      case 'dream-capsule':
        return <DreamCapsule />;
      default:
        return <DreamFlow />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderActiveTab()}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
