import type {FC, ElementType} from 'react';

interface ITestComponentOProps {
  component: ElementType;
}

const TestComponentO: FC<ITestComponentOProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentO};
export type {ITestComponentOProps};