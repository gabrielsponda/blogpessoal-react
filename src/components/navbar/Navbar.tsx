import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../utils/ToastAlerts";

function Navbar() {

    const navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    let component: ReactNode

    function logout() {
        handleLogout()
        toastAlerta("O usuário foi desconectado com sucesso!", "sucesso")
        navigate("/login")
    }

    if (usuario.token !== "") {
        component = (
            <div className="mb-16">
                <div className='fixed top-0 w-full bg-indigo-950 text-white flex justify-center py-4 border-b border-white'>
                    <div className="container flex justify-between text-lg">
                        <Link to="/home" className='text-2xl font-bold uppercase'>Blog Pessoal</Link>
                        <div className='flex gap-4'>
                            <Link to="/postagens" className='hover:underline'>Postagens</Link>
                            <Link to="/temas" className='hover:underline'>Temas</Link>
                            <Link to="/perfil" className='hover:underline'>Perfil</Link>
                            <Link to="/cadastro" className='hover:underline'>Cadastrar Usuário</Link>
                            <Link to="/cadastroTema" className='hover:underline'>Cadastrar Tema</Link>
                            <div className='hover:underline' onClick={logout}>Sair</div>
                        </div>
                    </div>
                </div >
            </div>
        )
    }

    return (
        <>
            {component}
        </>
    )
}

export default Navbar