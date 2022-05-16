import { FormLabel, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import React from 'react';

type RadioProps = {
    valueOne: string;
    valueTwo: string;
    description: string;
    htmlFor: string;
};

export default function RadioForm({
    valueOne,
    valueTwo,
    description,
    htmlFor,
    ...rest
}: RadioProps) {
    const [value, setValue] = React.useState('1');

    return (
        <>
            <FormLabel as='legend' htmlFor={htmlFor}>
                {description}
            </FormLabel>
            <RadioGroup onChange={setValue} value={value} {...rest}>
                <Stack direction='row'>
                    <Radio value={valueOne}>{valueOne}</Radio>
                    <Radio value={valueTwo}>{valueTwo}</Radio>
                </Stack>
            </RadioGroup>
        </>
    );
}
