import { useEffect, useState } from 'react'
import axios from 'axios'
import SecondForm from './secondForm'

function App() {
  const [division, setDivision] = useState([])
  const [divisionId, setDivisionId] = useState([])
  const [district, setDistrict] = useState([])
  const [districtId, setDistrictId] = useState([])
  const [upazilla, setUpazilla] = useState([])
  const [upazillaId, setUpazillaId] = useState([])
  const [union, setUnion] = useState([])

  const getAllDivision = async () => {
    const { data } = await axios.get('https://raw.githubusercontent.com/My5t-404/bangladesh-geocode/master/divisions/divisions.json?fbclid=IwAR0orZZiNG2Gs_owJ_5gkiUSS_mBrHovXbjZp_0x58OiXGxDi68VvimsWkU')
    setDivision(data)
  }
  const getAllDistrict = async () => {
    const { data } = await axios.get('https://raw.githubusercontent.com/My5t-404/bangladesh-geocode/master/districts/districts.json')
    setDistrict(data)
  }
  const getAllUpazilla = async () => {
    const { data } = await axios.get('https://raw.githubusercontent.com/My5t-404/bangladesh-geocode/master/upazilas/upazilas.json')
    setUpazilla(data)
  }
  const getAllUnion = async () => {
    const { data } = await axios.get('https://raw.githubusercontent.com/My5t-404/bangladesh-geocode/master/unions/unions.json')
    setUnion(data)
  }


  useEffect(() => {
    getAllDivision()
    getAllDistrict()
    getAllUpazilla()
    getAllUnion()
  }, [])

  return (
    <>
      <SecondForm />
      <div className="bodies2">
        {divisionId}
        <form>
          <div className="container">
            <h3>Management Signup</h3>
            <div className="select_option">
              <label htmlFor="fname" className="form-label">Select Division <span className="text-danger">*</span></label>
              <select
                className="form-select division"
                style={{ marginTop: 0 }}
                placeholder='Select Division'
                aria-label="Select Division" name="division"
                onChange={(e) => {
                  e.preventDefault()
                  setDivisionId(e.target.value)
                }}
              >
                <option selected disabled>Select Division</option>
                {division.map((d, i) => <option key={i} value={d.id}  >{d.name}</option>)}
              </select>
              <label htmlFor="fname" style={{ marginTop: 10 }} className="form-label">Select District <span className="text-danger">*</span></label>
              <select className="form-select district" style={{ marginTop: 0 }} aria-label="Select District" name="district" id="districtSelect"
                onChange={(e) => {
                  e.preventDefault()
                  setDistrictId(e.target.value)
                }}
              >
                <option selected disabled>Select District</option>
                {district.filter(d => d.division_id === divisionId).map((d, i) => <option key={i} value={d.id}>{d.name}</option>)}
              </select>
              <label htmlFor="upazillaSelect" style={{ marginTop: 10 }} className="form-label">Select Upazila/ Thana <span className="text-danger">*</span></label>
              <div className="input-group">
                <select className="form-select district" style={{ marginTop: 0 }} aria-label="Select Upazila/ Thana" name="upazilla" id="upazillaSelect"
                  onChange={(e) => {
                    e.preventDefault()
                    setUpazillaId(e.target.value)
                  }}
                >
                  <option selected disabled>Select Upazilla</option>
                  {upazilla.filter(d => d.district_id === districtId).map((d, i) => <option key={i} value={d.id}>{d.name}</option>)}
                </select>
                <button type="button" style={{ padding: 10, margin: 0, border: '1px solid black' }} className="btn btn-primary" id="toggleButton">+</button>
              </div>
              <input className="form-control extrainfo" style={{ marginTop: 5, display: 'none' }} type="text" id="extra_upazilla" placeholder="Type Your Upazila/ Thana" name="upazilla" required disabled />
              <label htmlFor="fname" style={{ marginTop: 10 }} className="form-label"
                onChange={(e) => {
                  e.preventDefault()
                  setUnion(e.target.value)
                }}
              >Select Union/ Word No. <span className="text-danger">*</span></label>
              <div className="input-group">
                <select className="form-select district" style={{ marginTop: 0 }} aria-label="Select Upazilla" name="union" id="unionSelect">
                  <option selected disabled>Select Union</option>
                  {union.filter(d => d.upazilla_id === upazillaId).map((d, i) => <option key={i} value={d.id}>{d.name}</option>)}
                </select>
                <button type="button" style={{ padding: 10, margin: 0, border: '1px solid black' }} className="btn btn-primary" id="toggleButton1">+</button>
              </div>
              <input className="form-control extrainfo" style={{ marginTop: 5, display: 'none' }} type="text" id="extra_union" placeholder="Type Your Union/ Word No" name="union" required disabled />
            </div>
            <div>
              <label htmlFor="fname" style={{ marginTop: 10 }} className="form-label">Address <span className="text-danger">*</span></label>
              <input className="form-control extrainfo" style={{ marginTop: 0 }} type="text" placeholder="Village/Others Address" name="address" aria-label="default input example" required /></div>
            <label htmlFor="fname" style={{ marginTop: 10 }} className="form-label">Blood Group <span className="text-danger">*</span></label>
            <select className="form-select extrainfo" style={{ marginTop: 0 }} aria-label="blood group" name="blood" required>
              <option disabled>Blood Group</option>
              <option>A +</option>
              <option>A -</option>
              <option>B +</option>
              <option>B -</option>
              <option>O +</option>
              <option>O -</option>
              <option>AB +</option>
              <option>AB -</option>
            </select>
            <div className="mb-3 my-3">
              <label htmlFor="fname" className="form-label">First Name: <span className="text-danger">*</span></label>
              <input className="form-control extrainfo" style={{ marginTop: 0 }} type="text" id="fname" name="fname" required />
            </div>
            <div className="mb-3">
              <label htmlFor="lname" className="form-label">Last Name: <span className="text-danger">*</span></label>
              <input className="form-control extrainfo" style={{ marginTop: 0 }} type="text" id="lname" name="lname" required />
            </div>
            <div className="mb-3">
              <label htmlFor="number" className="form-label">Mobile No.: <span className="text-danger">*</span></label>
              <input className="form-control extrainfo" style={{ marginTop: 0 }} type="text" id="number" name="number" maxLength={11} required />
            </div>
            <div className="mb-3">
              <label htmlFor="nid" className="form-label">NID NO: <span className="text-danger">*</span></label>
              <input className="form-control extrainfo" style={{ marginTop: 0 }} type="text" id="nid" name="nid" maxLength={17} required />
            </div>
            <div className="mb-3">
              <label htmlFor="birthdate" className="form-label">Date of Birth: <span className="text-danger">*</span></label>
              <div className="row">
                <div className="col">
                  <select className="form-select" aria-label="Day" name="day" id="dateday" required>
                    <option disabled>Day</option>
                  </select>
                </div>
                <div className="col">
                  <select className="form-select" aria-label="month" name="month" id="datemonth" required>
                    <option disabled>Month</option>
                  </select>
                </div>
                <div className="col">
                  <select className="form-select" aria-label="year" name="year" id="dateyear" required>
                    <option disabled>Year</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-3"><label htmlFor="acc" className="form-label">Account No: <span className="text-danger">*</span></label>
              <input className="form-control extrainfo" type="text" style={{ marginTop: 0 }} id="acc" name="acc" maxLength={30} required />
            </div>
            <div className="mb-3"><label htmlFor="branch" className="form-label">Branch Name: <span className="text-danger">*</span></label>
              <input className="form-control extrainfo" type="text" style={{ marginTop: 0 }} id="branch" name="branch" required />
            </div>
            <div className="mb-3"><label htmlFor="refferby" className="form-label">Reffer User ID: <span className="text-danger">*</span></label>
              <input className="form-control extrainfo" type="text" style={{ marginTop: 0 }} id="refferby" name="refferby" defaultValue="{{username}}" required />
            </div>
            <div className="mb-3"><label htmlFor="username" className="form-label">My User ID: <span className="text-danger">*</span></label>
              <input className="form-control extrainfo" type="text" style={{ marginTop: 0 }} id="username" name="username" required />
            </div>
            <div className="mb-3"><label htmlFor="pass1" className="form-label">Password: <span className="text-danger">*</span></label>
              <input className="form-control extrainfo" type="text" style={{ marginTop: 0 }} id="pass1" name="pass1" required />
            </div>
            <div className="mb-3"><label htmlFor="pass2" className="form-label">Confirm Password: <span className="text-danger">*</span></label>
              <input className="form-control extrainfo" type="text" style={{ marginTop: 0 }} id="pass2" name="pass2" required />
            </div>
            <div className="mb-3"><label htmlFor="email" className="form-label">Email:</label>
              <input className="form-control extrainfo" type="email" style={{ marginTop: 0 }} id="email" name="email" />
            </div>
            <input type="file" className="form-control extrainfo" style={{ marginTop: 0 }} id="profileImage" name="profileImage" accept="image/*" required />
            <div className="button"><button className="btn btn-warning" type="submit">Submit</button></div>
            <div style={{ marginTop: 25 }}>
              <h3 style={{ fontSize: 17 }}>Go Back to Home Page -- <a href="/"><b>Click Here</b></a></h3>
              <h3 style={{ fontSize: 17 }}>Have an account? -- <a href="/login"><b>Login Here</b></a></h3>
            </div>
          </div>
        </form>
      </div>
    </>

  );
}

export default App;
