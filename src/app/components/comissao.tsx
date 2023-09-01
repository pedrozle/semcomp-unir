"use client";
import base64ToBlob from "@/services/fotoConversor";
import styles from "@/styles/components/comissao.module.scss";
import { useEffect, useState } from "react";
import Bloco from "./bloco";

interface Pessoal {
    nome: string;
    descricao: string;
    img: string;
}

async function getPessoal(link: string) {
    const url = "/api/db?colecao=";

    const res = await fetch(`${url}${link}`, {
        next: { revalidate: 500 },
    });

    let pessoal: Array<Pessoal> = await res.json();

    pessoal = pessoal.map((pessoa: Pessoal) => {
        let blob: Blob = pessoa.img.includes("data=")
            ? base64ToBlob(pessoa.img)
            : new Blob();
        return {
            nome: pessoa.nome,
            descricao: pessoa.descricao,
            img:
                blob.type === "image/jpeg"
                    ? URL.createObjectURL(blob)
                    : pessoa.img,
        };
    });

    return pessoal;
}

export default function Comissao() {
    const [pessoal, setPessoal] = useState<Pessoal[]>([]);

    useEffect(() => {
        // Exemplo de função assíncrona que retorna uma Promise
        async function obterArray() {
            const arrayRetornado = await getPessoal("comissao");
            setPessoal(arrayRetornado);
        }

        obterArray();
    }, []); // Certifique-se de fornecer um array vazio para o useEffect para que ele seja executado apenas uma vez

    return (
        <>
            <div className={styles.pessoal}>
                <div className={styles.cabecalho}>
                    <p className={styles.titulo}>Comissão Organizadora</p>
                    <p className={styles.subtitulo}>
                        As pessoas que se esforçaram para idealizar e tornar o
                        evento possível! ✨
                    </p>
                </div>
                <div className={styles.carrossel}>
                    {pessoal.map((pessoa, index) => (
                        <>
                            <Bloco
                                nome={pessoa.nome}
                                descricao={pessoa.descricao}
                                img={pessoa.img}
                                key={index}
                            />
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}
