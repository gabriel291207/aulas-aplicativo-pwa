import Avatar from "../Avatar/Avatar";
import "./Cabecalho.css";

function Cabecalho() {
    return (
        <header className="Cabecalho_root">
            <img src="/favicon.svg" alt="Logo" />
            <h4>AVATAR</h4>

            <Avatar nome="Gabriel Cordeiro Ferraz" />
        </header>
    );
}

export default Cabecalho;