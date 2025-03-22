import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCourseById } from "../redux/courseSlice";

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courses.selectedCourse);
  const loading = useSelector((state) => state.courses.loading);
  const error = useSelector((state) => state.courses.error);

  useEffect(() => {
    dispatch(fetchCourseById(courseId));
  }, [dispatch, courseId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="container">
      <h2 className="my-4">{course.title}</h2>
      <img src={course.image} alt={course.title} className="img-fluid mb-4" />
      <p>{course.description}</p>
    </div>
  );
};

export default CourseDetailsPage;