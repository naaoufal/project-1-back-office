const Graph3 = () => {
    return (
        <div className="card position-relative">
            <div className="card-body">
                <div id="detailedReports" className="carousel slide detailed-report-carousel position-static pt-2" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-md-12 col-xl-3 d-flex flex-column justify-content-start">
                                    <div className="ml-xl-4 mt-3">
                                        <p className="card-title">Detailed Reports</p>
                                        <h1 className="text-primary">$34040</h1>
                                        <h3 className="font-weight-500 mb-xl-4 text-primary">North America</h3>
                                        <p className="mb-2 mb-xl-0">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                                    </div>  
                                </div>
                            <div className="col-md-12 col-xl-9">
                            <div className="row">
                                <div className="col-md-6 border-right">
                                    <div className="table-responsive mb-3 mb-md-0 mt-3">
                                        <table className="table table-borderless report-table">
                                            <tr>
                                                <td className="text-muted">Illinois</td>
                                                <td className="w-100 px-0">
                                                    <div className="progress progress-md mx-4">
                                                        {/* <div className="progress-bar bg-primary" role="progressbar" style={{"width: 70%", aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"}}></div> */}
                                                    </div>
                                                </td>
                                                <td><h5 className="font-weight-bold mb-0">713</h5></td>
                                            </tr>
                                            <tr>
                                                <td className="text-muted">Washington</td>
                                                <td className="w-100 px-0">
                                                    <div className="progress progress-md mx-4">
                                                        {/* <div className="progress-bar bg-warning" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div> */}
                                                    </div>
                                                </td>
                                                <td><h5 className="font-weight-bold mb-0">583</h5></td>
                                            </tr>
                                            <tr>
                                                <td className="text-muted">Mississippi</td>
                                                <td className="w-100 px-0">
                                                    <div className="progress progress-md mx-4">
                                                        {/* <div className="progress-bar bg-danger" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div> */}
                                                    </div>
                                                </td>
                                                <td><h5 className="font-weight-bold mb-0">924</h5></td>
                                            </tr>
                                            <tr>
                                                <td className="text-muted">California</td>
                                                <td className="w-100 px-0">
                                                    <div className="progress progress-md mx-4">
                                                        {/* <div className="progress-bar bg-info" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div> */}
                                                    </div>
                                                </td>
                                                <td><h5 className="font-weight-bold mb-0">664</h5></td>
                                            </tr>
                                            <tr>
                                                <td className="text-muted">Maryland</td>
                                                <td className="w-100 px-0">
                                                    <div className="progress progress-md mx-4">
                                                        {/* <div className="progress-bar bg-primary" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div> */}
                                                    </div>
                                                </td>
                                                <td><h5 className="font-weight-bold mb-0">560</h5></td>
                                            </tr>
                                            <tr>
                                                <td className="text-muted">Alaska</td>
                                                <td className="w-100 px-0">
                                                    <div className="progress progress-md mx-4">
                                                        {/* <div className="progress-bar bg-danger" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div> */}
                                                    </div>
                                                </td>
                                                <td><h5 className="font-weight-bold mb-0">793</h5></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <canvas id="north-america-chart"></canvas>
                                    <div id="north-america-legend"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row">
                        <div className="col-md-12 col-xl-3 d-flex flex-column justify-content-start">
                            <div className="ml-xl-4 mt-3">
                                <p className="card-title">Detailed Reports</p>
                                <h1 className="text-primary">$34040</h1>
                                <h3 className="font-weight-500 mb-xl-4 text-primary">North America</h3>
                                <p className="mb-2 mb-xl-0">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                            </div>  
                        </div>
                        <div className="col-md-12 col-xl-9">
                            <div className="row">
                                <div className="col-md-6 border-right">
                                    <div className="table-responsive mb-3 mb-md-0 mt-3">
                                        <table className="table table-borderless report-table">
                                            <tr>
                                                <td className="text-muted">Illinois</td>
                                                <td className="w-100 px-0">
                                                    <div className="progress progress-md mx-4">
                                                        {/* <div className="progress-bar bg-primary" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div> */}
                                                    </div>
                                                </td>
                                                <td><h5 className="font-weight-bold mb-0">713</h5></td>
                                            </tr>
                                            <tr>
                                                <td className="text-muted">Somaly</td>
                                                <td className="w-100 px-0">
                                                    <div className="progress progress-md mx-4">
                                                        {/* <div className="progress-bar bg-warning" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div> */}
                                                    </div>
                                                </td>
                                                <td><h5 className="font-weight-bold mb-0">583</h5></td>
                                            </tr>
                                            <tr>
                                                <td className="text-muted">Congo</td>
                                                <td className="w-100 px-0">
                                                    <div className="progress progress-md mx-4">
                                                        {/* <div className="progress-bar bg-danger" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div> */}
                                                    </div>
                                                </td>
                                                <td><h5 className="font-weight-bold mb-0">924</h5></td>
                                            </tr>
                                            <tr>
                                                <td className="text-muted">Morocco</td>
                                                <td className="w-100 px-0">
                                                    <div className="progress progress-md mx-4">
                                                        {/* <div className="progress-bar bg-info" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div> */}
                                                    </div>
                                                </td>
                                                <td><h5 className="font-weight-bold mb-0">664</h5></td>
                                            </tr>
                                            <tr>
                                      <td className="text-muted">Egypt</td>
                                      <td className="w-100 px-0">
                                        <div className="progress progress-md mx-4">
                                          {/* <div className="progress-bar bg-primary" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div> */}
                                        </div>
                                      </td>
                                      <td><h5 className="font-weight-bold mb-0">560</h5></td>
                                    </tr>
                                    <tr>
                                      <td className="text-muted">Algeria</td>
                                      <td className="w-100 px-0">
                                        <div className="progress progress-md mx-4">
                                          {/* <div className="progress-bar bg-danger" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div> */}
                                        </div>
                                      </td>
                                      <td><h5 className="font-weight-bold mb-0">793</h5></td>
                                    </tr>
                                  </table>
                                </div>
                              </div>
                              <div className="col-md-6 mt-3">
                                <canvas id="south-america-chart"></canvas>
                                <div id="south-america-legend"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#detailedReports" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#detailedReports" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
            </div>
        </div>
    )
}

export default Graph3