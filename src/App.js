import React, { useState, useEffect } from 'react';
import {
  FaComment,
  FaCalendar,
  FaPaperclip,
  FaClipboardList,
} from 'react-icons/fa';
import { HiOutlineSquare3Stack3D } from 'react-icons/hi2';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadTasks></LoadTasks>
    </div>
  );
}

function LoadTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('https://task-management-server-black-pi.vercel.app/tasks')
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  // Open the attachment modal
  function openAttachmentModal() {
    var modal = document.getElementById('attachment-modal');
    if (modal) {
      modal.style.display = 'block';
    } else {
      console.error('Modal element not found.');
    }
  }

  // Close the attachment modal
  function closeAttachmentModal() {
    var modal = document.getElementById('attachment-modal');
    if (modal) {
      modal.style.display = 'none';
    } else {
      console.error('Modal element not found.');
    }
  }

  // Pick attachment
  function pickAttachment() {
    // Trigger click event on the file input element
    document.getElementById('fileInput').click();
  }

  // Handle file uploads
  function handleFileUpload(event) {
    const fileList = event.target.files;
    const fileListContainer = document.getElementById('fileList');

    // Clear existing file list
    fileListContainer.innerHTML = '';

    // Iterate through the uploaded files
    for (const file of fileList) {
      const listItem = document.createElement('li');
      listItem.textContent = `${file.name} (${file.type})`;
      fileListContainer.appendChild(listItem);
    }

    // Show the attachment modal
    openAttachmentModal();
  }

  return (
    <div className="p-10">
      <h1>Job task lists</h1>
      <h3>tasks:{tasks.length}</h3>
      <div className="container">
        <div className="scrollable-container">
          {/* Class One Cards */}
          <div className="class-one ">
            <div className="d-flex ">
              <div className="half-circle"></div>
              <h4 className="name">Incomplete</h4>
            </div>
            {tasks.map((task) => (
              <div className="card" key={task.id}>
                {/* Left-top image */}
                <div className="d-flex justify-content-start align-items-start p-2">
                  <img
                    src={task.imgLink}
                    className="rounded-circle"
                    alt="Left Profile Image"
                    style={{ width: '40px', height: '40px' }}
                  />{' '}
                  <p className="p-2">{task.clientName}</p>
                </div>

                {/* Right-top image */}
                <div className="d-flex justify-content-end align-items-start position-absolute w-100 p-2">
                  <img
                    src={task.imgLink}
                    className="rounded-circle"
                    alt="Right Profile Image"
                    style={{ width: '40px', height: '40px' }}
                  />{' '}
                  <p className="p-2">Sadik Istiak</p>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text mb-0 ">
                      <HiOutlineSquare3Stack3D /> Lorem ipsum dolor sit amet....
                    </p>
                    <span className="d-flex align-items-center p-2">
                      <FaClipboardList className="mr-1" />
                      1/2
                    </span>
                  </div>

                  <span className="comment-icon p-2">
                    <FaComment /> {task.numComments}
                  </span>
                  <span
                    className="attachment-icon"
                    onClick={pickAttachment}
                  >
                    <FaPaperclip /> {task.attachmentNumber}
                  </span>
                  <span className="p-2 calendar-icon">
                    <FaCalendar />
                    {task.todayDate}
                  </span>
                </div>
              </div>
            ))}

            {/* Add more cards for class one as needed */}
          </div>
          {/* Class One Cards */}
          <div className="class-one ">
            <div className="d-flex ">
              <div className="half-circle"></div>
              <h4 className="name">Incomplete</h4>
            </div>
            {tasks.map((task) => (
              <div className="card" key={task.id}>
                {/* Left-top image */}
                <div className="d-flex justify-content-start align-items-start p-2">
                  <img
                    src={task.imgLink}
                    className="rounded-circle"
                    alt="Left Profile Image"
                    style={{ width: '40px', height: '40px' }}
                  />{' '}
                  <p className="p-2">{task.clientName}</p>
                </div>

                {/* Right-top image */}
                <div className="d-flex justify-content-end align-items-start position-absolute w-100 p-2">
                  <img
                    src={task.imgLink}
                    className="rounded-circle"
                    alt="Right Profile Image"
                    style={{ width: '40px', height: '40px' }}
                  />{' '}
                  <p className="p-2">Sadik Istiak</p>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text mb-0 ">
                      <HiOutlineSquare3Stack3D /> Lorem ipsum dolor sit amet....
                    </p>
                    <span className="d-flex align-items-center p-2">
                      <FaClipboardList className="mr-1" />
                      1/2
                    </span>
                  </div>

                  <span className="comment-icon p-2">
                    <FaComment /> {task.numComments}
                  </span>
                  <span
                    className="attachment-icon"
                    onClick={pickAttachment}
                  >
                    <FaPaperclip /> {task.attachmentNumber}
                  </span>
                  <span className="p-2 calendar-icon">
                    <FaCalendar />
                    {task.todayDate}
                  </span>
                </div>
              </div>
            ))}

            {/* Add more cards for class one as needed */}
          </div>
          {/* Class One Cards */}
          <div className="class-one ">
            <div className="d-flex ">
              <div className="half-circle"></div>
              <h4 className="name">Incomplete</h4>
            </div>
            {tasks.map((task) => (
              <div className="card" key={task.id}>
                {/* Left-top image */}
                <div className="d-flex justify-content-start align-items-start p-2">
                  <img
                    src={task.imgLink}
                    className="rounded-circle"
                    alt="Left Profile Image"
                    style={{ width: '40px', height: '40px' }}
                  />{' '}
                  <p className="p-2">{task.clientName}</p>
                </div>

                {/* Right-top image */}
                <div className="d-flex justify-content-end align-items-start position-absolute w-100 p-2">
                  <img
                    src={task.imgLink}
                    className="rounded-circle"
                    alt="Right Profile Image"
                    style={{ width: '40px', height: '40px' }}
                  />{' '}
                  <p className="p-2">Sadik Istiak</p>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text mb-0 ">
                      <HiOutlineSquare3Stack3D /> Lorem ipsum dolor sit amet....
                    </p>
                    <span className="d-flex align-items-center p-2">
                      <FaClipboardList className="mr-1" />
                      1/2
                    </span>
                  </div>

                  <span className="comment-icon p-2">
                    <FaComment /> {task.numComments}
                  </span>
                  <span
                    className="attachment-icon"
                    onClick={pickAttachment}
                  >
                    <FaPaperclip /> {task.attachmentNumber}
                  </span>
                  <span className="p-2 calendar-icon">
                    <FaCalendar />
                    {task.todayDate}
                  </span>
                </div>
              </div>
            ))}

            {/* Add more cards for class one as needed */}
          </div>
          {/* Class One Cards */}
          <div className="class-one ">
            <div className="d-flex ">
              <div className="half-circle"></div>
              <h4 className="name">Incomplete</h4>
            </div>
            {tasks.map((task) => (
              <div className="card" key={task.id}>
                {/* Left-top image */}
                <div className="d-flex justify-content-start align-items-start p-2">
                  <img
                    src={task.imgLink}
                    className="rounded-circle"
                    alt="Left Profile Image"
                    style={{ width: '40px', height: '40px' }}
                  />{' '}
                  <p className="p-2">{task.clientName}</p>
                </div>

                {/* Right-top image */}
                <div className="d-flex justify-content-end align-items-start position-absolute w-100 p-2">
                  <img
                    src={task.imgLink}
                    className="rounded-circle"
                    alt="Right Profile Image"
                    style={{ width: '40px', height: '40px' }}
                  />{' '}
                  <p className="p-2">Sadik Istiak</p>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text mb-0 ">
                      <HiOutlineSquare3Stack3D /> Lorem ipsum dolor sit amet....
                    </p>
                    <span className="d-flex align-items-center p-2">
                      <FaClipboardList className="mr-1" />
                      1/2
                    </span>
                  </div>

                  <span className="comment-icon p-2">
                    <FaComment /> {task.numComments}
                  </span>
                  <span
                    className="attachment-icon"
                    onClick={pickAttachment}
                  >
                    <FaPaperclip /> {task.attachmentNumber}
                  </span>
                  <span className="p-2 calendar-icon">
                    <FaCalendar />
                    {task.todayDate}
                  </span>
                </div>
              </div>
            ))}

            {/* Add more cards for class one as needed */}
          </div>
          {/* Class One Cards */}
          <div className="class-one ">
            <div className="d-flex ">
              <div className="half-circle"></div>
              <h4 className="name">Incomplete</h4>
            </div>
            {tasks.map((task) => (
              <div className="card" key={task.id}>
                {/* Left-top image */}
                <div className="d-flex justify-content-start align-items-start p-2">
                  <img
                    src={task.imgLink}
                    className="rounded-circle"
                    alt="Left Profile Image"
                    style={{ width: '40px', height: '40px' }}
                  />{' '}
                  <p className="p-2">{task.clientName}</p>
                </div>

                {/* Right-top image */}
                <div className="d-flex justify-content-end align-items-start position-absolute w-100 p-2">
                  <img
                    src={task.imgLink}
                    className="rounded-circle"
                    alt="Right Profile Image"
                    style={{ width: '40px', height: '40px' }}
                  />{' '}
                  <p className="p-2">Sadik Istiak</p>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text mb-0 ">
                      <HiOutlineSquare3Stack3D /> Lorem ipsum dolor sit amet....
                    </p>
                    <span className="d-flex align-items-center p-2">
                      <FaClipboardList className="mr-1" />
                      1/2
                    </span>
                  </div>

                  <span className="comment-icon p-2">
                    <FaComment /> {task.numComments}
                  </span>
                  <span
                    className="attachment-icon"
                    onClick={pickAttachment}
                  >
                    <FaPaperclip /> {task.attachmentNumber}
                  </span>
                  <span className="p-2 calendar-icon">
                    <FaCalendar />
                    {task.todayDate}
                  </span>
                </div>
              </div>
            ))}

            {/* Add more cards for class one as needed */}
          </div>

         

        </div>
      </div>

      <div id="attachment-modal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeAttachmentModal}>
            &times;
          </span>

          <input
            type="file"
            id="fileInput"
            multiple
            onChange={handleFileUpload}
          />

          <ul id="fileList"></ul>
        </div>
      </div>
    </div>
  );
}

export default App;
