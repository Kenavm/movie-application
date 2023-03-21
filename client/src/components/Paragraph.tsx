function Paragraph(props: {content:string, className?:string}) {
    return <p className={props.className}>{props.content}</p>
}

export default Paragraph