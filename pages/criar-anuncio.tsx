import {
    Box,
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    Stack,
    Text,
    Textarea,
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { API } from '../API/API';
import UploadImage from '../components/UploadImage';

export async function getServerSideProps() {
    return {
        props: { posts: [] },
    };
}

export type IAnimalForm = {
    name: string;
    phoneNumber: string;
    email: string;
    usernameFacebook: string;
    age: number;
    location: string;
    sterilized: 'YES' | 'NO' | 'DONT';
    missingPlace: string;
    sex: 'MALE' | 'FEMALE' | 'DONT';
    time: string;
    date: string;
    chip: 'YES' | 'NO' | 'DONT';
    foundOrLost: 'PERDIDO' | 'ENCONTRADO';
    importantInformation: string;
    importantCharacteristic: string;
};

export default function CreatePost() {
    // Form
    const {
        control,
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm<IAnimalForm>();

    const onSubmit = async (data: IAnimalForm) => {
        console.log(data);
        mutation.mutate(data);
    };

    //Mutation
    const mutation = useMutation(API.postAnimal, {
        onError: (e) => {
            console.log('Error: ', e);
        },
    });

    if (mutation.isSuccess) {
        return <p>ANUNCIO AGUARDA APROVACAO</p>;
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <FormControl isInvalid={!!errors.name}>
                <Container>
                    <VStack spacing={4} align='stretch'>
                        <Box fontWeight='bold' fontSize='20px' mt={20} mb={5}>
                            Dados do Pet:
                        </Box>

                        {/* <input type='file' /> */}
                        <UploadImage />

                        <FormLabel htmlFor='foundOrLost'>
                            Encontrou ou perdeu um animal?
                        </FormLabel>
                        <Controller
                            name='foundOrLost'
                            control={control}
                            render={({ field }) => (
                                <RadioGroup {...field}>
                                    <Stack direction='row'>
                                        <Radio value='PERDIDO'>Perdi</Radio>
                                        <Radio value='ENCONTRADO'>
                                            Encontrei
                                        </Radio>
                                    </Stack>
                                </RadioGroup>
                            )}
                            rules={{
                                required: {
                                    value: true,
                                    message: 'This is required.',
                                },
                            }}
                        />

                        <FormLabel htmlFor='name'>Nome:</FormLabel>
                        <Input
                            id='name'
                            placeholder='name'
                            {...register('name', {
                                required: 'This is required',
                            })}
                        />
                        <FormErrorMessage>
                            {errors.name && errors.name.message}
                        </FormErrorMessage>

                        <FormLabel htmlFor='age'>Idade:</FormLabel>
                        <Input id='age' type='age' {...register('age')} />
                        <FormErrorMessage>
                            {errors.age && errors.age.message}
                        </FormErrorMessage>

                        <FormLabel htmlFor='location'>Localidade:</FormLabel>
                        <Input
                            id='location'
                            type='location'
                            {...register('location', {
                                required: 'This is required',
                            })}
                        />
                        <FormErrorMessage>
                            {errors.location && errors.location.message}
                        </FormErrorMessage>

                        <FormLabel htmlFor='missingPlace'>
                            Desapareceu noutra localidade? Se sim, qual?
                        </FormLabel>
                        <Input
                            id='missingPlace'
                            type='missingPlace'
                            {...register('missingPlace')}
                        />

                        <FormLabel htmlFor='date'>Dia:</FormLabel>
                        <Input
                            id='date'
                            type='date'
                            {...register('date', {
                                required: 'This is required',
                            })}
                        />

                        <FormLabel htmlFor='time'>Horas:</FormLabel>
                        <Input
                            id='time'
                            type='time'
                            {...register('time', {
                                required: 'This is required',
                            })}
                        />
                        <FormErrorMessage>
                            {errors.time && errors.time.message}
                        </FormErrorMessage>

                        <FormLabel htmlFor='time'>Sexo:</FormLabel>
                        <Controller
                            name='sex'
                            control={control}
                            render={({ field }) => (
                                <RadioGroup {...field}>
                                    <Stack direction='row'>
                                        <Radio value='MALE'>Macho</Radio>
                                        <Radio value='FEMALE'>Femea</Radio>
                                        <Radio value='DONT'>Nao sei</Radio>
                                    </Stack>
                                </RadioGroup>
                            )}
                            rules={{
                                required: {
                                    value: true,
                                    message: 'This is required.',
                                },
                            }}
                        />

                        <FormLabel htmlFor='time'>Tem chip:</FormLabel>
                        <Controller
                            name='chip'
                            control={control}
                            render={({ field }) => (
                                <RadioGroup {...field}>
                                    <Stack direction='row'>
                                        <Radio value='YES'>Sim</Radio>
                                        <Radio value='NO'>Nao</Radio>
                                        <Radio value='DONT'>Nao sei</Radio>
                                    </Stack>
                                </RadioGroup>
                            )}
                            rules={{
                                required: {
                                    value: true,
                                    message: 'This is required.',
                                },
                            }}
                        />

                        <FormLabel htmlFor='time'>
                            Esta castrado/esterelizada?
                        </FormLabel>
                        <Controller
                            name='sterilized'
                            control={control}
                            render={({ field }) => (
                                <RadioGroup {...field}>
                                    <Stack direction='row'>
                                        <Radio value='YES'>Sim</Radio>
                                        <Radio value='NO'>Nao</Radio>
                                        <Radio value='DONT'>Nao sei</Radio>
                                    </Stack>
                                </RadioGroup>
                            )}
                            rules={{
                                required: {
                                    value: true,
                                    message: 'This is required.',
                                },
                            }}
                        />

                        <Text mb='8px'>Alguma informação importante? </Text>
                        <Textarea
                            placeholder='Ex: Tem medo de gatos e não gosta de ser transportada ao colo.'
                            size='sm'
                            {...register('importantInformation')}
                        />
                        <FormErrorMessage>
                            {errors.importantInformation &&
                                errors.importantInformation.message}
                        </FormErrorMessage>

                        <Text mb='8px'>Alguma característica importante?</Text>
                        <Textarea
                            placeholder='Ex: Tem uma coleira com os nossos contactos/morada e tem uma mancha preta na barriga.'
                            size='sm'
                            {...register('importantCharacteristic')}
                        />
                        <FormErrorMessage>
                            {errors.importantCharacteristic &&
                                errors.importantCharacteristic.message}
                        </FormErrorMessage>
                    </VStack>
                </Container>
                <Container>
                    <VStack spacing={4} align='stretch'>
                        <Box fontWeight='bold' fontSize='20px' mt={10} mb={5}>
                            Contactos
                        </Box>

                        <FormLabel htmlFor='phoneNumber'>
                            Nº telefone:
                        </FormLabel>
                        <Input
                            id='phoneNumber'
                            type='number'
                            {...register('phoneNumber')}
                        />

                        <FormLabel htmlFor='email'>Email:</FormLabel>
                        <Input
                            id='email'
                            type='email'
                            {...register('email', {
                                required: 'This is required',
                            })}
                        />

                        <FormLabel htmlFor='usernameFacebook'>
                            Username Facebook:
                        </FormLabel>
                        <Input
                            id='usernameFacebook'
                            type='text'
                            {...register('usernameFacebook')}
                        />

                        <Button
                            type='submit'
                            isLoading={isSubmitting}
                            style={{
                                background: '#F4C004',
                                height: '45px',
                                width: '140px',
                                color: 'white',
                                border: 'none',
                                borderRadius: '3px',
                                cursor: 'pointer',
                                marginTop: '40px',
                                marginBottom: '30px',
                            }}
                        >
                            Criar anúncio
                        </Button>
                    </VStack>
                </Container>
            </FormControl>
        </form>
    );
}
