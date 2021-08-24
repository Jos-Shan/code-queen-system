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
            <nav className="navbar navbar-expand-md navbar-dark">

                <a className="navbar-brand" href="#">
                    <img src="images/logo.png" alt="Code Queen Logo" className="logo" />
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="signup">Edit Details</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link"to="all-students">All Students</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="cover">
                <h1 className="page-title">Student's Profile </h1>

                <div className="heading">
                    <div class="row student-details">
                        <div>
                        {photo && (
                            <img src={photo} width="100" />
                        )} </div>
                        <div className="col-md-4 m-2 px-4 profile-photo">
                            <input
                                type="file"
                                className="form-control item"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                             <button onClick={uploadImage}>Upload Profile Picture</button>
                        </div>
                        <div className=" col-md-6 m-2 px-4 box-text">
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
