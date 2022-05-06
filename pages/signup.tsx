import { Box, Button, Flex, Icon, Input, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

export default function signup() {
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
                            Criar Conta
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
                            Ou regista-te com o e-mail
                        </Box>
                    </Flex>

                    {/* inputs */}
                    <Box>
                        <Stack spacing={4}>
                            <Input
                                placeholder='Nome'
                                borderRadius={5}
                                w={245}
                                h={30}
                            />
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
                            <Input
                                placeholder='Confirmar password'
                                borderRadius={5}
                                w={245}
                                h={30}
                            />
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
                            <Link href='/login'> Registar</Link>
                        </Button>
                    </Box>
                </Flex>
            </div>
            <div
                style={{
                    height: '531px',
                    width: '360px',
                    backgroundImage: `url("/dogSignUp.jpg")`,
                    position: 'relative',
                }}
            >
                <Flex
                    direction={'column'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    height={'100%'}
                >
                    <Box
                        fontWeight='bold'
                        color={'white'}
                        fontSize='25px'
                        mt={50}
                    >
                        Bem-vindo de volta!
                    </Box>

                    <Box>
                        <Button
                            style={{
                                background: 'white',
                                height: '45px',
                                width: '150px',
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
                            Iniciar Sessão
                        </Button>
                    </Box>
                </Flex>
            </div>
        </Flex>
    );
}
