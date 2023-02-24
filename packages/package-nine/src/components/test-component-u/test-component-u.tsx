import type {FC, ElementType} from 'react';

interface ITestComponentUProps {
  component: ElementType;
}

const TestComponentU: FC<ITestComponentUProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentU};
export type {ITestComponentUProps};