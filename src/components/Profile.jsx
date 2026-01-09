export default function Profile({name, age, profession}) {
    return (
        <div className="profile">
           <p>Nombre : {name}</p>
           <p>Edad : {age}</p>
           <p>Profesion : {profession}</p>
        </div>
    )
}