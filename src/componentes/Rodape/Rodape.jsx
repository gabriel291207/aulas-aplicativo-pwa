import "./Rodape.css"

function Rodape() {
    const anoAtual = new Date().getFullYear()

    return (
        <footer className="Rodape_root">
            <span>Copyright {anoAtual}</span>
        </footer>
    )
}

export default Rodape