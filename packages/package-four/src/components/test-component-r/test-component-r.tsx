import type {FC, ElementType} from 'react';

interface ITestComponentRProps {
  component: ElementType;
}

const TestComponentR: FC<ITestComponentRProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentR};
export type {ITestComponentRProps};