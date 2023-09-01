"use client";

import styles from "@/styles/components/agenda.module.scss";
import Botao from "./botao";
import Image from "next/image";

import agenda from "@/assets/img/agenda.svg";
import blocos from "@/assets/img/blocos.svg"

export default function Agenda() {
    return (
        <div className={styles.agenda}>
            <div className={styles.conteudo}>
                <Image className={styles.img} src={agenda} alt="" />
                <div className={styles.chamado}>
                    <Image className={styles.bloco} src={blocos} alt="" />
                    <p className={styles.title}>Curtiu?</p>
                    <p className={styles.subtitle}>
                        Então dá uma conferida na programação completa do evento
                    </p>
                    <Botao link="/programacao" titulo="Agenda" />
                </div>
            </div>
        </div>
    );
}
