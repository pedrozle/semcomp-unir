"use client";

import styles from "@/styles/agenda.module.scss";
import base64ToBlob from "@/services/fotoConversor";

import { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import AgendaItem from "../components/agendaItem";

interface Atividade {
    atividade: number;
    titulo: string;
    ministrante: string;
    local: string;
    data: string;
    hora: string;
    palestrante_img_1?: string;
    palestrante_img_2?: string;
}

async function getAtividades(link: string) {
    const url = "/api/db?colecao=";

    const res = await fetch(`${url}${link}`, {
        next: { revalidate: 500 },
    });

    let atividades: Array<Atividade> = await res.json();

    atividades = atividades.map((atividade: Atividade) => {
        let palestrante_img_1_blob: Blob = atividade.palestrante_img_1
            ? base64ToBlob(atividade.palestrante_img_1)
            : new Blob();
        let palestrante_img_2_blob: Blob = atividade.palestrante_img_2
            ? base64ToBlob(atividade.palestrante_img_2)
            : new Blob();

        return {
            atividade: atividade.atividade,
            titulo: atividade.titulo,
            ministrante: atividade.ministrante,
            local: atividade.local,
            data: atividade.data,
            hora: atividade.hora,
            palestrante_img_1:
                palestrante_img_1_blob.type === "image/jpeg"
                    ? URL.createObjectURL(palestrante_img_1_blob)
                    : "",
            palestrante_img_2:
                palestrante_img_2_blob.type === "image/jpeg"
                    ? URL.createObjectURL(palestrante_img_2_blob)
                    : "",
        };
    });
    console.log(atividades);

    return atividades;
}

export default function Page() {
    const [atividades, setAtividades] = useState<Atividade[]>([]);
    const [key, setKey] = useState("abertura");

    useEffect(() => {
        // Exemplo de função assíncrona que retorna uma Promise
        async function obterArray() {
            const arrayRetornado = await getAtividades("atividades-abertura");
            setAtividades(arrayRetornado);
        }

        obterArray();
    }, []); // Certifique-se de fornecer um array vazio para o useEffect para que ele seja executado apenas uma vez

    async function buscarAtividades(link: string) {
        setAtividades([]);
        const arrayRetornado = await getAtividades(`atividades-${link}`);
        setAtividades(arrayRetornado);
    }

    return (
        <div className={styles.agenda}>
            <div className={styles.cabecalho}>
                <p className={styles.titulo}>printf(&quot;Programação&quot;)</p>
            </div>
            <Tabs
                activeKey={key}
                onSelect={(k: any) => {
                    console.log(k);
                    buscarAtividades(k);
                    setKey(k);
                }}
                id="controlled-tab-example"
                className="mb-3"
                fill
            >
                <Tab eventKey="abertura" title="Abertura">
                    <div className={styles.items}>
                        {atividades.map((atividade, index) => (
                            <>
                                <AgendaItem
                                    key={index}
                                    atividade={atividade.atividade}
                                    titulo={atividade.titulo}
                                    ministrante={atividade.ministrante}
                                    local={atividade.local}
                                    data={atividade.data}
                                    hora={atividade.hora}
                                    palestrante_img_1={
                                        atividade.palestrante_img_1
                                    }
                                    palestrante_img_2={
                                        atividade.palestrante_img_2
                                    }
                                />
                            </>
                        ))}
                    </div>
                </Tab>
                <Tab eventKey="palestras" title="Palestras">
                    <div className={styles.items}>
                        {atividades.map((atividade, index) => (
                            <>
                                <AgendaItem
                                    key={index}
                                    atividade={atividade.atividade}
                                    titulo={atividade.titulo}
                                    ministrante={atividade.ministrante}
                                    local={atividade.local}
                                    data={atividade.data}
                                    hora={atividade.hora}
                                    palestrante_img_1={
                                        atividade.palestrante_img_1
                                    }
                                    palestrante_img_2={
                                        atividade.palestrante_img_2
                                    }
                                />
                            </>
                        ))}
                    </div>
                </Tab>
                <Tab eventKey="minicursos" title="Minicursos">
                    <div className={styles.items}>
                        {atividades.map((atividade, index) => (
                            <>
                                <AgendaItem
                                    key={index}
                                    atividade={atividade.atividade}
                                    titulo={atividade.titulo}
                                    ministrante={atividade.ministrante}
                                    local={atividade.local}
                                    data={atividade.data}
                                    hora={atividade.hora}
                                    palestrante_img_1={
                                        atividade.palestrante_img_1
                                    }
                                    palestrante_img_2={
                                        atividade.palestrante_img_2
                                    }
                                />
                            </>
                        ))}
                    </div>
                </Tab>
                <Tab eventKey="sessao" title="Sessão de Painéis">
                    <div className={styles.items}>
                        {atividades.map((atividade, index) => (
                            <>
                                <AgendaItem
                                    key={index}
                                    atividade={atividade.atividade}
                                    titulo={atividade.titulo}
                                    ministrante={atividade.ministrante}
                                    local={atividade.local}
                                    data={atividade.data}
                                    hora={atividade.hora}
                                    palestrante_img_1={
                                        atividade.palestrante_img_1
                                    }
                                    palestrante_img_2={
                                        atividade.palestrante_img_2
                                    }
                                />
                            </>
                        ))}
                    </div>
                </Tab>
                <Tab eventKey="maratona" title="Maratona de Programação">
                    <div className={styles.items}>
                        {atividades.map((atividade, index) => (
                            <>
                                <AgendaItem
                                    key={index}
                                    atividade={atividade.atividade}
                                    titulo={atividade.titulo}
                                    ministrante={atividade.ministrante}
                                    local={atividade.local}
                                    data={atividade.data}
                                    hora={atividade.hora}
                                    palestrante_img_1={
                                        atividade.palestrante_img_1
                                    }
                                    palestrante_img_2={
                                        atividade.palestrante_img_2
                                    }
                                />
                            </>
                        ))}
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}
