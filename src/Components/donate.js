import React from 'react'
import { CardBody, Card } from 'reactstrap'
import thakyou from './../Images/thankyou.gif'
export default function Donate() {
  return (
    <div>
      <section className=' donate bg-light'>
        <hr />
        <div className='container'>
          <div className='row row-content containers bg-white'>
            <div className='col-md-6 col-sm-12 '>
              <h1 className='text-center font-weight-bold'>
                100% of your money help to eradicate poverty
              </h1>
              <p className='text-center font-weight-bold'>Thank You</p>
              <hr className='text-center font-weight-bold bg-warning hr'></hr>
              <img src={thakyou} alt='sedi' class='img-fluid shadow ' />
            </div>
            <div className='col-md-6 col-sm-12 '>
              <Card className='bg-light h2'>
                <CardBody>
                  <h1 className='display-4 text-success font-weight-bold'>
                    Fund a project
                  </h1>
                  <p className='font-size-lg'>Mobile Money: (+250) 783656633</p>
                  <p className='font-size-lg'>
                    Bank Account:
                    <ol>
                      <li>
                        <span className='font-weight-bold'>Cogebanque: </span>
                        006 1390111800 77 - IRERERO NURSERY SCHOOl
                      </li>
                      <li>
                        <span className='font-weight-bold'>Cogebanque: </span>
                        003 01390243466 02 - SEDI RWANDA
                      </li>
                    </ol>
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
