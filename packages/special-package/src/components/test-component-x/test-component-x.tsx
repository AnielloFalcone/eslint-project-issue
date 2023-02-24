import type {FC, ElementType} from 'react';

interface ITestComponentXProps {
  component: ElementType;
}

const TestComponentX: FC<ITestComponentXProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentX};
export type {ITestComponentXProps};