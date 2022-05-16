import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <QueryClientProvider client={queryClient}>
                <Navbar />
                <Component {...pageProps} />
            </QueryClientProvider>
        </ChakraProvider>
    );
}

export default MyApp;
