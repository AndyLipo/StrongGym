import { useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'motion/react';

import './CircularText.css';

const getRotationTransition = (duration, from, loop = true) => ({
    from,
    to: from + 360,
    ease: 'linear',
    duration,
    type: 'tween',
    repeat: loop ? Infinity : 0
});

const getTransition = (duration, from) => ({
    rotate: getRotationTransition(duration, from),
    scale: {
        type: 'spring',
        damping: 20,
        stiffness: 300
    }
});

const StrongTrainingLogo2 = ({ segments, spinDuration = 20, onHover = 'speedUp', className = '' }) => {
    // Validar que segments exista
    if (!segments || !Array.isArray(segments) || segments.length === 0) {
        console.error('StrongTrainingLogo2: segments prop is required and must be an array');
        return null;
    }

    // Crear un array de letras con su color correspondiente
    const lettersWithColors = [];
    segments.forEach(segment => {
        const letters = Array.from(segment.text);
        letters.forEach(letter => {
            lettersWithColors.push({
                letter,
                color: segment.color || '#FFFFFF'
            });
        });
    });

    const controls = useAnimation();
    const rotation = useMotionValue(0);

    useEffect(() => {
        const start = rotation.get();
        controls.start({
            rotate: start + 360,
            scale: 1,
            transition: getTransition(spinDuration, start)
        });
    }, [spinDuration, segments, onHover, controls, rotation]);

    const handleHoverStart = () => {
        const start = rotation.get();
        if (!onHover) return;

        let transitionConfig;
        let scaleVal = 1;

        switch (onHover) {
            case 'slowDown':
                transitionConfig = getTransition(spinDuration * 2, start);
                break;
            case 'speedUp':
                transitionConfig = getTransition(spinDuration / 4, start);
                break;
            case 'pause':
                transitionConfig = {
                    rotate: { type: 'spring', damping: 20, stiffness: 300 },
                    scale: { type: 'spring', damping: 20, stiffness: 300 }
                };
                scaleVal = 1;
                break;
            case 'goBonkers':
                transitionConfig = getTransition(spinDuration / 20, start);
                scaleVal = 0.8;
                break;
            default:
                transitionConfig = getTransition(spinDuration, start);
        }

        controls.start({
            rotate: start + 360,
            scale: scaleVal,
            transition: transitionConfig
        });
    };

    const handleHoverEnd = () => {
        const start = rotation.get();
        controls.start({
            rotate: start + 360,
            scale: 1,
            transition: getTransition(spinDuration, start)
        });
    };

    return (
        <motion.div
            className={`circular-text ${className}`}
            style={{ rotate: rotation }}
            initial={{ rotate: 0 }}
            animate={controls}
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
        >
            {lettersWithColors.map((item, i) => {
                const rotationDeg = (360 / lettersWithColors.length) * i;
                const factor = Math.PI / lettersWithColors.length;
                const x = factor * i;
                const y = factor * i;
                const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

                return (
                    <span
                        key={i}
                        style={{
                            transform,
                            WebkitTransform: transform,
                            color: item.color
                        }}
                    >
                        {item.letter}
                    </span>
                );
            })}
        </motion.div>
    );
};

export default StrongTrainingLogo2;