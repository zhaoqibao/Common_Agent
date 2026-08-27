export function LangGraphLogoSVG({
                                     className,
                                     width,
                                     height,
                                 }: {
    width?: number;
    height?: number;
    className?: string;
}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="80" height="80">
            <defs>
                <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#4FACFE', stopOpacity: 1 }}/>
                    <stop offset="100%" style={{ stopColor: '#00F2FE', stopOpacity: 1 }}/>
                </linearGradient>

                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.9 }}/>
                    <stop offset="100%" style={{ stopColor: '#4FACFE', stopOpacity: 0 }}/>
                </radialGradient>
            </defs>


            <path d="M60,130
           C40,130 30,115 30,100
           C30,80 45,65 65,65
           C70,45 90,35 110,40
           C125,30 150,35 160,55
           C175,58 185,72 185,90
           C185,112 170,130 148,130
           Z"
                  fill="url(#cloudGrad)"
                  opacity="0.9"/>


            <circle cx="110" cy="95" r="28" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.8"/>


            <circle cx="100" cy="88" r="4" fill="white"/>
            <circle cx="120" cy="88" r="4" fill="white"/>
            <circle cx="110" cy="102" r="4" fill="white"/>
            <circle cx="105" cy="95" r="3" fill="white" opacity="0.7"/>
            <circle cx="115" cy="95" r="3" fill="white" opacity="0.7"/>

            <line x1="100" y1="88" x2="120" y2="88" stroke="white" stroke-width="1.5" opacity="0.6"/>
            <line x1="100" y1="88" x2="110" y2="102" stroke="white" stroke-width="1.5" opacity="0.6"/>
            <line x1="120" y1="88" x2="110" y2="102" stroke="white" stroke-width="1.5" opacity="0.6"/>
            <line x1="105" y1="95" x2="115" y2="95" stroke="white" stroke-width="1" opacity="0.5"/>
            <line x1="100" y1="88" x2="105" y2="95" stroke="white" stroke-width="1" opacity="0.5"/>
            <line x1="120" y1="88" x2="115" y2="95" stroke="white" stroke-width="1" opacity="0.5"/>


            <path d="M85,130 L85,145 Q85,155 95,155 L125,155 Q135,155 135,145 L135,130"
                  fill="none"
                  stroke="url(#cloudGrad)"
                  stroke-width="3"
                  stroke-linecap="round"/>

            <polygon points="95,150 100,158 105,150" fill="#00F2FE" opacity="0.8"/>
            <polygon points="115,160 120,152 125,160" fill="#4FACFE" opacity="0.8"/>

            <circle cx="110" cy="95" r="12" fill="url(#nodeGlow)" opacity="0.4"/>
        </svg>


    );
}