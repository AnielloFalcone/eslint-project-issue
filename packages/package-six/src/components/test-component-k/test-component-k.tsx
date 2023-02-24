import type {FC, ElementType} from 'react';

interface ITestComponentKProps {
  component: ElementType;
}

const TestComponentK: FC<ITestComponentKProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentK};
export type {ITestComponentKProps};