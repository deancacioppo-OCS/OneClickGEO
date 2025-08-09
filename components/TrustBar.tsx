
import React from 'react';

const TrustBar: React.FC = () => {
    // In a real app, these would be actual client logos
    const logos = [
        { name: 'Placeholder Inc', path: 'M12.28,6.88a1.2,1.2,0,0,0-1.7,0,1.21,1.21,0,0,0,0,1.71L14.44,12,10.58,15.86a1.21,1.21,0,0,0,0,1.71,1.2,1.2,0,0,0,1.7,0L16.14,13.7a1.21,1.21,0,0,0,0-1.71Z' },
        { name: 'Innovate Corp', path: 'M11.63,8.38a.88.88,0,0,0-1.24,0,.87.87,0,0,0,0,1.24l2.83,2.83L7.39,15.28a.88.88,0,0,0,1.25,1.25l4.24-3.18,1.41-4.24A.87.87,0,0,0,11.63,8.38Z' },
        { name: 'Solutions Co', path: 'M21.4,8.51,19,4.22a.52.52,0,0,0-.9,0L15.6,8.51a.51.51,0,0,0,.45.76H18.5V18h-3a.5.5,0,0,0,0,1H20a.5.5,0,0,0,0-1H18.5V9.27h2.45a.51.51,0,0,0,.45-.76Z M5.5,5h3A.5.5,0,0,0,8.5,4H4A.5.5,0,0,0,4,5H5.5V19.78L3,15.49a.52.52,0,0,0-.9,0l-2.45,4.29a.51.51,0,0,0,.45.76H2.55V9.27h-2.1a.5.5,0,0,0,0,1H4a.5.5,0,0,0,0-1H2.55V5Z' },
        { name: 'TechGroup', path: 'M18.83,10.17,17,7.5V3h3V7.5l-1.83,2.67M18,1,16,3.5V7l3,4H13l3-4V3.5L14,1H10L8,3.5V7l3,4H5L8,7V3.5L6,1H2V14H6v9l6-11V23l6-11V14h4V1Z' },
        { name: 'Future Systems', path: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z M12,7a.91.91,0,0,0-1,1V12a1,1,0,0,0,2,0V8A.91.91,0,0,0,12,7Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,12,15Z' },
    ];

    return (
        <div className="bg-surface py-8">
            <div className="container mx-auto px-6">
                <p className="text-center text-text-muted font-semibold uppercase tracking-wider">
                    Pioneering GEO Strategies for Industry Leaders
                </p>
                <div className="mt-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                    {logos.map((logo, index) => (
                        <svg key={index} className="h-8 w-auto text-text-muted" viewBox="0 0 24 24" fill="currentColor">
                            <title>{logo.name}</title>
                            <path d={logo.path} />
                        </svg>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;