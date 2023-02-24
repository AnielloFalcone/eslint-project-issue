import type {FC, ElementType} from 'react';

interface ITestComponentHProps {
  component: ElementType;
}

const TestComponentH: FC<ITestComponentHProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentH};
export type {ITestComponentHProps};