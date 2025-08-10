import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { DreamFlow } from "@/components/pages/DreamFlow";
import { DreamLoops } from "@/components/pages/DreamLoops";
import { DreamEvents } from "@/components/pages/DreamEvents";
import { DreamMessages } from "@/components/pages/DreamMessages";
import { DreamCapsule } from "@/components/pages/DreamCapsule";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

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
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <div className="hidden lg:block">
          <AppSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
        <main className="flex-1">
          <header className="hidden lg:flex h-14 items-center border-b px-3">
            <SidebarTrigger className="mr-2" />
            <h1 className="text-base font-playfair">Dreazie</h1>
          </header>
          {renderActiveTab()}
          <div className="lg:hidden">
            <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
