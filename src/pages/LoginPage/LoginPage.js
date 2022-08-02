import './LoginPage.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import Header from '../../components/Header/Header';

export default function HomePage() {
    return (
        <>
            <Header />
            <main className='loginPage'>
                <LoginForm />
            </main>
        </>
    );
}
