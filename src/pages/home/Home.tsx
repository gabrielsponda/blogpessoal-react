import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";


function Home() {

    return (
        <>
            <div id="container" className="flex justify-center bg-violet-600">
                <div id="subcontainer" className="container grid grid-cols-2 text-white">
                    <div id="texto" className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-bold">Seja bem-vindo!</h2>
                        <p className="text-xl">Expresse aqui os seus pensamentos e suas opiniões.</p>
                        <div id="container-buttons" className="flex justify-around gap-4 w-1/2 text-center">
                            <ModalPostagem />
                            <div className="rounded text-black border-white bg-white border-solid border-2 px-4 py-2 flex-1">Ver Postagens</div>
                        </div>
                    </div>
                    <div id="imagem" className="flex justify-center">
                        <img className="w-2/3" src="https://i.imgur.com/VpwApCU.png" alt="Imagem da Página Home" />
                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    );
}

export default Home;