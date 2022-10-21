
const Form = () => {
    return (
        <>
            <form className="row g-3 shadow p-3 mb-5 bg-white rounded">
                <h1>Contáctanos</h1>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
               
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Dirección:</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Mensaje:</label>
                    <textarea className="form-control" name="" id="" cols="30" rows="5"></textarea>
                    {/* <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" /> */}
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Ciudad</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label"></label>
                    <select id="inputState" className="form-select mt-2">
                        <option defaultValue={'Choose...'} disabled>Provincia</option>
                        <option>San José</option>
                        <option>Limon</option>
                        <option>Guanacaste</option>
                        <option>Puntarenas</option>
                        <option>Cartago</option>
                        <option>Alajuela</option>
                        <option>Heredia</option>



                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Codigo Postal:</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Recibir Notificaciones
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>

        </>

    )
}

export default Form