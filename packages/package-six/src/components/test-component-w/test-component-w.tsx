import type {FC, ElementType} from 'react';

interface ITestComponentWProps {
  component: ElementType;
}

const TestComponentW: FC<ITestComponentWProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentW};
export type {ITestComponentWProps};