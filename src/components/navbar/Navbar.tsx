import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {

    const navigate = useNavigate()

    const { handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert("O usuário foi desconectado com sucesso!")
        navigate("/login")
    }

    return (
        <>
            <div className='fixed top-0 w-full bg-indigo-950 text-white flex justify-center py-4 border-b border-white'>
                <div className="container flex justify-between text-lg">
                    <Link to="/home" className='text-2xl font-bold uppercase'>Blog Pessoal</Link>
                    <div className='flex gap-4'>
                        <div className='hover:underline'>Postagens</div>
                        <Link to="/temas" className='hover:underline'>Temas</Link>
                        <div className='hover:underline'>Perfil</div>
                        <Link to="/cadastro" className='hover:underline'>Cadastrar Usuário</Link>
                        <Link to="/cadastroTema" className='hover:underline'>Cadastrar Tema</Link>
                        <div className='hover:underline' onClick={logout}>Sair</div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Navbar