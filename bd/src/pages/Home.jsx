import Title from "../components/atoms/Title";
import Button from "../components/atoms/Button";

function Home() {
    return ( 
        <>
            <div className="container">
                <Title>Bienvenido</Title>
                <Button type="button" value="Registro de Gasolinera"/>
                <Button type="button" value="Ver Gasolinera"/>
                <Button type="button" value="Eliminar Gasolinera"/>
            </div>
        </>
    );
}

export default Home;