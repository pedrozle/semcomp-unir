"use client";
import styles from "@/styles/maratona.module.scss";
import Botao from "../components/botao";

export default function Page() {
    return (
        <div className={styles.trabalhos}>
            <div className={styles.cabecalho}>
                <p className={styles.titulo}>
                    printf(&quot;Maratona de Programação&quot;)
                </p>
                <p className={styles.descricao}>
                    Vai rolar Maratona de programação na Semana da Computação! <br/>
                    Dia 28 de junho das 14h às 18h,
                    Confira as informações sobre logo abaixo ;)
                </p>
            </div>
            <p className={styles.banner}>Regras gerais</p>
            <div className={styles.informacoes_gerais}>
                <p>
                    As equipes devem ser compostas por 3 pessoas e terão acesso
                    a 1 (um) computador conectado à internet. O resultado final
                    será determinado pela quantidade de problemas resolvidos
                    corretamente e pelo tempo utilizado para resolvê-los. Será
                    atribuído 1 ponto por problema resolvido e penalidade de 20
                    minutos para cada problema não submetido, mas não resolvido
                    (adaptável). O acesso a plataforma possivelmente será
                    on-line, entretanto, não deve ser possível usar ferramentas
                    de pesquisa online, apenas recursos físicos como livros,
                    papéis, cadernos, entre outros. 
                </p>
            </div>
            <p className={styles.banner}>Regras de participação</p>
            <div className={styles.area_submissao}>
                <p>
                    A princípio não há regras para estudantes participarem, mas
                    é desejável conhecimentos que abrangem Programação I,
                    Programação II e Estrutura de Dados I.
                </p>
                <div className={styles.area_lista}>
                    <div>
                        <p>POSSÍVEIS PLATAFORMAS</p>
                        <ul>
                            <li>
                                Codeforces:{" "}
                                <a href="https://codeforces.com/">
                                    https://codeforces.com/
                                </a>
                            </li>
                            <li>
                                LeetCode:{" "}
                                <a href="https://leetcode.com/">
                                    https://leetcode.com/
                                </a>
                            </li>
                            <li>
                                Beecrowd:{" "}
                                <a href="https://www.beecrowd.com.br/judge/en/login">
                                    https://www.beecrowd.com.br/judge/en/login
                                </a>
                            </li>
                            <li>
                                Boca:{" "}
                                <a href="https://github.com/maratona-linux/maratona-linux">
                                    https://github.com/maratona-linux/maratona-linux
                                </a>
                                {" "}(Deve ser instalado em cada computador).
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>DURANTE O EVENTO</p>
                        <ul>
                            <li>Idas ao banheiro estão liberadas.;</li>
                            <li>
                                Não é permitido o uso de aparelhos com acesso a
                                internet, por exemplo, celulares, tablets,
                                relógios digitais, entre outros.
                            </li>
                            <li>
                                A simbolização de um desafio feito será dada por
                                um balão com determinada cor.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className={`${styles.banner} ${styles.banner_2}`}>
                Ficou interessado? Inscreva a sua equipe e participe :D
            </p>
            <Botao
                titulo="Quero participar"
                link={`${process.env.MARATONA_LINK}`}
            />
        </div>
    );
}
