// import { Box } from "@chakra-ui/react";
// import { Home } from "./pages/Home";
import { AllRoutes } from "./routes/AllRoutes";
import { LoginSignUp } from "./pages/LoginSignUp";

function App() {
  return (
    <>
      {/* <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        minW={"100svw"}
        minH={"100svh"}
        color={"red.400"}
      >
        <Home />
      </Box> */}

      <AllRoutes />
      <LoginSignUp />
    </>
  );
}

export default App;
