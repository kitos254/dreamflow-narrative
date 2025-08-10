import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sparkles, Heart, MessageCircle } from "lucide-react";
import { Button } from "./button";
import dreamMomentImage from "@/assets/dream-moment.jpg";

interface DreamMomentProps {
  question: string;
  className?: string;
  isVisible: boolean;
}

export const DreamMoment = ({ question, className, isVisible }: DreamMomentProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResponses, setShowResponses] = useState(false);

  const answerOptions = [
    "Absolutely!",
    "Maybe sometimes",
    "Not really",
    "It depends"
  ];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setTimeout(() => setShowResponses(true), 500);
  };

  return (
    <div
      className={cn(
        "relative h-screen w-full overflow-hidden transition-dream",
        isVisible 
          ? "profile-blur-out" 
          : "profile-blur-in",
        className
      )}
    >
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `url(${dreamMomentImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 dream-gradient-primary opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-center">
        
        {/* Dream Moment Header */}
        <div className="mb-8 animate-dream-float">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground/20 backdrop-blur-xl rounded-full border border-primary-foreground/30 mb-6">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
            <span className="text-sm font-inter font-medium text-primary-foreground">
              Dream Moment
            </span>
          </div>
          
          <h2 className="text-3xl font-playfair font-bold text-primary-foreground mb-4">
            This Week's Question
          </h2>
          <p className="text-xl font-inter text-primary-foreground/90 leading-relaxed max-w-md">
            {question}
          </p>
        </div>

        {/* Answer Options */}
        {!selectedAnswer && (
          <div className="space-y-4 w-full max-w-sm">
            {answerOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className="w-full p-4 bg-primary-foreground/10 backdrop-blur-xl rounded-2xl border border-primary-foreground/20 text-primary-foreground font-inter font-medium transition-gentle hover:bg-primary-foreground/20 hover:scale-105"
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {/* Selected Answer */}
        {selectedAnswer && !showResponses && (
          <div className="animate-dream-fade-in">
            <div className="px-8 py-4 bg-primary-foreground/20 backdrop-blur-xl rounded-3xl border border-primary-foreground/30">
              <p className="text-lg font-inter font-medium text-primary-foreground">
                You answered: "{selectedAnswer}"
              </p>
            </div>
          </div>
        )}

        {/* Community Responses */}
        {showResponses && (
          <div className="animate-dream-fade-in space-y-4 w-full max-w-md">
            <div className="px-6 py-4 bg-primary-foreground/10 backdrop-blur-xl rounded-2xl border border-primary-foreground/20">
              <p className="text-sm font-inter text-primary-foreground/80 mb-2">
                Sarah, 24 • Also answered "{selectedAnswer}"
              </p>
              <p className="text-primary-foreground font-inter">
                "I love meeting new people at coffee shops! ☕️"
              </p>
            </div>
            
            <div className="px-6 py-4 bg-primary-foreground/10 backdrop-blur-xl rounded-2xl border border-primary-foreground/20">
              <p className="text-sm font-inter text-primary-foreground/80 mb-2">
                Mike, 28 • Also answered "{selectedAnswer}"
              </p>
              <p className="text-primary-foreground font-inter">
                "Same here! Coffee dates are the best 🌟"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <Button variant="outline" size="sm" className="flex-1 bg-primary-foreground/10 backdrop-blur-xl border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                <Heart className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button variant="outline" size="sm" className="flex-1 bg-primary-foreground/10 backdrop-blur-xl border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                <MessageCircle className="w-4 h-4 mr-2" />
                Connect
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};