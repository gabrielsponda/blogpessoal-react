function Home() {

    return (
        <>
            <div id="container" style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center"
            }}>
                <div id="subcontainer">
                    <div id="texto" style={{
                        width: "80vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <h2>Seja bem-vindo!</h2>
                        <p>Expresse aqui os seus pensamentos e suas opiniões.</p>
                    </div>
                    <div id="imagem" style={{
                        width: "80vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <img
                            src="https://i.imgur.com/VpwApCU.png"
                            alt="Imagem da página Home"
                            width="400px"
                        />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Home