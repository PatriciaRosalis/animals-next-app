import { Box, Flex } from '@chakra-ui/react';
import { Post, PrismaClient } from '@prisma/client';
import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
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

const Perdidos: NextPage<Props> = ({ posts }) => {
    const router = useRouter();

    return (
        <Box>
            <div className='title-margins'>
                <h1
                    style={{
                        fontSize: '25px',
                        fontWeight: '300',
                    }}
                >
                    Perdidos
                </h1>
                <span
                    style={{
                        color: '#F4C004',
                        fontSize: '16px',
                    }}
                >
                    <Link href='/criar-anuncio'>→ Criar anúncio</Link>
                </span>
            </div>
            <Flex style={{ flexWrap: 'wrap' }} className='container-pat'>
                {posts.map((animal) => (
                    <div
                        key={animal.id}
                        onClick={() => router.push(`/perdidos/${animal.id}`)}
                    >
                        {animal.foundOrLost == 'PERDIDO' ? (
                            <Box p={4} style={{ cursor: 'pointer' }}>
                                <div
                                    style={{
                                        boxShadow:
                                            '0 4px 10px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    <Box as='p' lineHeight='tight' isTruncated>
                                        <Image
                                            alt='animal'
                                            width={300}
                                            height={400}
                                            src='https://images.unsplash.com/photo-1543852786-1cf6624b9987?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687'
                                        />
                                    </Box>
                                    <Flex
                                        justifyContent={'space-between'}
                                        p={2}
                                        pb={4}
                                    >
                                        <Box
                                            mt='1'
                                            fontWeight='semibold'
                                            as='h4'
                                            lineHeight='tight'
                                            isTruncated
                                        >
                                            {animal.location}
                                        </Box>

                                        <Box
                                            mt='1'
                                            as='p'
                                            lineHeight='tight'
                                            isTruncated
                                        >
                                            {animal.date
                                                .toString()
                                                .slice(0, 10)}
                                        </Box>
                                    </Flex>
                                </div>
                            </Box>
                        ) : null}
                    </div>
                ))}
            </Flex>
        </Box>
    );
};

export default Perdidos;
