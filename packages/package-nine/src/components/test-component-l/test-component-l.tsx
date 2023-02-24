import type {FC, ElementType} from 'react';

interface ITestComponentLProps {
  component: ElementType;
}

const TestComponentL: FC<ITestComponentLProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentL};
export type {ITestComponentLProps};