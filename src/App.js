import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Info from './components/Info';
import Asist from './components/Asist';
import Date from './components/Date';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Sidebar />
      <div id='boda-main'>
        <Header />
        <Date />
        <Info />
        <Gallery />
        <Asist />
        <Footer />
      </div>
    </>
  );
}

export default App;
