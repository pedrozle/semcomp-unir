import styles from "@/styles/components/agendaItem.module.scss";

interface Props {
    atividade: number;
    titulo: string;
    ministrante: string;
    local: string;
    data: string;
    hora: string;
    palestrante_img_1?: string;
    palestrante_img_2?: string;
}

export default function AgendaItem(props: Props) {
    return (
        <div className={styles.container}>
            <div className={`${styles.color}`}></div>
            <div className={styles.info}>
                <p className={styles.hora}>{props.hora}</p>
                <p className={styles.titulo}>{props.titulo}</p>
                <p className={styles.ministrante}>{props.ministrante}</p>
                <span className={styles.divider}></span>
                <p className={styles.data}>
                    {props.data} Local: {props.local}
                </p>
            </div>
            <div className={styles.palestrantes_img}>
                {props.palestrante_img_1 && (
                    <>
                        <img
                            src={props.palestrante_img_1}
                            alt=""
                            className={styles.img}
                        />
                    </>
                )}
                {props.palestrante_img_2 && (
                    <>
                        <img
                            src={props.palestrante_img_2}
                            alt=""
                            className={`${styles.img} ${styles.second}`}
                        />
                    </>
                )}
            </div>
        </div>
    );
}
