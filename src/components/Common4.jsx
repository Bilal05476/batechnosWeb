import React from 'react';
import {NavLink} from 'react-router-dom';

const Common4 = (props) => {
  return (
    <> 
    <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-10 mx-auto">
                    <div className="row">
                        <div className="col-md-8 pt-5 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center flex-column">
                            <h1>
                                {props.name}
                            </h1>
                            <h6 className="my-3 desc">{props.data}</h6>
                            <strong>{props.note}</strong>
                            <p>{props.tools}</p>
                            <strong>{props.note2}</strong>
                            <ul>
                                <li>{props.lname1}</li>
                                <li>{props.lname2}</li>
                                <li>{props.lname3}</li>
                                <li>{props.lname4}</li>
                                <li>{props.lname5}</li>
                                <li>{props.lname6}</li>
                                <li>{props.lname7}</li>
                                <li>{props.lname8}</li>
                                <li>{props.lname9}</li>
                                <li>{props.lname10}</li>
                                <li>{props.lname11}</li>
                                <li>{props.lname12}</li>
                                <li>{props.lname13}</li>
                                <li>{props.lname14}</li>
                                <li>{props.lname15}</li>
                            </ul>
                            <p>{props.result}</p>
                            <strong className='bg-warning text-dark host'>{props.dehost}</strong>
                            <div className="mt-3"> <NavLink className="btn-get-started" to={props.visit}> {props.btname}</NavLink></div> 
                        </div>
                        <div className='col-lg-4 order-lg-2 header-img-4 pt-3 '>
                            <img src={props.imgsrc} className='img-fluid animated ' alt='....' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Common4;