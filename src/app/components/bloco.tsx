import styles from "@/styles/components/bloco.module.scss";

interface Props {
    nome: string;
    descricao: string;
    img: string;
}

export default function Bloco(props: Props) {
    const estilo = {
        backgroundImage: `url(${props.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <div className={styles.bloco} style={estilo}>
            <div>
                <p className={styles.nome}>{props.nome}</p>
                <p className={styles.descricao}>{props.descricao}</p>
            </div>
        </div>
    );
}
