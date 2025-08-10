import { Search, Heart, Star, MessageCircle, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const conversations = [
  {
    id: "1",
    name: "Luna",
    lastMessage: "I love your thoughts on that book! Let's discuss more over coffee?",
    time: "2m ago",
    isOnline: true,
    hasUnread: true,
    messageCount: 3
  },
  {
    id: "2",
    name: "Atlas",
    lastMessage: "That sunset photo was incredible! Where was it taken?",
    time: "15m ago",
    isOnline: true,
    hasUnread: false,
    messageCount: 0
  },
  {
    id: "3",
    name: "Sage",
    lastMessage: "Thanks for the tea recommendation! I tried it today and loved it 🍃",
    time: "1h ago",
    isOnline: false,
    hasUnread: true,
    messageCount: 1
  },
  {
    id: "4",
    name: "Dream Loops",
    lastMessage: "Coffee Lovers: New discussion about espresso techniques",
    time: "2h ago",
    isOnline: false,
    hasUnread: false,
    messageCount: 0,
    isGroup: true
  }
];

const icebreakers = [
  "What's your favorite way to spend a rainy day?",
  "If you could have dinner with anyone, who would it be?",
  "What's the best adventure you've been on recently?",
  "What book changed your perspective on life?"
];

export const DreamMessages = () => {
  return (
    <div className="min-h-screen pt-8 pb-24 px-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-playfair font-bold text-foreground">
            Messages
          </h1>
          <Button variant="ghost" size="sm" className="p-2">
            <MoreHorizontal className="w-5 h-5" />
          </Button>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search conversations..." 
            className="pl-10 bg-card/60 backdrop-blur-xl border-border"
          />
        </div>

        {/* Icebreaker Prompts */}
        <div className="mb-6">
          <h2 className="text-lg font-playfair font-semibold text-foreground mb-3">
            Conversation Starters
          </h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {icebreakers.slice(0, 2).map((prompt, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4 py-3 bg-primary/10 border border-primary/20 rounded-2xl min-w-[200px] cursor-pointer transition-gentle hover:bg-primary/20"
              >
                <p className="text-sm font-inter text-primary">
                  {prompt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Conversations */}
        <div className="space-y-3">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className="bg-card backdrop-blur-xl rounded-3xl p-4 border border-border transition-gentle hover:dream-shadow-strong hover:scale-[1.02] cursor-pointer"
            >
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full flex items-center justify-center">
                    {conversation.isGroup ? (
                      <MessageCircle className="w-5 h-5 text-primary" />
                    ) : (
                      <span className="text-sm font-playfair font-semibold text-primary">
                        {conversation.name[0]}
                      </span>
                    )}
                  </div>
                  {conversation.isOnline && !conversation.isGroup && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-playfair font-semibold text-foreground truncate">
                      {conversation.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-inter text-muted-foreground">
                        {conversation.time}
                      </span>
                      {conversation.hasUnread && (
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <p className="text-sm font-inter text-muted-foreground truncate">
                    {conversation.lastMessage}
                  </p>
                </div>

                {/* Unread Count */}
                {conversation.messageCount > 0 && (
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-xs font-inter font-medium text-primary-foreground">
                      {conversation.messageCount}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 flex gap-3">
          <Button variant="outline" className="flex-1 bg-card/60 backdrop-blur-xl border-primary/30 text-primary hover:bg-primary/10">
            <Heart className="w-4 h-4 mr-2" />
            Liked You
          </Button>
          <Button variant="outline" className="flex-1 bg-card/60 backdrop-blur-xl border-primary/30 text-primary hover:bg-primary/10">
            <Star className="w-4 h-4 mr-2" />
            Favorites
          </Button>
        </div>
      </div>
    </div>
  );
};