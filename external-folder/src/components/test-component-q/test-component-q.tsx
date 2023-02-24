import type {FC, ElementType} from 'react';

interface ITestComponentQProps {
  component: ElementType;
}

const TestComponentQ: FC<ITestComponentQProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentQ};
export type {ITestComponentQProps};