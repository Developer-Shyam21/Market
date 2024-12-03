import { ConfigProvider, Spin } from "antd";
import "./App.css";
import Routers from "./Router/Routers";
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
          <Routers />
        </ConfigProvider>
      </Provider>
    </>
  );
}

export default App;
