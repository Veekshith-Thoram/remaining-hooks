import logo from './logo.svg';
import './App.css';
import TwoCounters from './components/TwoCounters';
import InputFocus from "./components/InputFocus"
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';


function App() {
  return (
    <div className="App">
    <DocTitleOne />
    <DocTitleTwo />
      {/* <InputFocus /> */}
    {/* <TwoCounters />  */}
    </div>
  );
}

export default App;
