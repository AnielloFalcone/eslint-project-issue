import type {FC, ElementType} from 'react';

interface ITestComponentYProps {
  component: ElementType;
}

const TestComponentY: FC<ITestComponentYProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentY};
export type {ITestComponentYProps};