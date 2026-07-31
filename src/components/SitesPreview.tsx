import React from 'react';

type SitesPreviewProps = {
  link: string;
};

export const SitesPreview: React.FC<SitesPreviewProps> = ({ link }) => {
  const containerStyle:React.CSSProperties = {
    width: '700px',
    height: '400px',
    overflow: 'hidden',
    position: 'relative',
    userSelect: 'none',

  };
  const simulatedWidth = 1200;
  const scaleFactor = 700 / simulatedWidth;
  const simulatedHeight = 400 / scaleFactor;

  const iframeStyle:React.CSSProperties = {
    width: `${simulatedWidth}px`,
    height: `${simulatedHeight}px`,
    
    border: 'none',
    transform: `scale(${scaleFactor})`,
    transformOrigin: 'top left',
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
