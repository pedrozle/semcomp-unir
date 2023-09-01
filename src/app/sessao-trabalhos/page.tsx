"use client";
import styles from "@/styles/sessao-trabalhos.module.scss";
import Botao from "../components/botao";
import Image from "next/image";

import ship from "@/assets/img/Foguete.svg";

export default function Page() {
    return (
        <div className={styles.trabalhos}>
            <div className={styles.cabecalho}>
                <p className={styles.titulo}>
                    printf(&quot;Sessão de paineis&quot;)
                </p>
                <p className={styles.descricao}>
                    Aqui você encontrará todas as informações para que você
                    possa submeter o seu trabalho :D
                </p>
            </div>
            <p className={styles.banner}>Informações gerais</p>
            <div className={styles.informacoes_gerais}>
                <p>
                    Os resumos, submetidos para apresentação na forma de pôster,
                    serão avaliados por subcomissões de áreas temáticas
                    designadas pela Comissão Científica.
                </p>
                <p>
                    Cada participante inscrito poderá submeter um único resumo.
                    Instruções envolvendo formato e submissão de resumos estão
                    disponíveis no site do evento. A seleção dos resumos seguirá
                    padrões de qualidade e ineditismo estabelecidos pela
                    comissão científica do evento.
                </p>
                <p>
                    Para cada resumo no mínimo dois avaliadores verificarão se o
                    resumo está no formato indicado pelo evento, avaliando a
                    qualidade do conteúdo científico ou acadêmico do trabalho
                    apresentado. A decisão será comunicada ao candidato no
                    mínimo 10 dias antes do evento.
                </p>
            </div>
            <p className={styles.banner}>Áreas de submissão</p>
            <div className={styles.area_submissao}>
                <p>
                    Os resumos deverão ser submetidos em uma das cinco sessões
                    temáticas pertinentes aos trabalhos de Computação, Inovação
                    e Tecnologia:
                </p>
                <div className={styles.area_lista}>
                    <ul>
                        <li>Desenvolvimento de softwares e banco de dados</li>
                        <li>Processamento de Imagens e Visão Computacional</li>
                        <li>Bioinformática</li>
                        <li>Inteligência Artificial e suas aplicações</li>
                        <li>Deep Learning</li>
                        <li>Software Educacional</li>
                        <li>Programação para dispositivos móveis</li>
                    </ul>
                    <Image src={ship} alt="" className={styles.img} />
                </div>
                <p>
                    O autor apresentador do trabalho deve inscrever-se no
                    evento, sendo que cada inscrição dará direito à submissão de
                    um resumo, podendo também ser co-autor em outros. Não serão
                    aceitas descrições de projetos, intenção de trabalho ou
                    revisões bibliográficas. O resumo deve ser enviado somente
                    via eletrônica através do formulário online disponível
                    dentro da área do usuário. O corpo do resumo não deve ter
                    mais do que 2.500 caracteres, contando os espaços. O resumo
                    deverá ser obrigatoriamente escrito em português ou inglês.
                    Os resumos submetidos serão analisados pela Comissão
                    Científica do Congresso, sendo o resultado comunicado por
                    e-mail ao autor inscrito no evento. A análise abrangerá os
                    seguintes aspectos: objetivos relevantes e claramente
                    definidos; metodologia adequada; resultados apresentados com
                    clareza; conclusões pertinentes. A qualidade do texto e a
                    ortografia são de responsabilidade do autor inscrito e serão
                    consideradas na avaliação pela Comissão Científica.
                </p>
                <p>
                    Os trabalhos selecionados devem ser expostos na Sessão de
                    Painéis do evento, as quais contarão com área de 1 m x 1,20
                    m reservada para cada painel. O painel deverá vir
                    acompanhado de cordão para fixação e/ou fita adesiva (não
                    serão fornecidos pela organização).
                </p>
            </div>
            <p className={styles.banner}>
                Instruções para as apresentações em formato de pôster
            </p>
            <div className={styles.instrucoes}>
                <p>
                    Este modelo de pôster é uma sugestão aos autores, no intuito
                    de uniformizar as apresentações. Os autores podem optar por
                    incluir logos adicionais de patrocinadores. O tamanho
                    sugerido para o pôster é de 80 cm de largura por 120 cm de
                    altura (devido ao tamanho do suporte). Note que para uma
                    impressão de boa qualidade, suas figuras devem ter uma
                    resolução de pelo menos 300dpi.
                </p>
                <p>
                    Fontes a serem usadas neste modelo: O título do pôster deve
                    estar em Calibri tamanho 54, negrito, centralizado. Os nomes
                    dos autores devem estar em Calibri 36, negrito,
                    centralizado, preto. A afiliação e os endereços de e-mail
                    devem ser em Calibri 22, negrito, centralizado. Os títulos
                    de seção deve ser em Calibri 40, negrito, centralizado.
                </p>
                <p>
                    Todos os textos normais devem estar em Calibri 36, normal,
                    justificado, preto. Legendas de figuras e tabelas devem
                    estar em Calibri 28, negrito, centralizado acima da figura
                    ou da tabela. O texto dentro das figuras (legendas, números,
                    etc.) e das tabelas deve ter tamanho similar às dimensões
                    das legendas (Calibri, 28) de forma a poderem ser lidos a
                    1.5m de distância. Equações devem ter o mesmo tamanho médio
                    dos símbolos. Parágrafos devem ser separados por 12 pt. O
                    mesmo se aplica para Marcadores e Numerações. Os pôsteres
                    deverão ser fixados antes do início da sessão e somente ser
                    retirado após o término da sessão.
                </p>
            </div>
            <p className={`${styles.banner} ${styles.banner_2}`}>
                E aí, ficou interessado em submeter o seu trabalho? Preencha o
                formulário abaixo:
            </p>
            <Botao
                titulo="Submeter Trabalho"
                link={`${process.env.SUBMISSAO_LINK}`}
            />
        </div>
    );
}
