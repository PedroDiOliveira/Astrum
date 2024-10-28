import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
    const [nome, setNome] = useState('');  // Estado para armazenar o nome

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get("http://localhost:8080/bodie/planets/Jupiter");
                setNome(response.data.nome);  // Atualiza o estado com o nome recebido
            } catch (error) {
                console.error("Erro ao buscar o nome:", error);
            }
        };

        fetchData();
    }, []);  // Executa apenas uma vez, quando o componente é montado

    return (
        <h1>{nome}</h1>  // Renderiza o nome corretamente
    );
}
