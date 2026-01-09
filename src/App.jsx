import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import Skill from "./components/Skill.jsx";
import Footer from "./components/Footer.jsx";

export default function App(){
    return (
        <>
        <Header />
            <main>
                <Profile
                name= "Pau Obrero"
                age={18}
                profession="Desarrollador Web"
                />

                <section>
                    <h2>Habilidades</h2>
                    <ul>
                        <Skill text="JavaScript" />
                        <Skill text="React" />
                        <Skill text="Java" />
                    </ul>
                </section>
            </main>

            <Footer />
        </>
    );
}