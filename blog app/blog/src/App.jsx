import React, { useState } from 'react';

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

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '900px',
      margin: '30px auto',
      padding: '20px',
      background: '#fff8f0',
    },
    title: {
      textAlign: 'center',
      color: '#d35400',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '25px',
    },
    button: (active) => ({
      padding: '10px 20px',
      border: 'none',
      backgroundColor: active ? '#e67e22' : '#f39c12',
      color: 'white',
      fontWeight: 'bold',
      cursor: 'pointer',
      borderRadius: '5px',
    }),
    section: {
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 8px #e0c7a4',
      marginBottom: '30px',
    },
    label: {
      display: 'block',
      marginTop: '10px',
      fontWeight: 'bold',
      color: '#7a4e0b',
    },
    input: {
      width: '100%',
      padding: '8px',
      marginTop: '5px',
      boxSizing: 'border-box',
      borderRadius: '4px',
      border: '1px solid #e67e22',
    },
    submitButton: {
      marginTop: '15px',
      padding: '10px 15px',
      backgroundColor: '#e67e22',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    post: (result) => ({
      background: 'white',
      padding: '15px 20px',
      marginBottom: '15px',
      borderRadius: '8px',
      boxShadow: '0 0 5px #f0b27a',
      borderLeft: `5px solid ${result === 'Pass' ? '#27ae60' : '#e74c3c'}`,
    }),
    postTitle: {
      margin: '0 0 5px 0',
      color: '#d35400',
    },
    postSubject: {
      fontStyle: 'italic',
      color: '#7f8c8d',
      marginBottom: '5px',
    },
    postResult: (result) => ({
      color: result === 'Pass' ? '#27ae60' : '#e74c3c',
      fontWeight: 'bold',
    }),
    listItem: {
      marginBottom: '5px',
      color: '#7a4e0b',
    },
    link: {
      color: '#e67e22',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>SRIT Subject Result Blog</h1>

      {/* Navbar */}
      <nav style={styles.navbar}>
        <button
          style={styles.button(activeSection === 'home')}
          onClick={() => setActiveSection('home')}
        >
          Home
        </button>
        <button
          style={styles.button(activeSection === 'student')}
          onClick={() => setActiveSection('student')}
        >
          Student
        </button>
        <button
          style={styles.button(activeSection === 'about')}
          onClick={() => setActiveSection('about')}
        >
          About
        </button>
      </nav>

      {/* Home Section */}
      {activeSection === 'home' && (
        <div style={styles.section}>
          <form onSubmit={handleAddPost}>
            <label style={styles.label}>Student Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              placeholder="Enter your name"
            />

            <label style={styles.label}>Subject:</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              style={styles.input}
              placeholder="Enter subject name"
            />

            <label style={styles.label}>Result:</label>
            <select
              value={result}
              onChange={(e) => setResult(e.target.value)}
              style={styles.input}
            >
              <option value="">Select Pass or Fail</option>
              <option value="Pass">Pass</option>
              <option value="Fail">Fail</option>
            </select>

            <button type="submit" style={styles.submitButton}>
              Add Result Post
            </button>
          </form>

          {/* Posts */}
          {posts.map((post, index) => (
            <div key={index} style={styles.post(post.result)}>
              <h3 style={styles.postTitle}>{post.name}</h3>
              <div style={styles.postSubject}>Subject: {post.subject}</div>
              <div style={styles.postResult(post.result)}>
                Result: {post.result}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Student Section */}
      {activeSection === 'student' && (
        <div style={styles.section}>
          <h2>Student List</h2>
          <ul>
            {Array.from(students).map((student, index) => (
              <li key={index} style={styles.listItem}>
                {student}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <div style={styles.section}>
          <h2>About Srinivasa Ramanujan Institute of Technology (SRIT)</h2>
          <p><strong>Established:</strong> 2008</p>
          <p><strong>Founder:</strong> Sambasiva Reddy Aluru</p>
          <p><strong>Affiliated to:</strong> JNTUA, Anantapur</p>
          <p><strong>Accreditations:</strong> NBA, NAAC 'A' Grade</p>
          <p>
            <strong>Website:</strong>{' '}
            <a href="http://www.srit.ac.in" target="_blank" rel="noreferrer" style={styles.link}>
              www.srit.ac.in
            </a>
          </p>
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
