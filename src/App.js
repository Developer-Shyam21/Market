

import { ConfigProvider, Spin } from 'antd';
import './App.css';
import Routers from './Router/Routers';
import { PrimaryColor, SecondaryColor, thiredColor, MenuItemsColor, TextColor } from './Config';
import "./App.css"


function App() {


  return <>
    <ConfigProvider
      theme={{
        token: {    
          colorPrimary: thiredColor,
          colorPrimaryHover: SecondaryColor,
        },
        components: {
          Menu: {
            item: {
              color: TextColor,
            },
            itemActive: {
              color: MenuItemsColor,
            },
          },
          Spin: {
            spinning: {
              color: TextColor,
            },
          },
          Layout: {
            header: {
              background: thiredColor,
            },
          },
        }
      }}
    >
      <Routers />
    </ConfigProvider>
  </>
}

export default App;
