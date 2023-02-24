import type {FC, ElementType} from 'react';

interface ITestComponentJProps {
  component: ElementType;
}

const TestComponentJ: FC<ITestComponentJProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentJ};
export type {ITestComponentJProps};