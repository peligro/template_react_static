import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../componentes/Header';
import Menu from '../componentes/Menu';
import Footer from '../componentes/Footer';
const Reportes = () => {
  return (
    <>
    <div className="wrapper">
		<Menu />

		<div className="main">
        <Header />
    <main className="content">
            <div className="container-fluid p-0">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" aria-current="page">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Reportes</li>
                    </ol>
                </nav>
                <h1 className="h3 mb-3"><i className="fas fa-file-excel" ></i> Reportes</h1>
                <div className="row">
                    <div className="col-12 col-lg-12  d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                                <a className="btn btn-outline-primary float-end" title="Crear" >
                                    <i className="fas fa-check"></i> Crear
                                </a>
                                <h5 className="card-title mb-0"> </h5>
                            </div>
                            <div className="card-body">
                                 <div className="table-responsive">
                                    <table className="table table-bordered table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Nombre</th> 
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          
                                           
                                        </tbody>
                                    </table>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
		</div>
	</div>  
    </>
  )
}

export default Reportes