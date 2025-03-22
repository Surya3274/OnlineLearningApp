import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchcourses } from "../redux/courseSlice";

const CourseListPage = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.items);
  const loading = useSelector((state) => state.courses.loading);
  const error = useSelector((state) => state.courses.error);

  useEffect(() => {
    dispatch(fetchcourses());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h2 className="my-4">Available Courses</h2>
      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4 mb-4" key={course.id}>
            <div className="card h-100">
              <img src={course.image} className="card-img-top" alt={course.title} style={{ height: '180px', objectFit: 'contain' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <a href={`/courses/${course.id}`} className="btn btn-primary mt-auto">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseListPage;