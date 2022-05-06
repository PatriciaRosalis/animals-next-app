import { Box, Center } from '@chakra-ui/react';
import React from 'react';

type CardProps = {
    title: string;
    description: string;
    icon: JSX.Element;
};

export default function CardIcon({ icon, title, description }: CardProps) {
    return (
        <Box
            style={{
                width: '300px',
            }}
        >
            <Center>
                <Box p='6'>
                    {icon}
                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        isTruncated
                    >
                        {title}
                    </Box>
                    <Box mt='1' as='p' lineHeight='tight' isTruncated>
                        {description}
                    </Box>
                </Box>
            </Center>
        </Box>
    );
}
