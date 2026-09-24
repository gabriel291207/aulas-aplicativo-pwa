import "./Avatar.css";

function Avatar(props) {
    const nome = props.nome.split(" ");

    const primeiroNome = nome[0];
    const ultimoNome = nome[nome.length - 1];

    const primeiraLetraPrimeiroNome = primeiroNome[0];
    const primeiraLetraUltimoNome = ultimoNome[0];

    return (
        <div className="Avatar_root">
            {primeiraLetraPrimeiroNome + primeiraLetraUltimoNome}
        </div>
    );
}

export default Avatar;