import type {FC, ElementType} from 'react';

interface ITestComponentBProps {
  component: ElementType;
}

const TestComponentB: FC<ITestComponentBProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentB};
export type {ITestComponentBProps};