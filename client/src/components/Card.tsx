function Card(props: {onClick: Function, className:string, title?: string, poster: string, type: string}) {
    return <div className={props.className}>
        {props.type==="filmLayout" ? <h2>{props.title}</h2>: null}
        <img src={props.poster} />
    </div>
}

export {Card}