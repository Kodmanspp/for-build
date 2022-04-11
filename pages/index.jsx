import styles from '../styles/Home.module.css';
import MainPage from '../components/MainPage/MainPage';
import 'antd/dist/antd.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <MainPage />
    </div>
  );
}
