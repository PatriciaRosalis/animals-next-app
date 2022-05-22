import { useRouter } from 'next/router';

export default function Encontrados(props) {
    const router = useRouter();
    console.log(router, 'routes');
    return (
        <>
            <h2> single Encontrados </h2>
            <button type='button' onClick={() => router.push('/')}>
                Click me
            </button>
        </>
    );
}
