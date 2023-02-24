import type {FC, ElementType} from 'react';

interface ITestComponentZProps {
  component: ElementType;
}

const TestComponentZ: FC<ITestComponentZProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentZ};
export type {ITestComponentZProps};