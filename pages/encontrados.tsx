import { Box, Center } from '@chakra-ui/react';
import { Post, PrismaClient } from '@prisma/client';
import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const posts = await prisma.post.findMany();
    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts)),
        },
    };
};
type Props = {
    posts: Post[];
};

const Encontrados: NextPage<Props> = ({ posts }) => {
    return (
        <div>
            {posts.map((animal) => (
                <>
                    {animal.foundOrLost == 'ENCONTRADO' ? (
                        <Box
                            style={{
                                width: '300px',
                            }}
                        >
                            <Center>
                                <Box p='6'>
                                    <Box
                                        mt='1'
                                        fontWeight='semibold'
                                        as='h4'
                                        lineHeight='tight'
                                        isTruncated
                                    >
                                        {animal.name}
                                    </Box>
                                    <Box
                                        mt='1'
                                        as='p'
                                        lineHeight='tight'
                                        isTruncated
                                    >
                                        {animal.location}
                                    </Box>
                                </Box>
                            </Center>
                        </Box>
                    ) : null}
                </>
            ))}
        </div>
    );
};

export default Encontrados;
