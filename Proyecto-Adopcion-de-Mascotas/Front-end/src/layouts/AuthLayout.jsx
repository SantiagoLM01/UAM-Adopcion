
const AuthLayout = ({ children, pagina}) => {


    return (

        <div className="limiter bg-green">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
                        <span className="login100-form-title">
                            {pagina}
                        </span>
                        {children}
                    </form>
                </div>
            </div>
        </div>

    )
}

export default AuthLayout