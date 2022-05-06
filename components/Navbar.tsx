import { SearchIcon, SettingsIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return (
        <nav
            style={{
                height: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                background: 'white',
            }}
        >
            <div>
                <Link href='/'>
                    <Image
                        src='/logo.svg'
                        alt='logo'
                        width='38'
                        height='36'
                        style={{ cursor: 'pointer' }}
                    />
                </Link>
            </div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    width: '600px',
                }}
            >
                <Link href='/perdidos'>Perdidos</Link>
                <Link href='/'>Encontrados</Link>
                <Link href='/'>Adoção</Link>
                <Link href='/'>Associações</Link>
                <Link href='/'>Pet Sitting</Link>
            </div>

            <div>
                <Button
                    style={{
                        background: '#F4C004',
                        height: '30px',
                        width: '100px',
                        color: 'white',
                        border: 'none',
                        borderRadius: '3px',
                        cursor: 'pointer',
                    }}
                >
                    <Link href='/login'> Criar anúncio</Link>
                </Button>
            </div>

            <div>
                <SearchIcon style={{ marginRight: '10px' }} />
                <SettingsIcon />
            </div>
        </nav>
    );
}
