import { Routes, Route } from "react-router-dom";
// import { Box, Center, VStack } from "@chakra-ui/react";

import { Login } from "./features/auth/Login";
import { PrivateOutlet } from "./utils/PrivateOutlet";
import { ProtectedComponent } from "./features/auth/ProtectedComponent";
import MembershipComponent from "./features/Membership/MembershipComponent";

function Hooray() {
  return (
    <>
      <p>Hooray you logged in!</p>
      <ProtectedComponent />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/portal" element={<MembershipComponent />} />
      <Route path="*" element={<PrivateOutlet />}>
      <Route index element={<Hooray />} />
      </Route>
    </Routes>
  );
}

export default App;

// import { Routes, Route } from "react-router-dom";
// import { Box, Center, VStack } from "@chakra-ui/react";

// import { Login } from "./features/auth/Login";
// import { PrivateOutlet } from "./utils/PrivateOutlet";
// import { ProtectedComponent } from "./features/auth/ProtectedComponent";

// function Hooray() {
//   return (
//     <Center h="500px">
//       <VStack>
//         <Box>Hooray you logged in!</Box>
//         <Box>
//           <ProtectedComponent />
//         </Box>
//       </VStack>
//     </Center>
//   );
// }

// function App() {
//   return (
//     <Box>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="*" element={<PrivateOutlet />}>
//           <Route index element={<Hooray />} />
//         </Route>
//       </Routes>
//     </Box>
//   );
// }

// export default App;
