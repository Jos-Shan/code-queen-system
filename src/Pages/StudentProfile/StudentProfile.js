import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './StudentProfile.css'

const StudentProfile = () => {
    const [image, setImage] = useState("");
    const [photo, setPhoto] = useState("");
    const [uploading, setUploading] = useState(false);

    const uploadImage = () => {
        setUploading(true);
    
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'mutuuzeApp');
        data.append('cloud_name', 'mutuuze');
    
        axios.post('https://api.cloudinary.com/v1_1/mutuuze/image/upload', data)
          .then(res => {
            console.log('Upload Image Response ====>', res);
            setPhoto(res.data.secure_url);
            alert('Image uploaded successfully!');
            setUploading(false);
          })
          .catch(err => {
            console.log("Image Upload Error ====>", err.message)
            setUploading(false);
          });
      };

    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark">

                <a class="navbar-brand" href="#">
                    <img src="images/logo.png" alt="Code Queen Logo" class="logo" />
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="signup">Edit Details</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link"to="all-students">All Students</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="cover">
                <h1 class="page-title">Student's Profile </h1>

                <div class="heading">
                    <div class="row student-details">
                        <div>
                        {photo && (
                            <img src={photo} width="100" />
                        )} </div>
                        <div class="col-md-4 m-2 px-4 profile-photo">
                            <input
                                type="file"
                                class="form-control item"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                             <button onClick={uploadImage}>Upload Profile Picture</button>
                        </div>
                        <div class=" col-md-6 m-2 px-4 box-text">
                            <h4>Joyce Thereza Akite</h4>
                            <p><b>Email:</b> joyceakite1@gmail.com</p>
                            <p><b>Age:</b> 27</p>
                            <p><b>Cohort:</b> 3</p>
                            <p><b>Facilitator:</b> Joyce Sandra Atim</p>
                            <p><b>Employment Status:</b> Looking for a job</p>

                            <div>
                                <Link to="progress">Results/Progress</Link>
                            </div>
                        </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default StudentProfile
