import type {FC, ElementType} from 'react';

interface ITestComponentPProps {
  component: ElementType;
}

const TestComponentP: FC<ITestComponentPProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentP};
export type {ITestComponentPProps};