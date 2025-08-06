import { Pencil } from 'lucide-react';
import {useContext, useState} from 'react'
import {AppContext} from '../context/AppContext.jsx';
import InvoiceForm from '../components/InvoiceForm.jsx';
import TemplateGrid from '../components/TemplateGrid.jsx';


const MainPage = () => {

  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const { invoiceTitle, setInvoiceTitle } = useContext(AppContext);

  const handleTitleEdit = () => {
    setInvoiceTitle("");
    setIsEditingTitle(true);
  };
  
  const handleTitleChange = (e) => {
    setInvoiceTitle(e.target.value);
  };
  
  const handleTitleBlur = () => {
    setIsEditingTitle(false);
  };
  

  return (
    <div>
      <div className="mainpage container-fluid bg-light min-vh-100 py-4">
        <div className="container">
          {/* titlebar */}
          <div className="bg-white border rounded shadow-sm p-3 mb-4">
            <div className='d-flex align-items-center'>
                {isEditingTitle ? (
                    <input type='text' className='form-control me-2' autoFocus onBlur={handleTitleBlur} onChange={handleTitleChange} value={invoiceTitle} onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleTitleBlur();
                      }
                    }}/>
                ) : (
                  <>
                    <h5 className='mb-0 me-2'>{invoiceTitle}</h5>
                    <button className='btn btn-sm p-0 border-0 bg-transparent' onClick={handleTitleEdit}>
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
                        <InvoiceForm />
                  </div>
              </div>
            {/* Invoice grid */}
            <div className="col-12 col-lg-6 d-flex">
                <div className="bg-white border rounded shadow-sm p-4 w-100">
                    <TemplateGrid />
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
