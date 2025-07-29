import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
const FinalMessage = () => {
  const [isUnzipping, setIsUnzipping] = useState(false);
  const [isUnzipped, setIsUnzipped] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const handleUnzip = () => {
    setIsUnzipping(true);
    setTimeout(() => {
      setIsUnzipped(true);
      setTimeout(() => {
        setShowMessage(true);
      }, 500);
    }, 1500);
  };
  return <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Floating elements background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => <div key={i} className={`absolute text-4xl opacity-20 animate-float`} style={{
        left: `${5 + i * 10}%`,
        top: `${5 + i * 9}%`,
        animationDelay: `${i * 0.6}s`
      }}>
            {i % 3 === 0 ? "💝" : i % 3 === 1 ? "🌸" : "✨"}
          </div>)}
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-12 animate-fade-in-up">
        {!isUnzipped ? <>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-sweet-foreground mb-12">You've got a special delivery! </h1>
            
            <div className="flex flex-col items-center space-y-8">
              {/* Zipper Package */}
              <div className="relative">
                <div className="w-64 h-40 bg-gradient-to-br from-sweet to-romantic rounded-lg shadow-[var(--shadow-romantic)] border-4 border-accent/30 flex flex-col items-center justify-center animate-float relative overflow-hidden bg-[#ff84e3]/[0.74]">
                  {/* Zipper line */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-accent/60 rounded-full"></div>
                  
                  {/* Zipper teeth */}
                  {[...Array(12)].map((_, i) => <div key={i} className="absolute w-2 h-1 bg-accent/80 rounded-sm" style={{
                left: '49%',
                top: `${15 + i * 6}%`,
                transform: 'translateX(-50%)'
              }}></div>)}
                  {[...Array(12)].map((_, i) => <div key={i} className="absolute w-2 h-1 bg-accent/80 rounded-sm" style={{
                left: '51%',
                top: `${15 + i * 6}%`,
                transform: 'translateX(-50%)'
              }}></div>)}
                  
                  {/* Zipper pull */}
                  <div className={`absolute w-4 h-6 bg-primary rounded-md top-2 left-1/2 transform -translate-x-1/2 transition-all duration-1500 ${isUnzipping ? 'translate-y-32' : ''}`}>
                    <div className="w-2 h-2 bg-primary-foreground rounded-full absolute top-1 left-1/2 transform -translate-x-1/2"></div>
                  </div>
                  
                  {/* Content behind zipper */}
                  <div className={`absolute inset-2 bg-card rounded transition-all duration-1500 ${isUnzipping ? 'animate-zipper-open' : 'clip-path-[polygon(0%_0%,100%_0%,100%_0%,0%_0%)]'}`}>
                    <div className="w-full h-full flex items-center justify-center text-6xl bg-[#ff98b3]/[0.74]">😳</div>
                  </div>
                </div>
                
                <div className="absolute -top-2 -right-2 bg-accent rounded-full p-2 shadow-lg">
                  <div className="text-2xl">👖</div>
                </div>
              </div>
              
              <Button onClick={handleUnzip} disabled={isUnzipping} className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold text-2xl px-12 py-6 rounded-full shadow-[var(--shadow-romantic)] hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50">
                {isUnzipping ? "Unzipping... 🤐" : "Unzip it 👀"}
              </Button>
            </div>
          </> : <div className="space-y-8">
            {/* Message appears */}
            {showMessage && <div className="space-y-8 animate-fade-in-up">
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-[var(--shadow-romantic)] border border-sweet/50">
                  <div className="text-2xl md:text-3xl font-body font-medium text-sweet-foreground leading-relaxed">Thank you for actually caring. I genuinely appreciate it more than you know. You're truly one of a kind. I don’t know how you do it, but my heart skips a beat every time I see your face. Please take good care of yourself</div>
                </div>
                
                {/* Final decorations */}
                <div className="flex justify-center space-x-8 text-4xl">
                  <div className="animate-heart-pop" style={{
              animationDelay: "0.5s"
            }}>💝</div>
                  <div className="animate-heart-pop" style={{
              animationDelay: "0.7s"
            }}>✨</div>
                  <div className="animate-heart-pop" style={{
              animationDelay: "0.9s"
            }}>😊</div>
                  <div className="animate-heart-pop" style={{
              animationDelay: "1.1s"
            }}>🌸</div>
                </div>

                {/* Sparkle shower */}
                {[...Array(15)].map((_, i) => <div key={i} className={`absolute animate-sparkle`} style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${1 + i * 0.1}s`
          }}>
                    <Sparkles className="h-4 w-4 text-accent" />
                  </div>)}
              </div>}
          </div>}
      </div>
    </div>;
};
export default FinalMessage;