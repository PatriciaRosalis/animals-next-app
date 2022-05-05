import { Box } from '@chakra-ui/react';
import React from 'react';

type CardProps = {
    title: string;
    description: string;
    icon: JSX.Element;
};

export default function CardIcon({ icon, title, description }: CardProps) {
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
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
            <Box
                mt='1'
                fontWeight='regular'
                as='h4'
                lineHeight='tight'
                isTruncated
            >
                {description}
            </Box>
        </Box>
    );
}