import styles from './Contact.module.css'
import contact from '../../img/contact.svg'
import personal from '../../img/personal.svg'

function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <div className={`${styles.main_content} ${styles.intro_content}`}>
                <div className={styles.intro_text_content}>
                    <h2 className={`${styles.contact_size}`}>Contato</h2>
                    <p className={styles.spacing}>Preencha os dados abaixo e nos envie uma mensagem.</p>
                </div>
                <div className={styles.intro_img}>
                    <img src={contact}
                        alt="Uma mulher segurando uma carta, um celular" />
                </div>

                <div className={styles.contact_form}>
                    <fieldset className={styles.form_grid}>

                        <div className={styles.personal_img}>
                            <img src={personal}
                                alt="Uma mulher segurando uma carta, um celular" />
                            <legend className={styles.legend}>Formulário</legend>
                        </div>

                        <div className={styles.form_group}>
                            <label className={styles.yellow_background} for="first-name">Primeiro nome</label>
                            <input type="text" name="first-name" id="first-name" placeholder="Digite seu primeiro nome" />
                        </div>

                        <div className={styles.form_group}>
                            <label className={styles.yellow_background} for="last-name">Último nome</label>
                            <input type="text" name="last-name" id="last-name" placeholder="Digite seu último nome" />
                        </div>

                        <div className={styles.form_group}>
                            <label className={styles.yellow_background} for="email">E-mail</label>
                            <input type="text" name="email" id="email" placeholder="Digite seu e-mail" />
                        </div>

                        <div className={`${styles.form_group} ${styles.full_width}`}>
                            <label className={styles.yellow_background} for="message">Mensagem</label>
                            <textarea placeholder="Digite sua mensagem" name="message" id="message" cols="30" rows="10"></textarea>
                        </div>

                        <div className={`${styles.form_group} ${styles.full_width}`}>
                            <button type="submit">
                                Enviar mensagem
                            </button>
                        </div>
                    </fieldset>
                </div>
            </div>

            <footer id="footer" className={styles.footer}>
                <p><a rel="nofollow" target="_blank" href="https://www.linkedin.com/in/emerson-oliveira-137615141/">Made with <span class={styles.heart}>♥</span> (and coding) by Emerson Oliveira.</a></p>
            </footer>

        </section>

    )
}

export default Contact