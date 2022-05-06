import { Box, Button, Flex, Icon, Input, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

export default function login() {
    return (
        <Flex
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '55px',
            }}
        >
            <div
                style={{
                    height: '531px',
                    width: '360px',
                    backgroundImage: `url("/dogBackground.jpg")`,
                    position: 'relative',
                }}
            >
                <Flex
                    direction={'column'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    height={'100%'}
                >
                    <Flex direction={'column'} alignItems={'center'}>
                        <Box fontWeight='bold' fontSize='25px' mt={50}>
                            Olá, Amigo!
                        </Box>
                        <Box
                            fontWeight='light'
                            fontSize='18px'
                            mt={15}
                            w={250}
                            textAlign={'center'}
                        >
                            Para continuares tens que iniciar sessão ou criar
                            uma nova conta.
                        </Box>
                    </Flex>

                    <Box>
                        <Button
                            style={{
                                background: 'white',
                                height: '45px',
                                width: '120px',
                                color: 'rgba(244, 192, 4, 1)',
                                border: 'none',
                                borderRadius: '25px',
                                marginRight: '20px',
                                marginBottom: '60px',
                                cursor: 'pointer',
                                fontSize: '17px',
                                flex: 1,
                            }}
                        >
                            <Link href='/signup'>Criar Conta</Link>
                        </Button>
                    </Box>
                </Flex>
            </div>

            <div
                style={{
                    height: '531px',
                    width: '360px',
                    backgroundColor: 'black',
                }}
            >
                <Flex
                    direction={'column'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    height={'100%'}
                >
                    <Flex direction={'column'} alignItems={'center'}>
                        <Box
                            fontWeight='bold'
                            fontSize='25px'
                            mt={50}
                            color={'white'}
                        >
                            Iniciar Sessão
                        </Box>
                        <Flex mt={35}>
                            <Box>
                                <Icon
                                    as={BsFacebook}
                                    color={'#4267B2'}
                                    h={40}
                                    w={40}
                                />
                            </Box>
                            <Box>
                                <Icon
                                    as={AiFillGoogleCircle}
                                    color={'white'}
                                    h={46}
                                    w={50}
                                />
                            </Box>
                        </Flex>
                        <Box
                            fontWeight='light'
                            color={'#8E8E8E'}
                            fontSize='14px'
                            mt={45}
                            w={250}
                            textAlign={'center'}
                        >
                            ou usa o teu e-mail
                        </Box>
                    </Flex>

                    {/* inputs */}
                    <Box>
                        <Stack spacing={4}>
                            <Input
                                placeholder='E-mail'
                                borderRadius={5}
                                w={245}
                                h={30}
                            />
                            <Input
                                placeholder='Password'
                                borderRadius={5}
                                w={245}
                                h={30}
                            />
                            <Box
                                fontWeight='light'
                                color={'white'}
                                fontSize='10px'
                                mt={45}
                                w={250}
                                textAlign={'left'}
                            >
                                Esqueci-me da palavra-passe
                            </Box>
                        </Stack>
                    </Box>

                    <Box>
                        <Button
                            style={{
                                background: '#F4C004',
                                height: '45px',
                                width: '150px',
                                color: 'white',
                                border: 'none',
                                borderRadius: '25px',
                                marginRight: '20px',
                                marginBottom: '60px',
                                fontSize: '17px',
                                cursor: 'pointer',
                                flex: 1,
                            }}
                        >
                            Iniciar Sessão
                        </Button>
                    </Box>
                </Flex>
            </div>
        </Flex>
    );
}
