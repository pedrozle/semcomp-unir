"use client";
import styles from "@/styles/components/atividades.module.scss";
import Carousel from "react-bootstrap/Carousel";
import base64ToBlob from "@/services/fotoConversor";

import { useEffect, useState } from "react";
import Image from "next/image";
import blocos2 from "@/assets/img/blocos2.svg";

interface Props {
    title: string;
    link: string;
}

interface Atividade {
    atividade?: number;
    titulo: string;
    ministrante: string;
    local: string;
    data: string;
    hora: string;
    img: string;
}

async function getAtividades(link: string) {
    const url = "/api/db?colecao=";

    const res = await fetch(`${url}${link}`, {
        next: { revalidate: 500 },
    });

    let atividades: Array<Atividade> = await res.json();

    atividades = atividades.map((atividade: Atividade) => {
        let blob: Blob = atividade.img
            ? base64ToBlob(atividade.img)
            : new Blob();

        return {
            titulo: atividade.titulo,
            ministrante: atividade.ministrante,
            local: atividade.local,
            data: atividade.data,
            hora: atividade.hora,
            img: atividade.img ? URL.createObjectURL(blob) : "",
        };
    });

    return atividades;
}

export default function Atividades(props: Props) {
    const [atividades, setAtividades] = useState<Atividade[]>([]);

    useEffect(() => {
        // Exemplo de função assíncrona que retorna uma Promise
        async function obterArray() {
            const arrayRetornado = await getAtividades(props.link);
            setAtividades(arrayRetornado);
        }

        obterArray();
    }, []); // Certifique-se de fornecer um array vazio para o useEffect para que ele seja executado apenas uma vez

    return (
        <>
            {atividades.length === 0 ? (
                <></>
            ) : (
                <>
                    <div className={styles.atividades}>
                        <Image src={blocos2} alt="" className={styles.blocos} />
                        <p className={styles.title}>{props.title}</p>

                        <div className={styles.conteudo}>
                            <Carousel>
                                {atividades.map(
                                    (atividade: Atividade, index: number) => (
                                        <Carousel.Item key={index}>
                                            <div className={styles.data}>
                                                <div className={styles.mask}>
                                                    {atividade.img.length >
                                                    0 ? (
                                                        <>
                                                            <img
                                                                src={
                                                                    atividade.img
                                                                }
                                                                alt=""
                                                                className={
                                                                    styles.img
                                                                }
                                                            />
                                                        </>
                                                    ) : (
                                                        <>
                                                            <img
                                                                src="https://placehold.co/600x400"
                                                                alt=""
                                                                className={
                                                                    styles.img
                                                                }
                                                            />
                                                        </>
                                                    )}
                                                </div>
                                                <div className={styles.caption}>
                                                    <p
                                                        className={
                                                            styles.legenda_title
                                                        }
                                                    >
                                                        {atividade.titulo}
                                                    </p>
                                                    <p
                                                        className={
                                                            styles.palestrante
                                                        }
                                                    >
                                                        {atividade.ministrante}
                                                    </p>
                                                    <div
                                                        className={
                                                            styles.datahora
                                                        }
                                                    >
                                                        <p>
                                                            {atividade.data}{" "}
                                                            <br /> às{" "}
                                                            {atividade.hora}
                                                        </p>
                                                        <p>
                                                            Local:{" "}
                                                            {atividade.local}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                    )
                                )}
                            </Carousel>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
