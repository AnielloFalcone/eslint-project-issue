import type {FC, ElementType} from 'react';

interface ITestComponentMProps {
  component: ElementType;
}

const TestComponentM: FC<ITestComponentMProps> = ({
    component: Component = 'div',
    ...rest
}) => {
    return (
        <Component {...rest}/>
    );
};

export {TestComponentM};
export type {ITestComponentMProps};