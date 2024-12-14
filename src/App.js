import { ConfigProvider, Spin } from "antd";
import "./App.css";
import {
  PrimaryColor,
  SecondaryColor,
  thiredColor,
  MenuItemsColor,
  TextColor,
} from "./Config";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/reducer"
import GlobalStyles from "./style/GlobleStyle";
import { lazy, Suspense } from 'react';
 
const Routers = lazy(() => import( "./Router/Routers"));
 
 
function App() {
  return (
    <>
      <Provider store={store}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: PrimaryColor,
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
            },
          }}
        >
          <GlobalStyles/>
          <Suspense fallback={<Spin/>}>
          <Routers />
          </Suspense>
        </ConfigProvider>
      </Provider>
    </>
  );
}
 
export default App;