"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import base64ToBlob from "@/services/fotoConversor";

import blocos2 from "@/assets/img/blocos2.svg";
import styles from "@/styles/components/pessoas.module.scss";

interface Props {
    titulo: string;
    link: string;
}

interface Pessoal {
    nome: string;
    descricao: string;
    img: string;
    link: string;
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
            link: pessoa.link,
            img:
                blob.type === "image/jpeg"
                    ? URL.createObjectURL(blob)
                    : pessoa.img,
        };
    });

    return pessoal;
}

export default function Pessoal(props: Props) {
    const [pessoal, setPessoal] = useState<Pessoal[]>([]);

    useEffect(() => {
        // Exemplo de função assíncrona que retorna uma Promise
        async function obterArray() {
            const arrayRetornado = await getPessoal(props.link);
            setPessoal(arrayRetornado);
        }

        obterArray();
    }, []); // Certifique-se de fornecer um array vazio para o useEffect para que ele seja executado apenas uma vez

    return (
        <>
            {pessoal.length == 0 ? (
                <></>
            ) : (
                <div className={styles.pessoas}>
                    <Image src={blocos2} alt="" className={styles.img} />
                    <p className={styles.titulo}>{props.titulo}</p>
                    <div className={styles.pessoal}>
                        {props.link == "palestrantes" && (
                            <>
                                {pessoal.map((pessoa, index) => (
                                    <div
                                        className={styles.pessoa_container}
                                        key={index}
                                    >
                                        <div className={styles.pessoa_content}>
                                            <img
                                                src={pessoa.img}
                                                alt=""
                                                className={styles.pessoa_img}
                                            />
                                            <div className={styles.detalhes}>
                                                <p className={styles.nome}>
                                                    {pessoa.nome}
                                                </p>
                                                <p className={styles.descricao}>
                                                    {pessoa.descricao}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                        {props.link == "apoio" && (
                            <>
                                <div className={styles.apoio_container}>
                                    {pessoal.map((pessoa, index) => (
                                        <div
                                            className={styles.apoio_content}
                                            key={index}
                                        >
                                            <a
                                                href={pessoa.link}
                                                target="_blank"
                                                className={styles.apoio_link}
                                            >
                                                <img
                                                    src={pessoa.img}
                                                    alt=""
                                                    className={styles.apoio_img}
                                                />
                                                <p
                                                    className={
                                                        styles.apoio_nome
                                                    }
                                                >
                                                    {pessoa.nome}
                                                </p>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                        {props.link == "patrocinadores" && (
                            <>
                                <div className={styles.apoio_container}>
                                    {pessoal.map((pessoa, index) => (
                                        <div
                                            className={styles.apoio_content}
                                            key={index}
                                        >
                                            <img
                                                src={pessoa.img}
                                                alt=""
                                                className={styles.apoio_img}
                                            />
                                            <p className={styles.apoio_nome}>
                                                {pessoa.nome}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
