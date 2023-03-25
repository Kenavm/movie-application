function Header(props: {heading: string, className?: string}) {
    return <h1 className={props.className}>{props.heading}</h1>
}

export default Header