import React, { useState } from 'react';
import './styles.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [posts, setPosts] = useState([]);
  const [students, setStudents] = useState(new Set());

  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [result, setResult] = useState('');

  const handleAddPost = (e) => {
    e.preventDefault();
    if (!name || !subject || !result) {
      alert('Please fill all fields.');
      return;
    }

    const newPost = { name, subject, result };
    setPosts([newPost, ...posts]);

    if (!students.has(name)) {
      setStudents(new Set([...students, name]));
    }

    setName('');
    setSubject('');
    setResult('');
  };

  return (
    <div className="container">
      <h1>SRIT Subject Result Blog</h1>

      {/* Navigation */}
      <nav className="navbar">
        <button
          className={activeSection === 'home' ? 'active' : ''}
          onClick={() => setActiveSection('home')}
        >
          Home
        </button>
        <button
          className={activeSection === 'student' ? 'active' : ''}
          onClick={() => setActiveSection('student')}
        >
          Student
        </button>
        <button
          className={activeSection === 'about' ? 'active' : ''}
          onClick={() => setActiveSection('about')}
        >
          About
        </button>
      </nav>

      {/* Home Section */}
      {activeSection === 'home' && (
        <div className="section">
          <form onSubmit={handleAddPost}>
            <label>Student Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />

            <label>Subject:</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter subject name"
            />

            <label>Result:</label>
            <select value={result} onChange={(e) => setResult(e.target.value)}>
              <option value="">Select Pass or Fail</option>
              <option value="Pass">Pass</option>
              <option value="Fail">Fail</option>
            </select>

            <button type="submit">Add Result Post</button>
          </form>

          {/* Posts */}
          {posts.map((post, index) => (
            <div key={index} className={`post ${post.result.toLowerCase()}`}>
              <h3>{post.name}</h3>
              <div className="subject">Subject: {post.subject}</div>
              <div className={`result ${post.result.toLowerCase()}`}>
                Result: {post.result}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Student Section */}
      {activeSection === 'student' && (
        <div className="section">
          <h2>Student List</h2>
          <ul>
            {Array.from(students).map((student, idx) => (
              <li key={idx}>{student}</li>
            ))}
          </ul>
        </div>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <div className="section">
          <h2>About Srinivasa Ramanujan Institute of Technology (SRIT)</h2>
          <p><strong>Established:</strong> 2008</p>
          <p><strong>Founder:</strong> Sambasiva Reddy Aluru</p>
          <p><strong>Affiliated to:</strong> JNTUA, Anantapur</p>
          <p><strong>Accreditations:</strong> NBA, NAAC 'A' Grade</p>
          <p><strong>Website:</strong> <a href="http://www.srit.ac.in" target="_blank" rel="noreferrer">www.srit.ac.in</a></p>
          <p><strong>Contact:</strong></p>
          <p>Address: SRIT, Rotarypuram, Anantapur, Andhra Pradesh</p>
          <p>Email: info@srit.ac.in</p>
          <p>Phone: +91 8554 123456</p>
        </div>
      )}
    </div>
  );
}

export default App;
