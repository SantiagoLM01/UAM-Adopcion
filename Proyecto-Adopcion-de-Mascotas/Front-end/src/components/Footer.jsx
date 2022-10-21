import { Link } from "react-router-dom"
const Footer = ({ year }) => {
    return (
        <>

            <footer className="text-center text-lg-start bg-green">
                <div className='container'>
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom ">

                        <div className="me-5  d-lg-block">
                            <p className="m-0 text-white">Get connected with us on social networks: </p>
                            <div><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="50" height="50" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x="4" y="4" width="16" height="16" rx="4" />
                                <circle cx="12" cy="12" r="3" />
                                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                            </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="50" height="50" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="50" height="50" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                    <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                                </svg>
                            </div>
                        </div>

                        <div>

                        </div>

                    </section>

                    <section className="">
                        <div className="container text-center text-md-start mt-5 text-white">

                            <div className="row mt-3 d-flex justify-content-evenly">

                                <div className="col-md-3 col-lg-4 col-xl-3 mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4">
                                        <i className=""></i>Company name
                                    </h6>
                                    <p className="text-white ">
                                        <Link to='/nosotros' className="text-reset text-decoration-none link">Nosotros</Link>
                                    </p>
                                    <Link to='/mascotas 'className="text-reset text-decoration-none link">Mascotas</Link>
                                </div>




                                <div className="col-md-4 col-lg-3 col-xl-3 text-white mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4">Contactanos</h6>
                                    <p className="text-white"><i className=""></i> Costa Rica, San José</p>
                                    <p className="text-white">
                                        uamofficial@hotmail.com
                                    </p>
                                    <p className="text-white"><i className=""></i> + 506 8313-1714</p>
                                </div>

                            </div>

                        </div>
                    </section>

                    <div className="text-center p-4 text-white">
                        © {year} Copyright:
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer