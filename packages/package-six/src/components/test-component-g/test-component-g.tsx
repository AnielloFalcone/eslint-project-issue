import type {FC, ElementType} from 'react';

interface ITestComponentGProps {
  component: ElementType;
}

const TestComponentG: FC<ITestComponentGProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentG};
export type {ITestComponentGProps};