import styles from './ButtonVerde.module.scss'

function ButtonVerde(props) {
    const {text, block, link, event, type} = props

    // Função para lidar com o clique do link ou botão
    const handleClick = (e) => {
        // Se o evento existir e retornar false, previne a navegação
        if (event && !event()) {
            e.preventDefault();
        }
    };


    return (
        <> 
            {/* {event ? (
                link ? (
                    block ? (
                        <a href={link} onClick={handleClick} className={styles.buttonVerde} id={styles.block}>
                            {text} 
                        </a>
                    ) : (
                        <a href={link} onClick={event} className={styles.buttonVerde}>
                            {text} 
                        </a>
                    )
                ) : (
                    block ? (
                        <button onClick={event} className={styles.buttonVerde} id={styles.block}>
                        {text} 
                        </button>
                    ) : (
                        <button onClick={event} className={styles.buttonVerde}>
                            {props.text} 
                        </button>
                    )
                )
            ): (
                link ? (
                    block ? (
                        <a href={link} className={styles.buttonVerde} id={styles.block}>
                            {text} 
                        </a>
                    ) : (
                        <a href={link} className={styles.buttonVerde}>
                            {text} 
                        </a>
                    )
                ) : (
                    block ? (
                        <button className={styles.buttonVerde} id={styles.block}>
                        {text} 
                        </button>
                    ) : (
                        <button className={styles.buttonVerde}>
                            {props.text} 
                        </button>
                    )
                )
            )} */}

            {
                link ? (
                    block ? (
                        <a href={link} className={styles.buttonVerde} id={styles.block} onClick={handleClick} >
                            {text} 
                        </a>
                    ) : (
                        <a href={link} className={styles.buttonVerde} onClick={handleClick} >
                            {text} 
                        </a>
                    )
                ) : (
                    type ? (
                        event ? (
                            block ? (
                                <button className={styles.buttonVerde} id={styles.block} onClick={event} type={type}>
                                {text} 
                                </button>
                            ) : (
                                <button className={styles.buttonVerde} onClick={event} type={type}>
                                    {props.text} 
                                </button>
                            )
                        ): (
                            block ? (
                                <button className={styles.buttonVerde} id={styles.block} type={type}>
                                {text} 
                                </button>
                            ) : (
                                <button className={styles.buttonVerde} type={type}>
                                    {props.text} 
                                </button>
                            )
                        )
                    ): (
                        event ? (
                            block ? (
                                <button className={styles.buttonVerde} id={styles.block} onClick={event} >
                                {text} 
                                </button>
                            ) : (
                                <button className={styles.buttonVerde} onClick={event} >
                                    {props.text} 
                                </button>
                            )
                        ): (
                            block ? (
                                <button className={styles.buttonVerde} id={styles.block}>
                                {text} 
                                </button>
                            ) : (
                                <button className={styles.buttonVerde}>
                                    {props.text} 
                                </button>
                            )
                        )
                    )
                )
            }
        </>
    )
}

export default ButtonVerde