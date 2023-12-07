import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaComment,
  FaCalendar,
  FaPaperclip,
  FaClipboardList,
} from "react-icons/fa";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
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
    fetch("https://task-management-server-black-pi.vercel.app/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  // Open the attachment modal
  function openAttachmentModal() {
    var modal = document.getElementById("attachment-modal");
    if (modal) {
      modal.style.display = "block";
    } else {
      console.error("Modal element not found.");
    }
  }

  // Close the attachment modal
  function closeAttachmentModal() {
    var modal = document.getElementById("attachment-modal");
    if (modal) {
      modal.style.display = "none";
    } else {
      console.error("Modal element not found.");
    }
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
              <div className="card">
                {/* Left-top image */}
                <div className="d-flex justify-content-start align-items-start p-2">
                  <img
                    src={task.imgLink}
                    className="rounded-circle"
                    alt="Left Profile Image"
                    style={{ width: "40px", height: "40px" }}
                  />{" "}
                  <p className="p-2">{task.clientName}</p>
                </div>

                {/* Right-top image */}
                <div className="d-flex justify-content-end align-items-start position-absolute w-100 p-2">
                  <img
                    src={task.imgLink}
                    className="rounded-circle"
                    alt="Right Profile Image"
                    style={{ width: "40px", height: "40px" }}
                  />{" "}
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
                    onClick={() => openAttachmentModal("attachment-modal-1")}
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

          {/* Class Two Cards */}
          <div className="class-two">
            <h4 className="name">To Do</h4>
            <div className="card">
              <img
                src="path/to/left-profile-image.jpg"
                className="card-img-top"
                alt="Left Profile Image"
              />
              <div className="card-body">
                <p className="card-text">Some text goes here.</p>
                <span
                  className="attachment-icon"
                  onClick={() => openAttachmentModal("attachment-modal-1")}
                >
                  &#128206; Attachment
                </span>
              </div>
            </div>

            {/* Add more cards for class two as needed */}
          </div>

          {/* Class Three Cards */}
          <div className="class-three">
            <h4 className="name">Doing</h4>
            <div className="card">
              <img
                src="path/to/left-profile-image.jpg"
                className="card-img-top"
                alt="Left Profile Image"
              />
              <div className="card-body">
                <p className="card-text">Some text goes here.</p>
                <span
                  className="attachment-icon"
                  onClick={() => openAttachmentModal("attachment-modal-1")}
                >
                  &#128206; Attachment
                </span>
              </div>
            </div>

            {/* Add more cards for class three as needed */}
          </div>

          {/* Class Four Cards */}
          <div className="class-four">
            <h4 className="name">Under Review</h4>
            <div className="card">
              <img
                src="path/to/left-profile-image.jpg"
                className="card-img-top"
                alt="Left Profile Image"
              />
              <div className="card-body">
                <p className="card-text">Some text goes here.</p>
                <span
                  className="attachment-icon"
                  onClick={() => openAttachmentModal("attachment-modal-1")}
                >
                  &#128206; Attachment
                </span>
              </div>
            </div>

            {/* Add more cards for class four as needed */}
          </div>

          {/* Class Five Cards */}
          <div className="class-five">
            <h4 className="name">Completed</h4>
            <div className="card">
              <img
                src="path/to/left-profile-image.jpg"
                className="card-img-top"
                alt="Left Profile Image"
              />
              <div className="card-body">
                <p className="card-text">Some text goes here.</p>
                <span
                  className="attachment-icon"
                  onClick={() => openAttachmentModal("attachment-modal-1")}
                >
                  &#128206; Attachment
                </span>
              </div>
            </div>

            {/* Add more cards for class five as needed */}
          </div>
        </div>
      </div>

      
<div id="attachment-modal" className="modal">
  <div class="modal-content">
   
  <span className="close" onClick={closeAttachmentModal}>&times;</span>

    <input type="file" id="fileInput" multiple />

    
    <ul id="fileList"></ul>
  </div>
</div>

    </div>
  );
}

export default App;
