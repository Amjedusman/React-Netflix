import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import Rowpost from './Components/RowPost/Rowpost';
import { originals, action, comedyMovies, horrorMovies, romanceMovies, documentaries } from './urls';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Rowpost title='Netflix Originals' url={originals} />
      <Rowpost title='Action' isSmall={true} url={action} />
      <Rowpost title='Comedy' isSmall={true} url={comedyMovies} />
      <Rowpost title='Horror' isSmall={true} url={horrorMovies} />
      <Rowpost title='Romance' isSmall={true} url={romanceMovies} />
      <Rowpost title='Documentaries' isSmall={true} url={documentaries} />
    </div>
  );
}

export default App;
