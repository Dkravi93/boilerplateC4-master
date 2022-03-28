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

  const [user, setUser] = useState(initialState)

  const handleChange = (e) => {
  
      const {name, value, checked,type} = e.target;
      value = (type === 'checkbox'? checked: value);
      setUser((p)=>({...p,[name]: value}))
  }
  const {username,password,city , technology , food ,movies ,culture, art, drama , image} = user;
  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={(e) => { }}>
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
        <select value={city} className="location"name= "city" onChange={(event) => { handleChange}}>
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
        <input type="checkbox" className="art" name="art" checked = {art} onChange={(event) => { handleChange}} />
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
      <form className="login" onSubmit={(e) => { }}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => { }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => { }}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
