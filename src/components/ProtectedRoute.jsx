import { Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";

export default function ProtectedRoute({children}, path) {
    return <Route 
    path={path}
    element={
      <RequireAuth>
        {children}
      </RequireAuth>
    }
  />
}