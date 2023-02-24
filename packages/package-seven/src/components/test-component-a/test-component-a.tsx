import type {FC, ElementType} from 'react';

interface ITestComponentAProps {
  component: ElementType;
}

const TestComponentA: FC<ITestComponentAProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentA};
export type {ITestComponentAProps};