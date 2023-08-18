import React from 'react';
import { MDBFooter} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter className='text-center text-dark' style={{ backgroundColor: '#42777c', marginTop: '60px', height: '50px'}}>
      <div className='text-center p-3' style={{ backgroundColor: '#42777c', textAlign: 'center', fontSize: '20px', fontWeight: 'bold', color:'white', padding: '13px'}}>
        Gracias por elegirnos día a día.
      </div>
    </MDBFooter>
  );
};

export default Footer;
