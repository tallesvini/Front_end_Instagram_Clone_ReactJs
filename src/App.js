import NavBar from './components/layout/NavBar/NavBar'
import NavMob from './components/layout/NavBar/Mobile/NavMob';
import Main from './components/layout/Main/Main';

function App() {
  return (
    <div className="App">
      <NavBar />
      <NavMob />
      <Main />
    </div>
  );
}

export default App;
