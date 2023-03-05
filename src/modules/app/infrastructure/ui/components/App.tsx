import { BasicLayout } from './BasicLayout';
import { Header } from './Header';
import { Routes } from './Routes';

function App() {
  return <BasicLayout Main={<Routes />} Header={<Header />} />;
}

export default App;
