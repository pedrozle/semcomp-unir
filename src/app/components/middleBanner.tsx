"use client";
import styles from "@/styles/components/middle.module.scss";
import Botao from "./botao";

export default function MiddleBanner() {
    return (
        <div className={styles.middle_banner}>
            <div className={`${styles.conteudo} divider`}>
                <p className={styles.title}>
                    Veja a programação completa em nossa 
                </p>
                <Botao titulo="Agenda" link="/programacao"/>
            </div>
        </div>
    );
}
