import React, {FunctionComponent} from 'react';

export type Props = {
    name: string,
    age: number
}
const Car: FunctionComponent<Props> = (props): JSX.Element => {
    const { name, age } = props
    return (<span>{name} {age} old</span>);
}

export default Car;