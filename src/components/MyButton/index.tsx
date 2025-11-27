import { CSSProperties } from 'react';
import { GlowCard } from '@/components/GlowCard';
import './index.scss';

type ButtonSize = 'small' | 'medium' | 'large';

interface MyButtonProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    size?: ButtonSize;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
    backgroundColor?: string;
    textColor?: string;
    glowColor?: string;
    glowSize?: number;
}

export const MyButton = ({
    children,
    icon,
    size = 'medium',
    onClick,
    disabled = false,
    className = '',
    style = {},
    backgroundColor = '#000000',
    textColor = '#ffffff',
    glowColor = '255, 255, 255',
    glowSize = 150
}: MyButtonProps) => {
    const handleClick = () => {
        if (!disabled && onClick) {
            onClick();
        }
    };

    return (
        <GlowCard
            className={`my-button my-button--${size} ${disabled ? 'my-button--disabled' : ''} ${className}`}
            style={{
                backgroundColor,
                color: textColor,
                ...style
            }}
            glowColor={glowColor}
            glowSize={glowSize}
            glowIntensity={0.4}
            isShow={!disabled}
            onClick={handleClick}
        >
            {icon && <span className="my-button__icon">{icon}</span>}
            <span className="my-button__text">{children}</span>
        </GlowCard>
    );
};