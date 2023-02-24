import type {FC, ElementType} from 'react';

interface ITestComponentCProps {
  component: ElementType;
}

const TestComponentC: FC<ITestComponentCProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentC};
export type {ITestComponentCProps};