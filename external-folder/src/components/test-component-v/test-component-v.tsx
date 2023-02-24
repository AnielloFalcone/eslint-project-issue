import type {FC, ElementType} from 'react';

interface ITestComponentVProps {
  component: ElementType;
}

const TestComponentV: FC<ITestComponentVProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentV};
export type {ITestComponentVProps};