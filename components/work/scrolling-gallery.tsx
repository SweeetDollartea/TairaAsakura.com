"use client";

export const ScrollingGallery = () => {
  // Images g1-g12
  const images = Array.from({ length: 12 }, (_, i) => `/images/Ganson/g${i + 1}.png`);
  
  // Split into two rows
  const row1 = images.slice(0, 6);
  const row2 = images.slice(6, 12);

  // Tripling the array to ensure smooth infinite scroll without gaps
  const duplicatedRow1 = [...row1, ...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <div className="w-full mt-20 overflow-hidden space-y-8">
      {/* Row 1 - Left to Right */}
      <div className="relative w-full flex overflow-hidden">
         <div 
           className="flex gap-8 animate-scroll-right"
           style={{
             width: "max-content",
           }}
         >
            {duplicatedRow1.map((src, index) => (
              <div key={`row1-${index}`} className="relative h-[clamp(250px,30vh,320px)] aspect-auto shrink-0 overflow-hidden">
                 <img 
                    src={src} 
                    alt={`Gallery image ${index}`}
                    className="h-full w-auto object-cover"
                 />
              </div>
            ))}
         </div>
      </div>

      {/* Row 2 - Right to Left */}
      <div className="relative w-full flex overflow-hidden">
         <div 
           className="flex gap-8 animate-scroll-left"
           style={{
             width: "max-content",
           }}
         >
            {duplicatedRow2.map((src, index) => (
              <div key={`row2-${index}`} className="relative h-[clamp(250px,30vh,320px)] aspect-auto shrink-0 overflow-hidden">
                 <img 
                    src={src} 
                    alt={`Gallery image ${index}`}
                    className="h-full w-auto object-cover"
                 />
              </div>
            ))}
         </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
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

