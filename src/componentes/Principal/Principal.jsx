import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";

function Principal() {
    return (
        <main>
            Conteúdo principal
            <br />
            <br />
                
            <button>Salvar</button>
            <br />
            <br />

            <button>Excluir</button>
            <br />
            <br />

            <hr />

            <BotaoCustomizado tipo="primario" aoClicar={() => alert("Salvar clicado!")}>Salvar</BotaoCustomizado>
            <BotaoCustomizado tipo="secundario" aoClicar={() => alert("Salvar clicado!")}>Cancelar</BotaoCustomizado>
            <BotaoCustomizado aoClicar={() => alert("Salvar clicado!")}>Enviar</BotaoCustomizado>

        </main>
    );
}

export default Principal;