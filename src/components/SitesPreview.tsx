import React, { useEffect, useState } from "react";

type SitesPreviewProps = {
  link: string;
};

export const SitesPreview: React.FC<SitesPreviewProps> = ({ link }) => {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let containerWidth = 700; 
  let simulatedWidth = 1200;
  let simulatedHeight = 700;
  const isMobile = width <= 640;
  
  if (width <= 640) {
    containerWidth = Math.min(width - 32, 360);
    simulatedWidth = 375;
    simulatedHeight = 600;
  } else if (width <= 1024) {
    containerWidth = Math.min(width - 64, 600);
    simulatedWidth = 768;
    simulatedHeight = 500;
  } else {
    containerWidth = 700;
    simulatedWidth = 1200;
    simulatedHeight = 700;
  }

  const scaleFactor = containerWidth / simulatedWidth;
  const containerHeight = simulatedHeight * scaleFactor;

  const containerStyle: React.CSSProperties = {
    width: `${containerWidth}px`,
    height: `${containerHeight}px`,
    overflow: "hidden",
    position: "relative",
    userSelect: "none",
    margin: "0 auto",
    borderRadius: "12px",
  };

  const iframeStyle: React.CSSProperties = {
    width: `${simulatedWidth}px`,
    height: `${simulatedHeight}px`,
    border: "none",
    transform: `scale(${scaleFactor})`,
    transformOrigin: "top left",
    pointerEvents: isMobile ? "none" : "auto",
  };

  return (
    <div className="preview-container" style={containerStyle}>
      <iframe
        src={link}
        title="Scaled Site Preview"
        style={iframeStyle}
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
};