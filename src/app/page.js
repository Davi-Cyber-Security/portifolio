'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  useEffect(() => {
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visivel');
        }
      });
    }, { threshold: 0.1 });

    const elementos = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elementos.forEach((el) => observador.observe(el));

    return () => observador.disconnect();
  }, []);

  const habilidades = [
    { 
      nome: 'JavaScript', 
      nivel: 85, 
      icone: (
        <Image 
          src="/js-logo.svg" 
          alt="JavaScript Logo" 
          width={40} 
          height={40}
          style={{ borderRadius: '8px' }}
        />
      )
    },
    { 
      nome: 'React', 
      nivel: 50, 
      icone: (
        <svg width="40" height="40" viewBox="0 0 256 228" fill="none">
          <path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488C219.596 145.292 256 129.887 256 113.668c0-15.323-17.197-30.376-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF"/>
        </svg>
      )
    },
    { 
      nome: 'Node.js', 
      nivel: 60, 
      icone: (
        <Image 
          src="/nodejs.png" 
          alt="Node.js Logo" 
          width={40} 
          height={40}
          style={{ borderRadius: '50%' }}
        />
      )
    },
    { 
      nome: 'HTML', 
      nivel: 100, 
      icone: (
        <Image 
          src="/html5.png" 
          alt="HTML5 Logo" 
          width={40} 
          height={40}
          style={{ borderRadius: '8px' }}
        />
      )
    },
    { 
      nome: 'CSS', 
      nivel: 100, 
      icone: (
        <Image 
          src="/css3.png" 
          alt="CSS3 Logo" 
          width={40} 
          height={40}
          style={{ borderRadius: '8px' }}
        />
      )
    },
    { 
      nome: 'Python', 
      nivel: 30, 
      icone: (
        <svg width="40" height="40" viewBox="0 0 256 255" fill="none">
          <defs>
            <linearGradient x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%" id="a">
              <stop stopColor="#387EB8" offset="0%"/>
              <stop stopColor="#366994" offset="100%"/>
            </linearGradient>
            <linearGradient x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%" id="b">
              <stop stopColor="#FFE052" offset="0%"/>
              <stop stopColor="#FFC331" offset="100%"/>
            </linearGradient>
          </defs>
          <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="url(#a)"/>
          <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" fill="url(#b)"/>
        </svg>
      )
    },
    { 
      nome: 'C', 
      nivel: 65, 
      icone: (
        <Image 
          src="/linguagemC.png" 
          alt="Linguagem C Logo" 
          width={40} 
          height={40}
          style={{ borderRadius: '8px' }}
        />
      )
    }
  ];

  const certificados = [
    { nome: 'Front-End Web', progresso: 100, horas: '134 horas', link: 'https://www.devmedia.com.br/certificado/unificado/front-end-web/davi-351' },
    { nome: 'JavaScript', progresso: 75, horas: '78 horas', link: 'https://www.devmedia.com.br/certificado/unificado/javascript/davi-351' },
    { nome: 'Node.js', progresso: 100, horas: '73 horas', link: 'https://www.devmedia.com.br/certificado/unificado/node-js/davi-351' },
    { nome: 'React', progresso: 100, horas: '86 horas', link: 'https://www.devmedia.com.br/certificado/unificado/react/davi-351' },
    { nome: 'Algoritmo', horas: '17 horas', link: 'https://www.devmedia.com.br/certificado/unificado/algoritmo/davi-351' },
    { nome: 'Back-End & APIs', horas: '24 horas', link: 'https://www.devmedia.com.br/certificado/unificado/outros/davi-351' },
    { nome: 'Engenharia de Software', horas: '3 horas', link: 'https://www.devmedia.com.br/certificado/unificado/engenharia-de-software/davi-351' }
  ];

  const projetos = [
    {
      titulo: 'Sistema de Recibo',
      descricao: 'Sistema simples para geração de recibos com validação de dados e impressão automática.',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      link: 'https://sistema-de-recibo.vercel.app/',
      destaque: false
    },
    {
      titulo: 'To-Do List',
      descricao: 'Aplicação de lista de tarefas com interface intuitiva e armazenamento local.',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      link: 'https://to-do-list-beta-jet-12.vercel.app/',
      destaque: false
    },
    {
      titulo: 'Busca Rápido Tratamento Clínico',
      descricao: 'Sistema de busca para tratamentos clínicos com servidor Node.js.',
      tecnologias: ['Node.js', 'JavaScript', 'HTML', 'CSS'],
      link: 'https://consultacaclinicos.vercel.app/',
      destaque: false
    },
    {
      titulo: 'Quantitativo de Tijolo',
      descricao: 'Calculadora para quantificar tijolos necessários em construções.',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      link: 'https://quantitativotijolos.vercel.app/',
      destaque: false
    },
    {
      titulo: 'Sistema de Envio Automatizado',
      descricao: 'Aplicação Full Stack para fornecedores enviarem documentos automaticamente via e-mail e WhatsApp. Interface React integrada com API Node.js, validação automática, proteção contra spam e exclusão automática de arquivos.',
      tecnologias: ['React', 'Node.js', 'JavaScript', 'API'],
      link: 'https://www.linkedin.com/posts/davi-gabriel-1a62a92a5_nodejs-reactjs-automatizaaexaeto-activity-7349173241728352256-WNZh',
      destaque: true
    }
  ];

  return (
    <div className={styles.pagina}>
      <nav className={styles.navegacao}>
        <div className="container">
          <div className={styles.navConteudo}>
            <div className={styles.logo}>
              <span className={styles.logoTexto}>{'<DaviScript />'}</span>
            </div>
            <div className={styles.navLinks}>
              <a href="#inicio">Início</a>
              <a href="#sobre">Sobre</a>
              <a href="#habilidades">Habilidades</a>
              <a href="#projetos">Projetos</a>
              <a href="#certificados">Certificados</a>
              <a href="#contato">Contato</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="inicio" className={styles.hero}>
        <div className="container">
          <div className={styles.heroConteudo}>
            <div className={`${styles.heroTexto} fade-in`}>
              <h1 className={styles.heroTitulo}>
                Olá, eu sou <span className={styles.destaque}>Davi Gabriel</span>
              </h1>
              <h2 className={styles.heroSubtitulo}>
                Desenvolvedor Full Stack Junior
              </h2>
              <p className={styles.heroDescricao}>
                Jovem de 20 anos apaixonado por tecnologia e inovação, sempre em busca de novos conhecimentos. 
                Especializando em JavaScript, React, Node.js e desenvolvimento de soluções web modernas.
              </p>
              <div className={styles.heroBotoes}>
                <a href="#projetos" className="botao-primario">
                  Ver Projetos
                </a>
                <a href="#contato" className="botao-secundario">
                  Entre em Contato
                </a>
              </div>
            </div>
            <div className={`${styles.heroImagem} fade-in`}>
              <div className={styles.avatarContainer}>
                <div className={styles.avatar}>
                  <Image 
                    src="/meuPerfil.jpeg" 
                    alt="Davi Gabriel - Desenvolvedor Full Stack" 
                    width={200} 
                    height={200}
                    style={{ 
                      borderRadius: '50%', 
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%'
                    }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="secao">
        <div className="container">
          <h2 className="titulo-secao fade-in">Sobre Mim</h2>
          <div className={styles.sobreConteudo}>
            <div className={`${styles.sobreTexto} slide-in-left`}>
              <p>
                Sou um jovem desenvolvedor de 20 anos, residente da cidade de Rio Verde - GO, atualmente cursando 
                <strong> Engenharia de Software</strong>. Minha paixão pela tecnologia me move a buscar 
                conhecimento constantemente, explorando novas ferramentas e metodologias.
              </p>
              <p>
                Com facilidade para aprender e uma curiosidade natural, me dedico ao desenvolvimento 
                de soluções web modernas e eficientes. Acredito que a tecnologia pode transformar 
                negócios e melhorar a vida das pessoas.
              </p>
              <p>
                Meu foco está no desenvolvimento Full Stack, com expertise em JavaScript, React e Node.js, 
                sempre aplicando as melhores práticas de Clean Code e Engenharia de Software.
              </p>
              <p>
                Possuo boas habilidades em <strong>Soft Skills</strong> e <strong>inteligência emocional</strong>, 
                o que me proporciona trabalhar com equipes de forma eficiente e leve. Acredito que a 
                comunicação clara e o trabalho colaborativo são fundamentais para o sucesso de qualquer projeto.
              </p>
            </div>
            <div className={`${styles.sobreInfo} slide-in-right`}>
              <div className="card">
                <h3>Informações Pessoais</h3>
                <ul className={styles.infoLista}>
                  <li><strong>Nome:</strong> Davi Gabriel Ferreira Batista</li>
                  <li><strong>Idade:</strong> 20 anos</li>
                  <li><strong>Localização:</strong> Rio Verde - GO</li>
                  <li><strong>Formação:</strong> Engenharia de Software</li>
                  <li><strong>Perfil:</strong> Trabalho em equipe e <br />comunicação</li>
                  <li><strong>Status:</strong> Disponível</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="habilidades" className="secao" style={{background: 'var(--fundo-secao)'}}>
        <div className="container">
          <h2 className="titulo-secao fade-in">Habilidades Técnicas</h2>
          <div className={`${styles.habilidadesGrid} grade-responsiva`}>
            {habilidades.map((habilidade, index) => (
              <div key={habilidade.nome} className={`card fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className={styles.habilidadeHeader}>
                  <span className={styles.habilidadeIcone}>{habilidade.icone}</span>
                  <h3>{habilidade.nome}</h3>
                  {habilidade.nivel && <span className={styles.habilidadeNivel}>{habilidade.nivel}%</span>}
                </div>
                {habilidade.nivel && (
                  <div className={styles.progressoBarra}>
                    <div 
                      className={styles.progressoPreenchimento}
                      style={{width: `${habilidade.nivel}%`}}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="secao">
        <div className="container">
          <h2 className="titulo-secao fade-in">Meus Projetos</h2>
          <p className="subtitulo-secao fade-in">
            Confira alguns dos projetos que desenvolvi, demonstrando minhas habilidades técnicas
          </p>
          <div className={styles.projetosGrid}>
            {projetos.map((projeto, index) => (
              <div 
                key={projeto.titulo} 
                className={`card ${projeto.destaque ? styles.projetoDestaque : ''} fade-in`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {projeto.destaque && <div className={styles.badgeDestaque}>Projeto Destaque</div>}
                <h3 className={styles.projetoTitulo}>{projeto.titulo}</h3>
                <p className={styles.projetoDescricao}>{projeto.descricao}</p>
                <div className={styles.projetoTecnologias}>
                  {projeto.tecnologias.map(tech => (
                    <span key={tech} className={styles.tecnologiaTag}>{tech}</span>
                  ))}
                </div>
                <a 
                  href={projeto.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.projetoLink}
                >
                  Ver Projeto →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certificados" className="secao" style={{background: 'var(--fundo-secao)'}}>
        <div className="container">
          <h2 className="titulo-secao fade-in">Certificações</h2>
          <p className="subtitulo-secao fade-in">
            Meu progresso em cursos e certificações técnicas
          </p>
          <div className={`${styles.certificadosGrid} grade-responsiva`}>
            {certificados.map((cert, index) => (
              <div key={cert.nome} className={`card fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className={styles.certificadoTitulo}>{cert.nome}</h3>
                <p className={styles.certificadoHoras}>{cert.horas}</p>
                {cert.progresso && (
                  <div className={styles.certificadoProgresso}>
                    <div className={styles.progressoInfo}>
                      <span>Progresso</span>
                      <span>{cert.progresso}%</span>
                    </div>
                    <div className={styles.progressoBarra}>
                      <div 
                        className={styles.progressoPreenchimento}
                        style={{width: `${cert.progresso}%`}}
                      ></div>
                    </div>
                  </div>
                )}
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.certificadoLink}
                >
                  Ver Certificado
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="secao">
        <div className="container">
          <h2 className="titulo-secao fade-in">Vamos Conversar?</h2>
          <p className="subtitulo-secao fade-in">
            Estou sempre aberto a novas oportunidades e projetos
          </p>
          <div className={styles.contatoConteudo}>
            <div className={`${styles.contatoInfo} slide-in-left`}>
              <div className="card">
                <h3>Informações de Contato</h3>
                <div className={styles.contatoItem}>
                  <strong>✉️ Email:</strong>
                  <a href="mailto:perfilprofissional132@gmail.com">perfilprofissional132@gmail.com</a>
                </div>
                <div className={styles.contatoItem}>
                  <strong>📞 WhatsApp:</strong>
                  <a href="https://wa.me/5562983284550">(62) 98328-4550</a>
                </div>
                <div className={styles.contatoItem}>
                  <strong>📍 Endereço:</strong>
                  <span>Rua Astolfina Bailão, QD 03, LT 72, Residencial Tocantins, CEP: 75909-453 Rio Verde - GO</span>
                </div>
              </div>
            </div>
            <div className={`${styles.contatoLinks} slide-in-right`}>
              <div className="card">
                <h3>Redes Sociais</h3>
                <div className={styles.redesSociais}>
                  <a href="https://github.com/Davi-Cyber-Security" target="_blank" rel="noopener noreferrer" className={styles.redeSocial}>
                    <span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </span>
                    <span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/davi-gabriel-1a62a92a5" target="_blank" rel="noopener noreferrer" className={styles.redeSocial}>
                    <span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </span>
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://instagram.com/davipv_ofc" target="_blank" rel="noopener noreferrer" className={styles.redeSocial}>
                    <span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </span>
                    <span>Instagram</span>
                  </a>
                  <a href="https://curriculome.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.redeSocial}>
                    <span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                      </svg>
                    </span>
                    <span>Currículo Online</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.rodape}>
        <div className="container">
          <div className={styles.rodapeConteudo}>
            <div className={styles.rodapeTexto}>
              <p>&copy; 2025 Davi Gabriel Ferreira Batista. Todos os direitos reservados.</p>
            </div>
            <div className={styles.rodapeLogo}>
              <span>{'<DaviScript />'}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
