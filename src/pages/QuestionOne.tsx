import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const QuestionOne = () => {
  const navigate = useNavigate();
  const [showAnimation, setShowAnimation] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: "0px", left: "180px" }); // initial: right of Yes

  const handleYes = () => {
    setShowAnimation(true);
    setTimeout(() => {
      navigate("/question-two");
    }, 1500);
  };

  const handleNoHover = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10;  // 10% to 90%
    const randomLeft = Math.floor(Math.random() * 80) + 10; // 10% to 90%
    setNoButtonPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-sweet text-2xl opacity-20 animate-float`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            💝
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto text-center space-y-12 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-sweet-foreground leading-relaxed">
          Do you even know how soft you make life feel when you're around?
        </h1>

        <div className="relative flex justify-center items-center gap-6" style={{ height: '80px' }}>
          {/* Yes Button */}
          <Button
            onClick={handleYes}
            className="bg-sweet hover:bg-sweet/90 text-sweet-foreground font-body font-semibold text-xl px-8 py-4 rounded-full shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-romantic)] transition-all duration-300 hover:scale-105"
          >
            <Heart className="mr-2 h-6 w-6" />
            Yes ✅
          </Button>

          {/* No Button that runs away */}
          <Button
            onMouseEnter={handleNoHover}
            className="bg-muted text-muted-foreground font-body font-semibold text-xl px-8 py-4 rounded-full absolute transition-all duration-300"
            style={{
              top: noButtonPosition.top,
              left: noButtonPosition.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            No ❌
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionOne;
