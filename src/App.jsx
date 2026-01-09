import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import Skill from "./components/Skill.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import './App.css'

export default function App(){
    const skills = ["Javascript", "jQuery", "Vue", "Angular", "React", "Node.js"]
    const [showSkills, setShowSkills] = useState(false);
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
                    <button onClick={() => setShowSkills(!showSkills)}>{showSkills ? "Ocultar skills" : "Mostrar skills"}</button>
                    <Skill array={skills} show={showSkills} />
                </section>
            </main>

            <Footer />
        </>
    );
}