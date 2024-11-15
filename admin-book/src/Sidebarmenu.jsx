import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
function Sidebarmenu({children}) {
    return (
        <div className="container-fluid d-flex">
            <div className="row bg-dark" style={{ width: '20%' }} >
                <div className='bg-dark min-vh-100 col'>
                    <div>
                        <a className='text-decoration-none text-white d-flex align-itemcenter ms-3 mt-2'>
                            <i className=' fs-4 bi bi-speedometer'></i>
                            <span className='ms-1 fs-4'><h3>Book Store</h3></span>
                        </a>
                        <hr className='text-secondry' />
                        <ul className='nav nav-pills flex-column'>
                            <li className = 'nav-item text-white fs-4 my-1'>
                                <a href ='/books' className='nav-link text-white fs-5' aria-current="page">
                                    <i className='bi bi-speedometer2'></i>
                                    <span className='ms-2'>Manage Book</span>
                                </a>
                            </li>
                            <li className = 'nav-item text-w000000000000000000000000hite fs-4 my-1'>
                                <a href='/dashboard' className='nav-link text-white fs-5' aria-current="page">
                                    <i className='bi bi-house'></i>
                                    <span className='ms-2'>Dashboard</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <main style={{ width: '100%',margin:'20px' }}>{children}</main>
            
        </div>
    )
}

export default Sidebarmenu