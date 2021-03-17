import { Spin as AntdSpin } from 'antd';
import './spin.scss';

export enum SpinSize {
    Small = 'small',
    Default = 'default',
    Large = 'large',
}

export const Spin = ({
    spinning,
    size,
    delay,
    tip,
    className,
    children,
}: {
    spinning: boolean;
    size?: SpinSize;
    delay?: number;
    tip?: string;
    className?: string;
    children?: any;
}) => {
    return (
        <AntdSpin
            className={className}
            spinning={spinning}
            size={size}
            delay={delay}
            tip={tip}
        >
            {children}
        </AntdSpin>
    );
};
