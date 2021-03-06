import { useEffect, useState } from "react"

const Card = () => {

    // init states :
    const [data, setData] = useState([])

    // post new data :
    const postData = async () => {
        
    }

    useEffect(() => {
        // our render functions :
    }, [])

    return (
        <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card tale-bg">
                    <div className="card-people mt-auto">
                        <img src="assets/images/dashboard/people.svg" alt="people" />
                        <div className="weather-info">
                            <div className="d-flex">
                                <div>
                                    <h2 className="mb-0 font-weight-normal"><i class="icon-sun mr-2"></i>31<sup>C</sup></h2>
                                </div>
                                <div className="ml-2">
                                    <h4 className="location font-weight-normal">Essaouira</h4>
                                    <h6 className="font-weight-normal">Morocco</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 grid-margin transparent">
                <div className="row">
                    <div className="col-md-6 mb-4 stretch-card transparent">
                        <div className="card card-tale">
                            <div className="card-body">
                                <p className="mb-4">Today’s Bookings</p>
                                <p className="fs-30 mb-2">4006</p>
                                <p>10.00% (30 days)</p>
                            </div>
                        </div>
                    </div>
                <div className="col-md-6 mb-4 stretch-card transparent">
                    <div className="card card-dark-blue">
                        <div className="card-body">
                            <p className="mb-4">Total Bookings</p>
                            <p className="fs-30 mb-2">61344</p>
                            <p>22.00% (30 days)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                <div class="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                  <div class="card card-light-blue">
                    <div class="card-body">
                      <p class="mb-4">Number of Meetings</p>
                      <p class="fs-30 mb-2">34040</p>
                      <p>2.00% (30 days)</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 stretch-card transparent">
                  <div class="card card-light-danger">
                    <div class="card-body">
                      <p class="mb-4">Number of Clients</p>
                      <p class="fs-30 mb-2">47033</p>
                      <p>0.22% (30 days)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Card