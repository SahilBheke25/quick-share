import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";


function App() {
  return (
    <MantineProvider>
      <Provider store={store}>
       <RouterProvider router={routes} />
      </Provider>
    </MantineProvider>
  );
}

export default App;
