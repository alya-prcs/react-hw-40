import css from './Home.module.css';

export default function Home() {
  return (
    <section className={css.hero}>
      <h1>Книга контактів</h1>
      <p>Зберігайте свої контакти в приватній колекції. Зареєструйтесь або увійдіть, щоб почати.</p>
    </section>
  );
}
