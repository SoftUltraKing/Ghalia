import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/question-one");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-3xl opacity-15 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {i % 4 === 0 ? "💝" : i % 4 === 1 ? "🌸" : i % 4 === 2 ? "✨" : "💕"}
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-12 animate-fade-in-up">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-sweet-foreground leading-tight">
            Sweet Messages
          </h1>
          <p className="text-2xl md:text-3xl font-body font-medium text-muted-foreground">
            Something special is waiting for you... 💌
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={handleStart}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold text-2xl px-12 py-6 rounded-full shadow-[var(--shadow-romantic)] hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <Heart className="mr-3 h-7 w-7 group-hover:animate-heart-pop" />
            Start Reading
            <Sparkles className="ml-3 h-7 w-7 group-hover:animate-sparkle" />
          </Button>
        </div>

        <div className="text-lg font-body text-muted-foreground opacity-70">
          Click when you're ready for something sweet 🥰
        </div>
      </div>
    </div>
  );
};

export default Index;