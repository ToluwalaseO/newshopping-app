 import './App.css';
import Header from './Header';
import Header2 from './Header2';
import TopSection from './TopSection';
import Header3 from './Header3';
import Listing from './Listing';
import WeeklyPopular from './WeeklyPopular';
import Services from './Services';


function App() {
  return (
    <div className="App">
      <Header />
      <Header2/>
      <TopSection/>
      <Header3/>
      <Listing/>
      <WeeklyPopular/>
      <Services/>
    </div>
  );
}

export default App;
