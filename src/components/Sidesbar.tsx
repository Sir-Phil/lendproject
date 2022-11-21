const Sidebar = () => {
    return(
        <div className="lend__sidebar">
            <div className="lend__select">
                <select name="lends" id="lends">
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>
            <div className="lend__dashboard">
            <h2>Dashboard</h2>
            </div>
            <div>
                <p>Customers</p>
            </div>
        </div>
    )
}

export default Sidebar