"use client";

import styles from "@/styles//components/banner.module.scss";
import Botao from "./botao";
import Image from "next/image";

import img from "@/assets/img/banner_img.svg";

export default function Banner() {
    return (
        <div className={styles.inicio}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <div>
                        <h1 className={styles.titulo}>
                            VI Semana da Computação
                        </h1>
                        <p className={styles.subtitulo}>
                            Universidade Federal de Rondônia - UNIR
                        </p>
                        <p className={styles.data}>26 à 30 jun. 2023</p>
                    </div>
                    <Image className={styles.img} src={img} alt="" />
                </div>
                <div>
                    <Botao titulo="Inscreva-se" link={`${process.env.INSCRICAO_LINK}`} />
                </div>
            </div>
        </div>
    );
}
