function Sidebar() {
  return (
    <nav className="sidebar">
      <h2>Student Dashboard</h2>
      <ul className="nav-links">
        <li className="active">Dashboard</li>
        <li>My Courses</li>
        <li>Assignments</li>
        <li>Grades</li>
      </ul>
    </nav>
  );
}

export default Sidebar;