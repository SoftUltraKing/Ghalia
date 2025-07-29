import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

const QuestionTwo = () => {
  const navigate = useNavigate();
  const [showAnimation, setShowAnimation] = useState(false);
  const [noButtonHovered, setNoButtonHovered] = useState(false);

  const handleYes = () => {
    setShowAnimation(true);
    setTimeout(() => {
      navigate("/final");
    }, 1500);
  };

  const handleNoHover = () => {
    setNoButtonHovered(true);
    setTimeout(() => {
      setNoButtonHovered(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-romantic text-3xl opacity-25 animate-float`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + i * 8}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          >
            🌸
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto text-center space-y-12 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-sweet-foreground leading-relaxed">
          If Lucifer saw you he'd kiss your eyes and start to believe in god
        </h1>

        {/* 💬 Added small note below heading */}
        <p className="text-sm text-muted-foreground mt-2 italic">
          I stole this poem from some Arabic guy
        </p>

        <div className="flex gap-8 justify-center items-center">
          <Button
            onClick={handleYes}
            className="bg-romantic hover:bg-romantic/90 text-romantic-foreground font-body font-semibold text-xl px-8 py-4 rounded-full shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-romantic)] transition-all duration-300 hover:scale-105"
          >
            <Heart className="mr-2 h-6 w-6" />
            Agree ✅
          </Button>

          <Button
            onMouseEnter={handleNoHover}
            variant="outline"
            className={`border-romantic text-romantic-foreground font-body font-semibold text-xl px-8 py-4 rounded-full transition-all duration-300 ${
              noButtonHovered ? "animate-run-away cursor-not-allowed" : "hover:bg-romantic/10"
            }`}
          >
            Nah ❌
          </Button>
        </div>

        {/* Heart and sparkle animation overlay */}
        {showAnimation && (
          <div className="fixed inset-0 pointer-events-none flex items-center justify-center">
            <div className="animate-heart-pop">
              <Heart className="h-32 w-32 text-primary fill-current" />
            </div>
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`absolute animate-sparkle`}
                style={{
                  left: `${40 + Math.random() * 20}%`,
                  top: `${40 + Math.random() * 20}%`,
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionTwo;
