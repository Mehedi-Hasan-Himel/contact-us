
import './App.css'
import Button from './components/Button/Button'
import ContactForm from './components/ContactForm/ContactForm'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <main className='main_container'>
        <ContactHeader />
        <ContactForm />
      </main>
    </>
  );
}

export default App
