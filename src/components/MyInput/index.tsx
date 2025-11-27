import './index.scss'
import { forwardRef } from 'react';

interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isPassWord?: boolean;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    maxLength?: number;
}

export const MyInput = forwardRef<HTMLInputElement, InputProps>(({
    value,
    onChange,
    isPassWord = false,
    className = '',
    placeholder = '',
    disabled = false,
    maxLength
}, ref) => {

    return (
        <input
            ref={ref}
            className={`MyInput ${className}`}
            type={isPassWord ? 'password' : 'text'}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
        />
    )
})