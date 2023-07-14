// import React, { useState } from 'react';
// import axios from 'axios';

// const ProfileForm = () => {
//   const [profileData, setProfileData] = useState({

//     age: '',
//     email: '',
//     gender: '',
//     rank: '',
//     publishedBooks: '',
//     education: '',
//     experience: '',
//     languageCommand: '',
//     country: '',
//     dob: ''
//   });

//   const handleChange = (e) => {
//     setProfileData({
//       ...profileData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios
//       .post('http://localhost:8800/api/profile', profileData)
//       .then((response) => {
//         console.log(response.data);
//         // Reset form after successful submission
//         setProfileData({
//           age: '',
//           email: '',
//           gender: '',
//           rank: '',
//           publishedBooks: '',
//           education: '',
//           experience: '',
//           languageCommand: '',
//           country: '',
//           dob: ''
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div className="container mt-5" style={{ backgroundColor: 'white' , width: '50%' }}>
//   <h1 className="mb-4">Profile Information</h1>
//   <form onSubmit={handleSubmit}>
    
//   <div className="form-group">
//   <label htmlFor="picture">Picture:</label>
//   <img src="1.jpg" alt="pic??" className="img-fluid" />
// </div>


//     <div className="form-group">
//       <label htmlFor="age">Age:</label>
//       <input type="text" className="form-control form-control-sm" name="age" value={profileData.age} onChange={handleChange} />
//     </div>

//     <div className="form-group">
//       <label htmlFor="email">Email:</label>
//       <input type="email" className="form-control form-control-sm" name="email" value={profileData.email} onChange={handleChange} />
//     </div>

//     <div className="form-group">
//       <label htmlFor="gender">Gender:</label>
//       <input type="text" className="form-control form-control-sm" name="gender" value={profileData.gender} onChange={handleChange} />
//     </div>

//     <div className="form-group">
//       <label htmlFor="rank">Rank:</label>
//       <input type="text" className="form-control form-control-sm" name="rank" value={profileData.rank} onChange={handleChange} />
//     </div>

//     <div className="form-group">
//       <label htmlFor="publishedBooks">Published Books:</label>
//       <input type="text" className="form-control form-control-sm" name="publishedBooks" value={profileData.publishedBooks} onChange={handleChange} />
//     </div>

//     <div className="form-group">
//       <label htmlFor="education">Education:</label>
//       <input type="text" className="form-control form-control-sm" name="education" value={profileData.education} onChange={handleChange} />
//     </div>

//     <div className="form-group">
//       <label htmlFor="experience">Experience:</label>
//       <input type="text" className="form-control form-control-sm" name="experience" value={profileData.experience} onChange={handleChange} />
//     </div>

//     <div className="form-group">
//       <label htmlFor="languageCommand">Language Command:</label>
//       <input type="text" className="form-control form-control-sm" name="languageCommand" value={profileData.languageCommand} onChange={handleChange} />
//     </div>

//     <div className="form-group">
//       <label htmlFor="country">Country:</label>
//       <input type="text" className="form-control form-control-sm" name="country" value={profileData.country} onChange={handleChange} />
//     </div>

//     <div className="form-group">
//       <label htmlFor="dob">Date of Birth:</label>
//       <input type="text" className="form-control form-control-sm" name="dob" value={profileData.dob} onChange={handleChange} />
//     </div>

//     <button type="submit" className="btn btn-primary">Submit</button>
//   </form>
// </div>


//   );
// };

// export default ProfileForm;

import React, { useState } from 'react';
import axios from 'axios';

const ProfileForm = () => {
  const [profileData, setProfileData] = useState({
    age: '',
    email: '',
    gender: '',
    rank: '',
    publishedBooks: '',
    education: '',
    experience: '',
    languageCommand: '',
    country: '',
    dob: ''
  });

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8800/api/profile', profileData)
      .then((response) => {
        console.log(response.data);
        // Reset form after successful submission
        setProfileData({
          age: '',
          email: '',
          gender: '',
          rank: '',
          publishedBooks: '',
          education: '',
          experience: '',
          languageCommand: '',
          country: '',
          dob: ''
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
<div className="container mt-5">
  <h1 className="mb-4">Profile Information</h1>
  <form onSubmit={handleSubmit} className="row g-3">
    <div className="col-md-6">
      <label htmlFor="age" className="form-label">Age:</label>
      <input type="text" className="form-control form-control-sm" name="age" value={profileData.age} onChange={handleChange} />
    </div>

    <div className="col-md-6">
      <label htmlFor="email" className="form-label">Email:</label>
      <input type="email" className="form-control form-control-sm" name="email" value={profileData.email} onChange={handleChange} />
    </div>

    <div className="col-md-6">
      <label htmlFor="gender" className="form-label">Gender:</label>
      <input type="text" className="form-control form-control-sm" name="gender" value={profileData.gender} onChange={handleChange} />
    </div>

    <div className="col-md-6">
      <label htmlFor="rank" className="form-label">Rank:</label>
      <input type="text" className="form-control form-control-sm" name="rank" value={profileData.rank} onChange={handleChange} />
    </div>

    <div className="col-md-6">
      <label htmlFor="publishedBooks" className="form-label">Published Books:</label>
      <input type="text" className="form-control form-control-sm" name="publishedBooks" value={profileData.publishedBooks} onChange={handleChange} />
    </div>

    <div className="col-md-6">
      <label htmlFor="education" className="form-label">Education:</label>
      <input type="text" className="form-control form-control-sm" name="education" value={profileData.education} onChange={handleChange} />
    </div>

    <div className="col-md-6">
      <label htmlFor="experience" className="form-label">Experience:</label>
      <input type="text" className="form-control form-control-sm" name="experience" value={profileData.experience} onChange={handleChange} />
    </div>

    <div className="col-md-6">
      <label htmlFor="languageCommand" className="form-label">Language Command:</label>
      <input type="text" className="form-control form-control-sm" name="languageCommand" value={profileData.languageCommand} onChange={handleChange} />
    </div>

    <div className="col-md-6">
      <label htmlFor="country" className="form-label">Country:</label>
      <input type="text" className="form-control form-control-sm" name="country" value={profileData.country} onChange={handleChange} />
    </div>

    <div className="col-md-6">
      <label htmlFor="dob" className="form-label">Date of Birth:</label>
      <input type="text" className="form-control form-control-sm" name="dob" value={profileData.dob} onChange={handleChange} />
    </div>

    <div className="col-12">
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  </form>
</div>

  );
};

export default ProfileForm;


