import "./App.css";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Provider } from "react-redux";
import { Store } from "./Store/Store";

function App() {
  return (
    <>
      <Provider store={Store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
