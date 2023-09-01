import Banner from "@/app/components/banner";
import Atividades from "./components/atividades";
import MiddleBanner from "./components/middleBanner";
import Sobre from "./components/sobre";
import Onde from "./components/onde";
import Agenda from "./components/agenda";
import Comissao from "./components/comissao";
import Pessoas from "./components/pessoas";

export default function Page() {
    return (
        <main>
            <Banner />
            <Sobre />
            <Onde />
            <Atividades link="atividades-palestras" title="Palestras" />
            <MiddleBanner />
            <Atividades link="atividades-minicursos" title="Minicursos" />
            <Agenda />
            <Pessoas titulo="Palestrantes" link="palestrantes" />
            <Pessoas titulo="Patrocinadores" link="patrocinadores" />
            <Pessoas titulo="Apoio" link="apoio" />
            <Comissao />
        </main>
    );
}
