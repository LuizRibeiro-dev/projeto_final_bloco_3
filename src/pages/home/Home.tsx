
function Home() {
    return (
        <>
            <div className="flex justify-center bg-green-950">
                <div className='grid grid-cols-2 text-white container'>
                    <div className="flex flex-col justify-center items-center gap-4 py-4">
                        <h2 className='font-bold text-5xl'>
                            Bem vindo a Lloyds!
                        </h2>
                        <p className='text-xl'>Sua Saude importa</p>

                        <div className="flex justify-around gap-4">
                            <div className='border-2 text-whiteborder-white bg-green-950 px-4 py-2 border-solid rounded'>
                                Novo Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/024/072/760/non_2x/illustration-of-a-female-doctor-examining-a-patient-in-a-clinic-illustration-of-a-female-patient-checking-her-health-to-the-doctor-free-png.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Home