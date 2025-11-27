import { CSSProperties } from 'react';
import './index.scss';

interface GlowCardProps {
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
    glowSize?: number;
    glowColor?: string;
    glowIntensity?: number;
    isShow?: boolean;
    onClick?: () => void;
}

export const GlowCard = ({
    children,
    className = '',
    style = {},
    glowSize = 180,
    glowColor = '255, 255, 255',
    glowIntensity = 0.8,
    isShow = true,
    onClick
}: GlowCardProps) => {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
        card.style.setProperty('--glow-size', `${glowSize}px`);
        card.style.setProperty('--glow-color', glowColor);
        card.style.setProperty('--glow-intensity', glowIntensity.toString());
    };

    return (
        <div
            className={`${className} ${isShow ? 'glow-card' : ''}`}
            style={style}
            onMouseMove={isShow ? handleMouseMove : undefined}
            onClick={onClick}
        >
            {children}
        </div>
    );
};