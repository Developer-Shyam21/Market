

import { ConfigProvider } from 'antd';
import './App.css';
import Routers from './Router/Routers';
import { PrimaryColor, SecondaryColor,thiredColor } from './Config';

function App() {
  return <>
  <ConfigProvider
  theme={{
    token: {
      fontFamily: `"Open Sans", sans-serif`,
      // colorPrimary: PrimaryColor,
      colorPrimary: thiredColor,
      colorPrimaryHover: SecondaryColor,
    },
  }} 
  >
    

<Routers/>
  </ConfigProvider>
  </>
}

export default App;
