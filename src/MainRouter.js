import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/core/Home";
import Users from "./components/user/Users";
import Signup from "./components/user/Signup";
import Signin from "./components/auth/Signin";
import Profile from "./components/user/Profile";
import PrivateRoute from "./components/auth/PrivateRoute";
import EditProfile from "./components/user/EditProfile";
import NewCourse from "./components/course/NewCourse";
import MyCourses from "./components/course/MyCourses";
import Sidebar from "./screens/sidebar";
import Course from "./components/course/Course";
import EditCourse from "./components/course/EditCourse";
import Enrollment from "./components/enrollment/Enrollment";

const MainRouter = () => {
  return (
    <div className="App flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/user/:userId" element={<Profile />} />
        <Route
          path="/user/edit/:userId"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/teach/course/new"
          element={
            <PrivateRoute>
              <NewCourse />
            </PrivateRoute>
          }
        />
        <Route
          path="/teach/courses/"
          element={
            <PrivateRoute>
              <MyCourses />
            </PrivateRoute>
          }
        />
        <Route
          path="/teach/course/:courseId"
          element={
            <PrivateRoute>
              <Course />
            </PrivateRoute>
          }
        />
        <Route path="/course/:courseId" element={<Course />} />
        <Route
          path="/teach/course/edit/:courseId"
          element={
            <PrivateRoute>
              <EditCourse />
            </PrivateRoute>
          }
        />
        <Route
          path="/learn/:enrollmentId"
          element={
            <PrivateRoute>
              <Enrollment />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default MainRouter;
