const Drop = () => {
    
    return (
        <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
            <button className="btn btn-sm btn-light bg-white dropdown-toggle" type="button" id="dropdownMenuDate2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <i className="mdi mdi-calendar"></i> Today (10 Jan 2021)
            </button>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate2">
                <a className="dropdown-item" href="#">January - March</a>
                <a className="dropdown-item" href="#">March - June</a>
                <a className="dropdown-item" href="#">June - August</a>
                <a className="dropdown-item" href="#">August - November</a>
            </div>
        </div>
    )
}

export default Drop