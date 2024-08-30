import Image from 'next/image'

export default async function ConfiguracoesPage() {

    const url = "https://dog.ceo/api/breeds/image/random"

    const data = await fetch(url).then((res) =>
        res.json()
    )

    return (
        <>
            <h1>Configuracoes Page</h1>
            <Image alt='Dog Image' src={data.message} width='200' height='100'/>
        </>
    );
}