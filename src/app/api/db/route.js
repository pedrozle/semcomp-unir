import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET(req, res) {
    let colecao = req.url.split("?")[1].split("=")[1];
    let atividade = "";
    console.log(colecao);

    if (colecao.includes("-")) {
        atividade = colecao.split("-")[1];
        colecao = colecao.split("-")[0];
    }

    const client = new MongoClient(`${process.env.DATABASE_URL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    await client.connect();

    // Acesso ao banco de dados
    const db = client.db("atividades");
    const collection = db.collection(colecao);

    let data = await collection.find().toArray();

    client.close();

    if (colecao === "atividades") {
        switch (atividade) {
            case "abertura":
                data = data.filter((item) => item.atividade === 0);
                break;
            case "palestras":
                data = data.filter((item) => item.atividade === 1);
                break;
            case "minicursos":
                data = data.filter((item) => item.atividade === 2);
                break;
            case "sessao":
                data = data.filter((item) => item.atividade === 3);
                break;
            case "maratona":
                data = data.filter((item) => item.atividade === 4);
                break;
        }
    }

    return NextResponse.json(data);
}
