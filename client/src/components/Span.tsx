function Span(props: { content: string; className?: string, children?: React.ReactNode }) {
  return <span className={props.className}>{props.content}</span>;
}

export default Span;
