import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "sonner";
import { ClientInformation } from "./08-use-suspense/ClientInformation";
import { getUserAction } from "./08-use-suspense/api/get-user.action";
import { ProfessionalApp } from "./09-useContext/ProfessionalApp";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <Toaster richColors />
//     <Suspense fallback={<div>Loading...</div>}>
//       <ClientInformation getUser={getUserAction(1000)} />
//     </Suspense>
//   </StrictMode>,
// );

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster
      richColors
      position="top-center"
    />
    <ProfessionalApp />
  </StrictMode>,
);
