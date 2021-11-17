import './App.css';

import Header from './Header';
import MainContent from './MainContent';
import ProductMain from './ProductMain';
import ThirdColumn from './ThirdColumn';


function App() {
  
  return (
    <div className="App">
      <div className = "container_1">
      <Header/>
      </div>
      
     <div className="flex">
      <div className="Column_1">
      <MainContent/> 
      </div>
      <div className="Column_2">
      <ProductMain/>
      </div>
      <div className="Column_3">
      <ThirdColumn/>
      </div>
      </div>
    
    </div>
  );
}

export default App;
