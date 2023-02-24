import type {FC, ElementType} from 'react';

interface ITestComponentNProps {
  component: ElementType;
}

const TestComponentN: FC<ITestComponentNProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentN};
export type {ITestComponentNProps};