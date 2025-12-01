import React, { useEffect, useRef } from 'react';

export default function StrongTrainingLogo() {
    const circleRef = useRef(null);
    const text = "STRONG TRAINING GYM";

    useEffect(() => {
        if (circleRef.current) {
            circleRef.current.style.setProperty('--numchs', text.length);
        }
    }, []);

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <style>{`
                :root {
                    --value-a: 300px;
                    --circle-size: 130px;
                    --animation-time: 10s;
                    --letter-spacing: 340deg;
                    --circle-angle: -20deg;
                    --font-size: 50px;
                }
                
                * {
                    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
                }

                .content {  
                    height: 250px;
                    width: 50px;
                    transform: rotate(var(--circle-angle));
                    position: relative;
                }

                .circle {
                    height: 100%;
                    animation: animate var(--animation-time) linear infinite;
                    transform-style: preserve-3d;
                    --deg: calc((var(--letter-spacing) / (var(--numchs))));
                }

                @keyframes animate {
                    0% {
                        transform: perspective(var(--value-a)) rotateY(360deg);
                    }
                    100% {
                        transform: perspective(var(--value-a)) rotateY(0deg);
                    }
                }

                .circle .char {
                    color: transparent;
                    font-size: var(--font-size);
                    position: absolute;
                    transform: rotateY(calc(var(--char-index) * (var(--deg)))) translateZ(var(--circle-size)) scale(1, 1.8);
                    -webkit-text-stroke: 1pt #ffa500;
                    font-weight: bold;
                }

                .circle .char:nth-child(-n+6),
                .circle .char:nth-child(n+8):nth-child(-n+16) {
                    color: #FFD86D;
                    -webkit-text-stroke: 1px #ffa500;
                }
            `}</style>

            <div className="content ">
                <div ref={circleRef} className="circle">
                    {text.split('').map((char, index) => (
                        <div
                            key={index}
                            className="char"
                            style={{ '--char-index': index }}
                        >
                            {char}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}