import {
    CalendarIcon,
    ChatIcon,
    InfoIcon,
    Search2Icon,
    SunIcon,
    WarningTwoIcon,
} from '@chakra-ui/icons';
import { Button, Center, Divider, Flex, Wrap } from '@chakra-ui/react';
import { Post, PrismaClient } from '@prisma/client';
import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import CardIcon from '../components/shared/CardIcon';

const prisma = new PrismaClient();

const cardsData = [
    {
        title: 'Perdidos',
        description: 'teste',
        icon: <WarningTwoIcon color='#67C0E7' />,
    },
    {
        title: 'Encontrados',
        description: 'teste2',
        icon: <Search2Icon color='#E4E840' />,
    },
    {
        title: 'Adoção',
        description: 'teste3',
        icon: <SunIcon color='#67C0E7' />,
    },
    {
        title: 'Associações',
        description: 'teste4',
        icon: <ChatIcon color='#72389F' />,
    },
    {
        title: 'Pet Sitting',
        description: 'teste5',
        icon: <CalendarIcon color='#B9E1A0' />,
    },
    {
        title: 'Novidades',
        description: 'teste6',
        icon: <InfoIcon color='#12775F' />,
    },
];

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

const Home: NextPage<Props> = ({ posts }) => {
    // const [pets, setPets] =
    //     useState<Prisma.UserUncheckedCreateInput[]>(posts);

    return (
        <div
            style={{
                backgroundImage: `url("/paws.svg")`,
                height: '100vh',
            }}
        >
            <>
                <div className='banner'>
                    <Flex
                        style={{
                            justifyContent: 'space-around',
                            alignItems: 'center',
                        }}
                    >
                        <div>
                            <Image
                                src='/slogan.svg'
                                alt='Slogan'
                                width='362'
                                height='243'
                            />
                        </div>
                        <div>
                            <Image
                                src='/dog.jpg'
                                alt='Dog'
                                width='413'
                                height='412'
                            />
                        </div>
                    </Flex>

                    <Center style={{ marginTop: '40px' }}>
                        <Button
                            style={{
                                background: '#134C5F',
                                height: '45px',
                                width: '120px',
                                color: 'white',
                                border: 'none',
                                borderRadius: '3px',
                                marginRight: '20px',
                                cursor: 'pointer',
                            }}
                        >
                            Contactos
                        </Button>
                        <Button
                            style={{
                                background: '#DEF1F2',
                                height: '45px',
                                width: '120px',
                                color: '#134C5F',
                                border: 'none',
                                borderRadius: '3px',
                                cursor: 'pointer',
                            }}
                        >
                            Saber mais
                        </Button>
                    </Center>
                </div>

                <Center mt={50}>
                    <h1>SOBRE NÓS</h1>
                </Center>

                <Divider mb={10} />

                <Wrap m={20} p={15}>
                    {cardsData.map((card) => {
                        return (
                            <CardIcon
                                key={card.title}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                            />
                        );
                    })}
                </Wrap>
            </>
        </div>
    );
};

export default Home;
