"use client";

export const PromptGallery = () => {
  const row1 = ['g34', 'g35', 'g36', 'g37', 'g38', 'g39'];
  const row2 = ['g40', 'g41', 'g42', 'g43', 'g44', 'g45'];

  // Duplicate 4 times to ensure smooth infinite scroll on large screens
  const row1Dup = [...row1, ...row1, ...row1, ...row1];
  const row2Dup = [...row2, ...row2, ...row2, ...row2];

  return (
    <div className="w-full mt-20 space-y-8 overflow-hidden">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
          Mobile Designs
        </h3>
      </div>

      {/* Row 1 - Left to Right (Items move right) */}
      <div className="relative w-full flex overflow-hidden">
         <div 
           className="flex gap-4 md:gap-6 animate-scroll-right"
           style={{
             width: "max-content",
           }}
         >
            {row1Dup.map((img, index) => (
              <div key={`r1-${index}`} className="relative h-[clamp(300px,40vh,500px)] aspect-auto shrink-0">
                 <img 
                    src={`/images/Ganson/${img}.png`} 
                    alt=""
                    className="h-full w-auto object-cover"
                 />
              </div>
            ))}
         </div>
      </div>

      {/* Row 2 - Right to Left (Items move left) */}
      <div className="relative w-full flex overflow-hidden">
         <div 
           className="flex gap-4 md:gap-6 animate-scroll-left"
           style={{
             width: "max-content",
           }}
         >
            {row2Dup.map((img, index) => (
              <div key={`r2-${index}`} className="relative h-[clamp(300px,40vh,500px)] aspect-auto shrink-0">
                 <img 
                    src={`/images/Ganson/${img}.png`} 
                    alt=""
                    className="h-full w-auto object-cover"
                 />
              </div>
            ))}
         </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
           animation: scroll-left 60s linear infinite;
        }
        .animate-scroll-right {
           animation: scroll-right 60s linear infinite;
        }
        @media (max-width: 768px) {
           .animate-scroll-left, .animate-scroll-right {
              animation-duration: 40s;
           }
        }
      `}</style>
    </div>
  );
};

