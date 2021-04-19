import Container from '../../components/Container';
import s from './HomePage.module.scss';

const HomePage = () => (
  <section className={s.hero}>
    <Container>
      <h1 className={s.title}>
        Welcome to our service{' '}
        <span role="img" aria-label="Welcome-icon">
          💁‍♀️
        </span>
      </h1>
    </Container>
  </section>
);

export default HomePage;
