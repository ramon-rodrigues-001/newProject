import React from 'react';
import styles from './HomePage.module.scss'
import ButtonVerde from '../../components/buttonVerde/ButtonVerde';

function HomePage() {

  
  const confirmarPlano = () => {
    return confirm('CONFIRMAR PLANO ESCOLHIDO')
  }


  return (
    <>
    <div className={styles.container}>
    <section className={styles.above_the_fold}>
      <video autoPlay muted loop className={styles.videoBackground}>
        <source src="../../public/Fim!.mp4" type="video/mp4" />
        Seu navegador não suporta o vídeo.
      </video>

      <header className={styles.headerHome}>
        <h1 className={styles.logo}>🎶Vortex</h1>
        <select id={styles.select_indioma}>
          <option value="en-US" selected>Inglês</option>
          <option value="pt-BT">Portugues</option>
        </select>
      </header>

      <main className={styles.mainHome}>
        <div className={styles.esquerda}>
          <h2>Welcome! Please sign in.</h2>
          <form action="assinatura.html">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" placeholder="you@gmail.com" />
            <label htmlFor="senha">Senha</label>
            <input type="text" id="senha" name="senha" placeholder="@you3222" />
            <div>
              <br />
              < ButtonVerde text='Sing in' />
              < ButtonVerde link='#planos' text='Cadastrar' />
            </div>
          </form>
        </div>
        <div className={styles.direita}>
          <h1 className={styles.title}>Treine Sua Equipe de Forma Rápida e Eficiente</h1>
          <h3 className={styles.subTitle}>Hospede videoaulas - organize cursos - faça reuniões de treinamento ao vivo com videochamadas.</h3>
        </div>
      </main>
    </section>

  


    {/* Hero pagina de - Passo A Passo */}
    <section className={styles.hero}>
    <h1>Apenas 3 passos simples!</h1>
      <p className={styles.subTitleHero}><strong>Economize Tempo e Dinheiro! </strong>
      Aqui você agiliza o treinamento dos seus funcionários, reduz custos com deslocamento e mantém a equipe atualizada.</p>

      <div className={styles.passoApasso}>
          <div className={styles.passos}>
              <div className={styles.dic}>
                  <div className={styles.circle}>1</div>
                  <img src="https://cdn-icons-png.flaticon.com/512/4319/4319100.png" alt="" className={styles.ImgPassos} />
              </div>
              <p className={styles.descritionPasso}>Crie sua comunidade exclusiva, onde pode gerenciar todos os cursos e treinamentos especializados.</p>
          </div>
          <span className={styles.linha}></span>
          <div className={styles.passos}>
              <div className={styles.dic}>
                  <div className={styles.circle}>2</div>
                  <img src="https://cdn-icons-png.flaticon.com/512/11268/11268870.png" alt="" className={styles.ImgPassos} />
              </div>
              <p className={styles.descritionPasso}>Selecione cursos específicos que atendam às necessidades da sua equipe. Todos os cursos são customizáveis.</p>
          </div>
          <span className={styles.linha}></span>
          <div className={styles.passos}>
              <div className={styles.dic}>
                  <div className={styles.circle}>3</div>
                  <img src="https://cdn-icons-png.flaticon.com/512/752/752646.png" alt="" className={styles.ImgPassos} />
              </div>
              <p className={styles.descritionPasso}>Monitore o progresso dos colaboradores em tempo real. E manitore o desempenho individual e coletivo.</p>
          </div>
      </div>

      <a href="#planos" className={styles.ctaButton}>
        < ButtonVerde text='Ver planos' />
      </a>
    </section>







    <section id="planos" className={styles.planos}>
      <div className={styles.plano}>
        <h2 className={styles.titlePlanos}>Plano Básico</h2>
        <p className={styles.preco}>Gratis</p>
        <ul>
          <li>Acesso a plataforma</li>
          <li>Uma semana de teste</li>
          <li>Criar perfil de funcionario</li>
        </ul>
        < ButtonVerde event={confirmarPlano} link='./formulario-assinatura' text='Sem Compromisso' block={true}  />
      </div>

      <div className={styles.plano} id={styles.destaque}>
        <h2 className={styles.titlePlanos}>Plano Premium</h2>
        <p className={styles.preco}>R$ 49/mês</p>
        <ul>
          <li>40 horas de curso</li>
          <li>Assistente chatGpt-4</li>
          <li>Projetos praticos</li>
          <li>Professores formados</li>
        </ul>
        < ButtonVerde event={confirmarPlano} link='./formulario-assinatura' text='Assinar Agora' block={true} />
      </div>

      <div className={styles.plano}>
        <h2 className={styles.titlePlanos}>Acesso Vitalício</h2>
        <p className={styles.preco}>R$ 450,00</p>
        <ul>
          <li>O plano premium +</li>
          <li>Acesso <strong>ilimitado</strong></li>
          <li>Futuras atualizaçõe</li>
        </ul>
        < ButtonVerde event={confirmarPlano} link='./formulario-assinatura' text='Assinar Agora' block={true} />
      </div>
    </section>


    <section className={styles.diferenciais}>
      <h2>Diferenciais dos Planos</h2>
      <p>Compare os benefícios exclusivos de cada plano e escolha o melhor para você.</p>
    </section>


    <section className={styles.testemunhos}>
      <h2>O que nossos clientes dizem</h2>
      <p>"Serviço excelente! Recomendo a todos!" - Cliente Satisfeito</p>
      <p>"A melhor escolha que fiz para minha empresa." - Outro Cliente Satisfeito</p>
    </section>

    <footer>
      <p>&copy; 2024 Minha Empresa. Todos os direitos reservados.</p>
    </footer>
  </div>
    </>
  )
   
}

export default HomePage;
