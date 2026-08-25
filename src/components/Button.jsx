export default function Button({ type, value, children, className, onClick, ...props }) {
    return (
        <button type={type} className={className} {...props} onClick={onClick}>{children ?? value}</button>
    )
}