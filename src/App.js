import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Course from "./pages/Course";
import LoginPage from "./pages/LoginPage";
// Layout
import AppLayout from "./layouts/AppLayout";
import AdminLayout from "./layouts/AdminLayout";
import AdminCourses from "./pages/AdminCourses";
import AdminUsers from "./pages/AdminUsers";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin">
          <AdminLayout>
            <Switch>
              <Redirect exact from="/admin" to="/admin/courses" />
              <Route path="/admin/courses">
                <AdminCourses></AdminCourses>
              </Route>
              <Route path="/admin/users">
                <AdminUsers></AdminUsers>
              </Route>
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
  );
}

export default App;
