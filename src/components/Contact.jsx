export default function Contact({ email, phone, show }) {
    if (!show) return null;

    return (
        <div className="contact">
            <h3>Contacto</h3>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
}
