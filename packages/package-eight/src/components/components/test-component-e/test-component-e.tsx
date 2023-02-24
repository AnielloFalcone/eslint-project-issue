import type {FC, ElementType} from 'react';

interface ITestComponentEProps {
  component: ElementType;
}

const TestComponentE: FC<ITestComponentEProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentE};
export type {ITestComponentEProps};