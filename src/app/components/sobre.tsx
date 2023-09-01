import Image from "next/image";
import styles from "@/styles/components/sobre.module.scss";
import primeiro_dia from "@/assets/img/sobre.jpeg";
import minicurso from "@/assets/img/minicurso.jpg";

export default function Sobre() {
    return (
        <div className={styles.sobre} id="sobre">
            <div className={styles.conteudo}>
                <p className={styles.title}>Sobre a Semana da Computação</p>
                <div className={styles.descricao}>
                    <div className={styles.info}>
                        <p className={styles.texto}>
                            É um evento aberto a toda comunidade regional e de
                            outros centros, procurando congregar estudantes de
                            graduação e pós-graduação, professores,
                            pesquisadores, profissionais e demais interessados
                            em computação, objetivando a difusão da computação e
                            do seu bom uso, trazendo para o debate aberto, temas
                            importantes relacionados à Ciência da Computação.
                        </p>
                        <Image
                            src={primeiro_dia}
                            alt=""
                            className={styles.img}
                        />
                    </div>
                    <div className={styles.info}>
                        <Image
                            src={minicurso}
                            alt=""
                            className={`${styles.img} ${styles.img_2}`}
                        />
                        <div>
                            <p className={styles.texto}>
                                Além de propiciar uma troca de experiência, o
                                objetivo também é gerar um ambiente para
                                atualização tecnológica através de atividades
                                complementares como palestras, debates e
                                minicursos.
                            </p>
                            <p className={styles.texto}>
                                Também haverá apresentação de trabalhos
                                acadêmicos desenvolvidos pelos alunos do curso
                                de Ciência da Computação da Unir, a fim de
                                divulgar à comunidade as pesquisas desenvolvidas
                                nesta temática pelos alunos e professores. As
                                inscrições são limitadas para as atividades e é
                                necessário que o participante escolha e se
                                inscreva na(s) atividade(s) que irá participar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// <div className={styles.info}>
//                         <p className={styles.texto}>
//                             É um evento aberto a toda comunidade regional e de
//                             outros centros, procurando congregar estudantes de
//                             graduação e pós-graduação, professores,
//                             pesquisadores, profissionais e demais interessados
//                             em computação, objetivando a difusão da computação e
//                             do seu bom uso, trazendo para o debate aberto, temas
//                             importantes relacionados à Ciência da Computação.
//                         </p>
//                         <Image
//                             src={primeiro_dia}
//                             alt=""
//                             className={styles.img}
//                         />
//                     </div>
