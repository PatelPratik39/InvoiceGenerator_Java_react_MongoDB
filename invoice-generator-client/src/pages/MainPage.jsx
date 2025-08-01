import { Pencil } from 'lucide-react';
import {useContext, useState} from 'react'
import {AppContext} from '../context/AppContext.jsx';


const MainPage = () => {

  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const{invoiceTitle, setInvoiceTitle} = useContext(AppContext);
  
  const handleTitleChange = (e) => {
      const newTitle = e.target.value;
      setInvoiceTitle(newTitle);
  }

  const handleTitleEdit = () => {
    setInvoiceTitle(true)
  }

  const handleTitleBlur = () => {
    
  }

  return (
    <div>
      <div className="container-fluid bg-light min-vh-100 py-4">
        <div className="container">
          {/* titlebar */}
          <div className="bg-white border rounded shadow-sm p-3 mb-4">
            <div className='d-flex align-items-center'>
                {isEditingTitle ? (
                    <input type='text' className='form-control me-2' autoFocus/>
                ) : (
                  <>
                    <h5 className='mb-0 me-2'>{invoiceTitle}</h5>
                    <button className='btn btn-sm p-0 border-0 bg-transparent'>
                      <Pencil className='text-primary' size={20}/>
                    </button>
                  </>
                )}
            </div>

          </div>
          {/* Invoice Form and template grid */}
          <div className="row g-4 align-items-stretch">
            {/* Invoice form */}
              <div className="col-12 col-lg-6 d-flex">
                  <div className="bg-white border rounded shadow-sm p-4 w-100">
                        invoice form
                  </div>
              </div>
            {/* Invoice grid */}
            <div className="col-12 col-lg-6 d-flex">
                <div className="bg-white border rounded shadow-sm p-4 w-100">
                    template grid
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
