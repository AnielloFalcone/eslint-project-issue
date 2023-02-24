import type {FC, ElementType} from 'react';

interface ITestComponentFProps {
  component: ElementType;
}

const TestComponentF: FC<ITestComponentFProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentF};
export type {ITestComponentFProps};