import React, { useState, useEffect } from "react";
import {
  FaComment,
  FaCalendar,
  FaPaperclip,
  FaClipboardList,
} from "react-icons/fa";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <LoadTasks></LoadTasks>
      <ToastContainer />
    </div>
  );
}

function LoadTasks() {
  const [tasks, setTasks] = useState([]);
  const [attachments, setAttachments] = useState([]);

  useEffect(() => {
    fetch("https://task-management-server-black-pi.vercel.app/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  useEffect(() => {
    fetch("https://task-management-server-black-pi.vercel.app/attachments")
      .then((res) => res.json())
      .then((data) => setAttachments(data));
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

  // Pick attachment
  function pickAttachment() {
    // Trigger click event on the file input element
    document.getElementById("fileInput").click();
  }

  // Handle file uploads
  function handleFileUpload(event) {
    const fileList = event.target.files;
    const fileListContainer = document.getElementById("fileList");

    // Clear existing file list
    fileListContainer.innerHTML = "";

    // Iterate through the uploaded files
    for (const file of fileList) {
      const listItem = document.createElement("li");
      listItem.textContent = `${file.name} (${file.type})`;
      fileListContainer.appendChild(listItem);
    }

    // Show the attachment modal
    openAttachmentModal();
    // Call the API to upload files
    // uploadFiles(fileList);
  }

  // API call to upload files
  async function uploadFiles(files) {
    const formData = new FormData();

    // Convert files to an array
    const filesArray = Array.from(files);

    filesArray.forEach((file) => {
      formData.append("attachments", file);
    });

    const response = await fetch(
      "https://task-management-server-black-pi.vercel.app/tasks",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      // Handle success
      toast.success("Files uploaded successfully!");
      closeAttachmentModal();
      console.log("Files uploaded successfully");
    } else {
      // Handle error
      console.error("Error uploading files");
    }
  }

  // Function to upload selected files
  function uploadSelectedFiles() {
    const fileInput = document.getElementById("fileInput");
    const selectedFiles = fileInput.files;

    // Call the API to upload files
    uploadFiles(selectedFiles);
  }

  return (
    <div className="p-10">
      <h3>tasks:{tasks.length}</h3>
      <div className="container">
        <div className="scrollable-container">
          {/* Class One Cards */}
          <div className="class-one ">
            <div className="d-flex ">
              <div className="half-circle-one"></div>
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
                    <span className="d-flex align-items-center p-2 custom-background">
                      <FaClipboardList className="mr-1" />
                      1/2
                    </span>
                  </div>

                  <span className="d-flex align-items-center">
                    {/* Circular image 1 */}
                    <div className="rounded-circle overflow-hidden">
                      <img
                        style={{
                          width: "40px",
                          height: "30px",
                          marginRight: "10px",
                        }}
                        src={task.imgLink}
                        alt=""
                      />
                    </div>

                    {/* Circular image 2 */}
                    <div className="rounded-circle overflow-hidden">
                      <img
                        style={{
                          width: "40px",
                          height: "30px",
                          marginRight: "5px",
                        }}
                        src={task.imgLink}
                        alt=""
                      />
                    </div>
                    <span
                      className="rounded-circle "
                      style={{ backgroundColor: "whitesmoke", margin: "10px" }}
                    >
                      12+
                    </span>

                    <span className="comment-icon p-2">
                      <FaComment /> {task.numComments}
                    </span>
                    <span className="attachment-icon" onClick={pickAttachment}>
                      <FaPaperclip /> {attachments.length}
                    </span>
                    <span className="p-2 calendar-icon">
                      <FaCalendar />
                      {task.todayDate}
                    </span>
                  </span>
                </div>
              </div>
            ))}

            {/* Add more cards for class one as needed */}
          </div>
          {/* Class One Cards */}
          <div className="class-one ">
            <div className="d-flex ">
              <div className="half-circle-two"></div>
              <h4 className="name">To Do</h4>
            </div>
            {tasks.map((task) => (
              <div className="card" key={task.id}>
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
                    <span className="d-flex align-items-center p-2 custom-background">
                      <FaClipboardList className="mr-1" />
                      1/2
                    </span>
                  </div>

                  <span className="d-flex align-items-center">
                    {/* Circular image 1 */}
                    <div className="rounded-circle overflow-hidden">
                      <img
                        style={{
                          width: "40px",
                          height: "30px",
                          marginRight: "10px",
                        }}
                        src={task.imgLink}
                        alt=""
                      />
                    </div>

                    {/* Circular image 2 */}
                    <div className="rounded-circle overflow-hidden">
                      <img
                        style={{
                          width: "40px",
                          height: "30px",
                          marginRight: "5px",
                        }}
                        src={task.imgLink}
                        alt=""
                      />
                    </div>
                    <span
                      className="rounded-circle "
                      style={{ backgroundColor: "whitesmoke", margin: "10px" }}
                    >
                      12+
                    </span>

                    <span className="comment-icon p-2">
                      <FaComment /> {task.numComments}
                    </span>
                    <span className="attachment-icon" onClick={pickAttachment}>
                      <FaPaperclip /> {attachments.length}
                    </span>
                    <span className="p-2 calendar-icon">
                      <FaCalendar />
                      {task.todayDate}
                    </span>
                  </span>
                </div>
              </div>
            ))}

            {/* Add more cards for class one as needed */}
          </div>
          {/* Class One Cards */}
          <div className="class-one ">
            <div className="d-flex ">
              <div className="half-circle-three"></div>
              <h4 className="name">Doing</h4>
            </div>
            {tasks.map((task) => (
              <div className="card" key={task.id}>
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
                    <span className="d-flex align-items-center p-2 custom-background">
                      <FaClipboardList className="mr-1" />
                      1/2
                    </span>
                  </div>

                  <span className="d-flex align-items-center">
                    {/* Circular image 1 */}
                    <div className="rounded-circle overflow-hidden">
                      <img
                        style={{
                          width: "40px",
                          height: "30px",
                          marginRight: "10px",
                        }}
                        src={task.imgLink}
                        alt=""
                      />
                    </div>

                    {/* Circular image 2 */}
                    <div className="rounded-circle overflow-hidden">
                      <img
                        style={{
                          width: "40px",
                          height: "30px",
                          marginRight: "5px",
                        }}
                        src={task.imgLink}
                        alt=""
                      />
                    </div>
                    <span
                      className="rounded-circle "
                      style={{ backgroundColor: "whitesmoke", margin: "10px" }}
                    >
                      12+
                    </span>

                    <span className="comment-icon p-2">
                      <FaComment /> {task.numComments}
                    </span>
                    <span className="attachment-icon" onClick={pickAttachment}>
                      <FaPaperclip /> {attachments.length}
                    </span>
                    <span className="p-2 calendar-icon">
                      <FaCalendar />
                      {task.todayDate}
                    </span>
                  </span>
                </div>
              </div>
            ))}

            {/* Add more cards for class one as needed */}
          </div>
          {/* Class One Cards */}
          <div className="class-one ">
            <div className="d-flex ">
              {/* <div className="half-circle"></div> */}
              <h4 className="name">Under Review</h4>
            </div>
            {tasks.map((task) => (
              <div className="card" key={task.id}>
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
                    <span className="d-flex align-items-center p-2 custom-background">
                      <FaClipboardList className="mr-1" />
                      1/2
                    </span>
                  </div>

                  <span className="d-flex align-items-center">
                    {/* Circular image 1 */}
                    <div className="rounded-circle overflow-hidden">
                      <img
                        style={{
                          width: "40px",
                          height: "30px",
                          marginRight: "10px",
                        }}
                        src={task.imgLink}
                        alt=""
                      />
                    </div>

                    {/* Circular image 2 */}
                    <div className="rounded-circle overflow-hidden">
                      <img
                        style={{
                          width: "40px",
                          height: "30px",
                          marginRight: "5px",
                        }}
                        src={task.imgLink}
                        alt=""
                      />
                    </div>
                    <span
                      className="rounded-circle "
                      style={{ backgroundColor: "whitesmoke", margin: "10px" }}
                    >
                      12+
                    </span>

                    <span className="comment-icon p-2">
                      <FaComment /> {task.numComments}
                    </span>
                    <span className="attachment-icon" onClick={pickAttachment}>
                      <FaPaperclip /> {attachments.length}
                    </span>
                    <span className="p-2 calendar-icon">
                      <FaCalendar />
                      {task.todayDate}
                    </span>
                  </span>
                </div>
              </div>
            ))}

            {/* Add more cards for class one as needed */}
          </div>
          {/* Class One Cards */}
          <div className="class-one ">
            <div className="d-flex ">
              {/* <div className="half-circle"></div> */}
              <h4 className="name">Completed</h4>
            </div>
            {tasks.map((task) => (
              <div className="card" key={task.id}>
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

                  <span className="d-flex align-items-center">
                    {/* Circular image 1 */}
                    <div className="rounded-circle overflow-hidden">
                      <img
                        style={{
                          width: "40px",
                          height: "30px",
                          marginRight: "10px",
                        }}
                        src={task.imgLink}
                        alt=""
                      />
                    </div>

                    {/* Circular image 2 */}
                    <div className="rounded-circle overflow-hidden">
                      <img
                        style={{
                          width: "40px",
                          height: "30px",
                          marginRight: "5px",
                        }}
                        src={task.imgLink}
                        alt=""
                      />
                    </div>
                    <span
                      className="rounded-circle "
                      style={{ backgroundColor: "whitesmoke", margin: "10px" }}
                    >
                      12+
                    </span>

                    <span className="comment-icon p-2">
                      <FaComment /> {task.numComments}
                    </span>
                    <span className="attachment-icon" onClick={pickAttachment}>
                      <FaPaperclip /> {attachments.length}
                    </span>
                    <span className="p-2 calendar-icon">
                      <FaCalendar />
                      {task.todayDate}
                    </span>
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

          <button onClick={uploadSelectedFiles}>Upload</button>

          <ul id="fileList"></ul>
        </div>
      </div>
    </div>
  );
}

export default App;
