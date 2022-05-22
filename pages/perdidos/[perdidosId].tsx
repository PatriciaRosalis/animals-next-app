import { useRouter } from 'next/router';

export default function Perdidos(props) {
    const router = useRouter();
    console.log(router, 'routes');
    return (
        <>
            <h2> single Perdidos </h2>
            <button type='button' onClick={() => router.push('/')}>
                Click me
            </button>
        </>
    );
}
