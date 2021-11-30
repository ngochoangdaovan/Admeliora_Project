import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "../components/Grid";
import { Link, useLocation } from "react-router-dom";
import TodoItem from "../components/TodoItem";
const Profile = () => {
  const [state, setState] = useState({
    tasks: [
      {
        name: "Nhập Họ và tên ...",
        completed: false,
      },
      {
        name: "Nhập Tên Đăng Nhập ...",
        completed: false,
      },
      {
        name: "Nhập Gmail ... ",
        completed: false,
      },
      {
        name: "Nhập Số Điện Thoại ... ",
        completed: false,
      },
      {
        name: "Nhập địa chỉ ... ",
        completed: false,
      },
      {
        name: "Nhập ngày sinh ... ",
        completed: false,
      },
    ],
    currentTask: "",
  });

  function deleteTask(index) {
    console.log(index);

    let tasks = state.tasks;
    tasks.splice(index, 1);

    setState({
      tasks,
    });

    this.setState({
      tasks,
      currentTask: "",
    });
  }
  const updateTask = (newValue) => {
    setState({
      currentTask: newValue.target.value,
    });
  };

  function editTask(index, newValue) {
    var tasks = state.tasks;
    var task = tasks[index];
    task["name"] = newValue;
    setState({
      tasks,
    });
  }

  function changeStatus(index) {
    var tasks = state.tasks;
    var task = tasks[index];
    task.completed = !task.completed;
    setState({
      tasks: tasks,
    });
  }

  const [img, setImg] = useState({
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  });

  function imageHandler(e) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }
  const { profileImg } = img;

  const [gender, setGender] = useState("");

  const handleChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textDecoration: "underline" }}>Hồ Sơ của tôi</h1>
      </div>

      <div>
        <Grid col={2} gap={20}>
          <div className="first_frame_profile">
            <div style={{ marginRight: "50px", marginLeft: "10px" }}>
              <h2 style={{ marginTop: "70px" }}>Họ & Tên:</h2>
              <h2 style={{ marginTop: "68px" }}>Tên Đăng Nhập:</h2>
              <h2 style={{ marginTop: "68px" }}>Gmail:</h2>
              <h2 style={{ marginTop: "65px" }}>Phone Numbers:</h2>
              <h2 style={{ marginTop: "67px" }}>Address:</h2>
              <h2 style={{ marginTop: "67px" }}>Ngày Sinh:</h2>

              <div>
                <h2 style={{ marginTop: "67px" }}>Giới Tính:</h2>
              </div>

              <div>
                <h2 style={{ marginTop: "67px" }}>Level : </h2>

                <Link to="">
                  <h2
                    style={{ marginTop: "67px", textDecoration: "underline" }}
                  >
                    Lịch Sữ Giao Dịch
                  </h2>
                </Link>

                <button
                  style={{
                    height: "30px",
                    width: "100px",
                    borderRadius: "20px",
                    backgroundColor: "white",
                    marginTop: "60px",
                  }}
                >
                  Lưu
                </button>
              </div>
            </div>

            <section>
              {state.tasks.map((task, index) => {
                return (
                  <TodoItem
                    key={index}
                    clickHandler={changeStatus}
                    index={index}
                    deleteTask={deleteTask}
                    editTask={editTask}
                    details={task}
                  />
                );
              })}

              {/* <div style ={{marginTop:"75px"}}>
                        <label style ={{paddingLeft:"20px"}}>
                            <input type="radio"   value="male"  id="male" onChange={handleChange}  />Nam
                        </label >
                        <label style ={{paddingLeft:"60px"}}>
                        <input type="radio"   value="female"  id="female" onChange={handleChange}  />Nữ
                        </label>
                        <label style ={{paddingLeft:"60px"}}>
                        <input type="radio"   value="other"  id="other" onChange={handleChange}  /> Khác
                        </label>
                        </div> */}

              <form style={{ marginTop: "75px" }}>
                <label htmlFor="male" style={{ paddingLeft: "20px" }}>
                  <input
                    type="radio"
                    value="male"
                    id="male"
                    onChange={handleChange}
                    name="gender"
                    
                  />
                  Nam
                </label>

                <label htmlFor="female" style={{ paddingLeft: "60px" }}>
                  <input
                    type="radio"
                    value="female"
                    id="female"
                    onChange={handleChange}
                    name="gender"
                  />
                  Nữ
                </label>


                <label htmlFor="other" style={{ paddingLeft: "60px" }}>
                <input
                  type="radio"
                  value="other"
                  id="other"
                  onChange={handleChange}
                  
                  name="gender"
                />
                
                  Khác
                </label>
              </form>
            </section>
          </div>

          <div className="second_frame_profile">
            <div className="title_add_img_profile">
              <h2>Ảnh Của Bạn</h2>
            </div>

            <div className="container_frame_profile">
              <div className="img-holder">
                <img
                  src={profileImg}
                  alt=""
                  id="img"
                  className="img_user_input_profile"
                />
              </div>
              <input
                type="file"
                accept="image/*"
                name="image-upload"
                id="input"
                onChange={imageHandler}
              />
              <div className="label">
                <label className="image_upload" htmlFor="input">
                  <h4>Thay Đổi</h4>
                </label>
                <p style={{ marginTop: "20px" }}>
                  Quản lý thông tin hồ sơ để bảo mật tài khoản
                </p>
              </div>
            </div>

            <div style={{ marginTop: "500px", textAlign: "center" }}>
              <Link to="/Login">
                <button
                  style={{
                    height: "30px",
                    width: "100px",
                    borderRadius: "20px",
                    backgroundColor: "white",
                    marginTop: "60px",
                  }}
                >
                  log out
                </button>
              </Link>
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Profile;
