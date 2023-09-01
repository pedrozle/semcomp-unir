interface Props {
    titulo: string;
    link: string;
}

export default function Botao(props: Props) {
    return (
        <button
            onClick={() => (window.location.href = props.link)}
            className="botao"
        >
            {props.titulo}
        </button>
    );
}
