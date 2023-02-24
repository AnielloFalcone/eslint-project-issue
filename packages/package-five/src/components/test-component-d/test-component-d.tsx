import type {FC, ElementType} from 'react';

interface ITestComponentDProps {
  component: ElementType;
}

const TestComponentD: FC<ITestComponentDProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentD};
export type {ITestComponentDProps};