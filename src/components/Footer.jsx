export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer><p>{year} - Aplicacion Creada con react</p></footer>
    )
}