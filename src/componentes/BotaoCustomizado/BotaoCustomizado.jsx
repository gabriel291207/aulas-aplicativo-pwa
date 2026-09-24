function BotaoCustomizado(props) {
    const classes = ["BotaoCustimizado_root"]

    switch (props.tipo) {
        case "primario":
            classes.push("BotaoCustomizado_Primario")
            break
        case "secundario":
            classes.push("BotaoCustomizado_secundario")
            break
        default:
            break
    }



    return (
        <button className= {classes.join("")} onClick={props.aoClicar}>
            {props.children}
        </button>
    )
}



export default BotaoCustomizado;