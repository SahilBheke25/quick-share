import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Layout from "./shared/Layout";
import EquipmentContainer from "./Containers/EquipmentContainer";

function App() {
  return (
    <MantineProvider>
      <Provider store={store}>
        <RouterProvider router={routes} />
        {/* <EquipmentContainer /> */}
      </Provider>
    </MantineProvider>
  );
}

export default App;
