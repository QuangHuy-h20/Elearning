import { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

// Pages
// import Home from "./pages/Home";
// import Courses from "./pages/Courses";
// import Course from "./pages/Course";
// import LoginPage from "./pages/LoginPage";

// Layout
import AppLayout from "./layouts/AppLayout";
import AdminLayout from "./layouts/AdminLayout";
// import AdminCourses from "./pages/AdminCourses";
// import AdminUsers from "./pages/AdminUsers";

//Custom Route
import AdminRoute from "./auth/AdminRoute";

//Sử dụng Lazyload ko import trực tiếp Page vào

const Home = lazy(() => import("./pages/Home"));
const Courses = lazy(() => import("./pages/Courses"));
const Course = lazy(() => import("./pages/Course"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const AdminCourses = lazy(() => import("./pages/AdminCourses"));
const AdminUsers = lazy(() => import("./pages/AdminUsers"));

function App() {
  return (
   <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
      <Switch>
        <Route path="/admin">
          <AdminLayout>
            <Switch>
              <Redirect exact from="/admin" to="/admin/courses" />
              <AdminRoute path="/admin/courses">
                <AdminCourses></AdminCourses>
              </AdminRoute>
              <AdminRoute path="/admin/users">
                <AdminUsers></AdminUsers>
              </AdminRoute>
            </Switch>
          </AdminLayout>
        </Route>
        <Route path="/">
          <AppLayout>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/courses/:category">
                <Courses />
              </Route>
              <Route path="/course/:courseId">
                <Course />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
            </Switch>
          </AppLayout>
        </Route>
      </Switch>
    </BrowserRouter>
   </Suspense>
  );
}

export default App;
