interface HeaderProps {
    image: string;
    titulo: string;
    menu: string;
}
//JSX permite um filho, React.ReactNode... permite varios sem precisar tipar

export default function Header({ image, titulo, menu }: HeaderProps): JSX.Element {
    return (
        <header>
            <p>{image}</p>
            <h1>{titulo}</h1>
            <nav>{menu}</nav>
        </header>
    );
}