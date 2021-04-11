import { Switch, Route, BrowserRouter } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Course from "./pages/Course";

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
            </Switch>
          </AppLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
