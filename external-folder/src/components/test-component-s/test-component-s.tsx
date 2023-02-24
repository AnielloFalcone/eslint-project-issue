import type {FC, ElementType} from 'react';

interface ITestComponentSProps {
  component: ElementType;
}

const TestComponentS: FC<ITestComponentSProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentS};
export type {ITestComponentSProps};