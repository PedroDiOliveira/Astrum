import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
    const [nome, setNome] = useState(''); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get("http://localhost:8080/bodie/planets/Earth");
                setNome(response.data.name); 
            } catch (error) {
                console.error("Erro ao buscar o nome:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <h1>{nome}</h1>
    );
}
