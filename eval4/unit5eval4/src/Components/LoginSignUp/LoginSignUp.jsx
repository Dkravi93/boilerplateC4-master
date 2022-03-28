import axios from "axios";
import { useState, useEffect } from "react";
export const LoginSignUp = () => {
  const initialState = {
    username: '',
    password: '',
    city : '',
    technology : '',
    food : '',
    movies : '',
    culture: '',
    art: '',
    drama : '',
    image: '',
  }

  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
  
      let {name, value, checked,type} = e.target;
      value = (type === 'checkbox'? checked: value);
      setUser((p)=>({...p,[name]: value}))
  }
  const {username,password,city , technology , food ,movies ,culture, art, drama , image} = user;

  const handleSubmit = (e) =>{
    e.preventDefault();
    localStorage.setItem('user',JSON.stringify(user));
  }
  const [log,setLog] = useState({
    userName : '',
    passWord : '',
  })
 const handle_login = (e) =>{
    let {name, value} = e.target;
    setLog((p)=>({
      ...p, [name]: value
    }))
 }
  const {userName,passWord} = log;
 const handleLogin = (e) =>{

      e.preventDefault();
      const logger = JSON.parse(localStorage.getItem("user"));

      (logger.username == userName && logger.password == passWord)?(alert("LoggedIn Sucessfully")): (alert("Invalid Credential"))
 }

  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={handleSubmit}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          name="username"
          value={username}
          onChange={handleChange}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          name= "password"
          value= {password}
          onChange={handleChange}
          required
        />
        <br />
        <select value={city} className="location"name= "city" onChange={handleChange}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology"
          name= "technology"
          checked= {technology}
          onChange={handleChange}
        />
        <br />
        <label>food</label>
        <input type="checkbox" className="food" name="food" checked = {food} onChange={handleChange} />
        <br />
        <label>movies</label>
        <input type="checkbox" className="movies" name="movies" checked = {movies} onChange={handleChange} />
        <br />
        <label>culture</label>
        <input type="checkbox" className="culture" name="culture" checked = {culture} onChange={handleChange} />
        <br />
        <label>art</label>
        <input type="checkbox" className="art" name="art" checked = {art} onChange={ handleChange} />
        <br />
        <label>drama</label>
        <input type="checkbox" className="drama" name="drama" checked = {drama} onChange={handleChange} />
        <br />
        <label>image</label>
        <input
          type="file"
          className="image"
          name="image"
          value={image}
          onChange={handleChange}
          required
        />
        <br />
        <input type="submit" value ="Submit" className="submitSignUpForm" />
      </form>
      <form className="login" onSubmit={handleLogin}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          name= "userName"
          onChange={handle_login}
          required
        />
        <br />
        <label>password</label>
        <input
          type="passord"
          className="password"
          name= "passWord"
          onChange={handle_login}
          required
        />
        <br />
        <input type="submit" value="Submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
