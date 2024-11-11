import React from 'react'

const Login = () => {
  return (
    <>
    <main className="d-flex w-100">
    <div className="container d-flex flex-column">
        <div className="row vh-100">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                <div className="d-table-cell align-middle">

                    <div className="text-center mt-4">
                        <h1 className="h2">Cobranzas Flaites</h1>
                        <p className="lead">
                            Desarrollado con Spring Boot 3 y React 18
                        </p>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <div className="m-sm-4">
                                <div className="text-center">
                                    <img src="/img/logo.svg" alt="Peligro Gastos" className="img-fluid rounded-circle" width="132" height="132" />
                                </div>
                                <form method="post" name="form" id="form">
                                    <div className="mb-3">
                                        <label className="form-label">E-Mail</label>
                                        <input className="form-control form-control-lg" type="email" name="email"  placeholder="E-Mail" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Contraseña</label>
                                        <input className="form-control form-control-lg" type="password" name="password" id="password" 
                                          placeholder="Contraseña" />
            
                                    </div>
                                   
                                    <div className="text-center mt-3">
                                        
                                        <button type="submit"  className="btn btn-lg btn-primary" title="Entrar" id="boton"> <i className="fas fa-lock-open"></i> Entrar</button> 
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</main>
    </>
  )
}

export default Login