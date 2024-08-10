import styles from './FormularioAssinatura.module.scss'

function FormularioAssinatura() {
    return (
        <div className={styles.bodyForm}>
            <div className={styles.container}>

            <div className={styles.progress_indicator}>
                <span className={styles.step} id={styles.active}>1</span>
                <span className={styles.divider}>----------</span>
                <span className={styles.step}>2</span>
            </div>


            <form className={styles.login_form}>
                <div className={styles.input_group}>
                    <label for="name">Nome</label>
                    <input type="text" id="name" placeholder="Digite seu nome" required />
                </div>
                
                <div className={styles.input_group}>
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Digite seu email" required />
                </div>
                
                <div className={styles.input_group}>
                    <label for="cpf">CPF</label>
                    <input type="text" id="cpf" placeholder="Digite seu CPF" required />
                </div>
                
                <div className={styles.input_group}>
                    <label for="password">Senha</label>
                    <input type="password" id="password" placeholder="Digite sua senha" required />
                </div>
                
                <button type="submit" className={styles.prosseguir}>Prosseguir</button>
            </form>
            </div>
        </div>
        
    )
}

export default FormularioAssinatura