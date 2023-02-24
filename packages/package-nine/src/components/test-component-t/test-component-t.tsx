import type {FC, ElementType} from 'react';

interface ITestComponentTProps {
  component: ElementType;
}

const TestComponentT: FC<ITestComponentTProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentT};
export type {ITestComponentTProps};