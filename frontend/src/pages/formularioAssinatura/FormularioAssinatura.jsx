import styles from './FormularioAssinatura.module.scss'
import ButtonVerde from '../../components/buttonVerde/ButtonVerde'

function FormularioAssinatura() {

    const getDados = (e) => {
        e.preventDefault()
        const form = {
            nome: e.target.name.value,
            email: e.target.email.value,
            cpf: e.target.cpf.value,
            password: e.target.password.value
        }
    }

    return (
        <div className={styles.bodyForm}>
            <video autoPlay muted loop className={styles.videoBackground}>
                <source src="../../public/Fim!.mp4" type="video/mp4" />
                Seu navegador não suporta o vídeo.
            </video>

            <div className={styles.container}>
                <div className={styles.progress_indicator}>
                    <span className={styles.step} id={styles.active}>1</span>
                    <span className={styles.divider}>----------</span>
                    <span className={styles.step}>2</span>
                </div>


                <form className={styles.login_form} onSubmit={getDados}>
                    <div className={styles.input_group}>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" placeholder="Digite seu nome" required />
                    </div>
                    
                    <div className={styles.input_group}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Digite seu email" required />
                    </div>
                    
                    <div className={styles.input_group}>
                        <label htmlFor="cpf">CPF</label>
                        <input type="text" id="cpf" placeholder="Digite seu CPF" required />
                    </div>
                    
                    <div className={styles.input_group}>
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" placeholder="Digite sua senha" required />
                    </div>
                    
                    <br />
                    < ButtonVerde text='Prosseguir' block='block' type='submit'/>
                </form>
            </div>
        </div>
        
    )
}

export default FormularioAssinatura