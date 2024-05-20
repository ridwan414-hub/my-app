import { useEffect, useState } from 'react'
import axios from 'axios'
function SecondForm() {
    const [divisionInputValue, setDivisionInputValue] = useState('')
    const [districtInputValue, setDistrictInputValue] = useState('')
    const [upazillaInputValue, setUpazillaInputValue] = useState('')
    const [unionInputValue, setUnionInputValue] = useState('')

    const [division, setDivision] = useState('')
    const [divisions, setDivisions] = useState([])
    const [divisionId, setDivisionId] = useState([])

    const [district, setDistrict] = useState('')
    const [districts, setDistricts] = useState([])
    const [districtId, setDistrictId] = useState([])

    const [upazilla, setUpazilla] = useState('')
    const [upazillas, setUpazillas] = useState([])
    const [upazillaId, setUpazillaId] = useState([])

    const [union, setUnion] = useState('')
    const [unions, setUnions] = useState([])

    const getAllDivision = async () => {
        const { data } = await axios.get('https://raw.githubusercontent.com/My5t-404/bangladesh-geocode/master/divisions/divisions.json?fbclid=IwAR0orZZiNG2Gs_owJ_5gkiUSS_mBrHovXbjZp_0x58OiXGxDi68VvimsWkU')
        setDivisions(data)
    }
    const getAllDistrict = async () => {
        const { data } = await axios.get('https://raw.githubusercontent.com/My5t-404/bangladesh-geocode/master/districts/districts.json')
        setDistricts(data)
    }
    const getAllUpazilla = async () => {
        const { data } = await axios.get('https://raw.githubusercontent.com/My5t-404/bangladesh-geocode/master/upazilas/upazilas.json')
        setUpazillas(data)
    }
    const getAllUnion = async () => {
        const { data } = await axios.get('https://raw.githubusercontent.com/My5t-404/bangladesh-geocode/master/unions/unions.json')
        setUnions(data)
    }


    useEffect(() => {
        getAllDivision()
        getAllDistrict()
        getAllUpazilla()
        getAllUnion()
    }, [])
    const handleDivisionInput = (e) => {
        e.preventDefault()
        setDivision(e.target.value)
        setDivisionInputValue(e.target.value)
    }
    const handleDistrictInput = (e) => {
        e.preventDefault()
        setDistrict(e.target.value)
        setDistrictInputValue(e.target.value)
    }
    const handleUpazillaInput = (e) => {
        e.preventDefault()
        setUpazilla(e.target.value)
        setUpazillaInputValue(e.target.value)
    }
    const handleUnionInput = (e) => {
        e.preventDefault()
        setUnion(e.target.value)
        setUnionInputValue(e.target.value)
    }
    const filteredDivision = divisions.filter((d) =>
        d.name.toLowerCase().includes(divisionInputValue.toLowerCase())
    );
    const filteredDistrict = districts.filter((d) =>
      d.division_id===divisionId &&  d.name.toLowerCase().includes(districtInputValue.toLowerCase())
    );
    const filteredUpazilla = upazillas.filter((d) =>
        d.district_id === districtId && d.name.toLowerCase().includes(upazillaInputValue.toLowerCase())
    );
    const filteredUnion = unions.filter((d) =>
        d.upazilla_id === upazillaId && d.name.toLowerCase().includes(unionInputValue.toLowerCase())
    );

    return (
        <div className="bodies">
            <form>
                <div className="container">
                    <h3>Management Signup</h3>
                    <div className="select_option">
                        <label htmlFor="fname" className="form-label">Search Division <span className="text-danger">*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            value={division}
                            onChange={handleDivisionInput}
                        />
                        {divisionInputValue &&
                            <div className="list-group">
                                {filteredDivision.map((d, i) =>
                                    < button
                                        type="button" className="list-group-item list-group-item-action" aria-current="true"
                                        key={i}
                                        onClick={() => {
                                            setDivision(d.name)
                                            setDivisionId(d.id)
                                            setDivisionInputValue('')
                                        }}
                                    >
                                        {d.name}
                                    </button>)}

                            </div>
                        }
                    </div>
                    <div className="select_option">
                        <label htmlFor="fname" className="form-label">Search District <span className="text-danger">*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            value={district}
                            onChange={handleDistrictInput}
                        >
                        </input>
                        {districtInputValue &&
                            <div className="list-group">

                                {filteredDistrict.map((d, i) =>
                                    < button
                                        type="button" className="list-group-item list-group-item-action" aria-current="true"
                                        key={i}
                                        onClick={() => {
                                            setDistrict(d.name)
                                            setDistrictId(d.id)
                                            setDistrictInputValue('')
                                        }}
                                    >{d.name}</button>)}

                            </div>
                        }
                    </div>
                    <div className="select_option">
                        <label htmlFor="fname" className="form-label">Search Upazilla<span className="text-danger">*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            value={upazilla}
                            onChange={handleUpazillaInput}
                        >
                        </input>
                        {upazillaInputValue &&
                            <div className="list-group">

                                {filteredUpazilla.map((d, i) =>
                                    < button
                                        type="button" className="list-group-item list-group-item-action" aria-current="true" defaultValue={false}
                                        key={i}
                                        onClick={() => {
                                            setUpazilla(d.name)
                                            setUpazillaId(d.id)
                                            setUpazillaInputValue('')
                                        }}
                                    >{d.name}</button>)}

                            </div>
                        }
                    </div>
                    <div className="select_option">
                        <label htmlFor="fname" className="form-label">Search Union <span className="text-danger">*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            value={union}
                            onChange={handleUnionInput}
                        >
                        </input>
                        {unionInputValue &&
                            <div className="list-group">

                                {filteredUnion.map((d, i) =>
                                    < button
                                        type="button" className="list-group-item list-group-item-action" aria-current="true" defaultValue={false}
                                        key={i}
                                        onClick={() => {
                                            setUnion(d.name)
                                            setUnionInputValue('')
                                        }}
                                    >{d.name}</button>)}

                            </div>
                        }
                    </div>
                </div>
            </form>
        </div>

    );
}

export default SecondForm;
