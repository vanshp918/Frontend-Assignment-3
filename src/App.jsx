import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CourseCard from './components/CourseCard';

function App() {

  const courses = [
    { id: 1, title: "React Fundamentals", instructor: "Gyan", progress: 58 },
    { id: 2, title: "JavaScript", instructor: "Amit", progress: 67 }
  ];

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Header date="Monday, April 21th" />

        <h2 className="section-title">My Courses</h2>
        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              instructor={course.instructor}
              progress={course.progress}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;