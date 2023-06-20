function InputSearch({ handleChange, handleSubmit }) {

    return (
        <div className="form-row row">
            <div className="col">
                <input type="text" name="beerName" onChange={handleChange} className="form-control" placeholder="Search Beer Name here" />
            </div>
            <div className="col">
                <button  onClick={handleSubmit} className="btn btn-primary" >search</button>
            </div>
        </div>
    )
}
export default InputSearch;