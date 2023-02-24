import type {FC, ElementType} from 'react';

interface ITestComponentIProps {
  component: ElementType;
}

const TestComponentI: FC<ITestComponentIProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentI};
export type {ITestComponentIProps};