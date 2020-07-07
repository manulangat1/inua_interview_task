import React ,{useState} from 'react'
import Plan from './Plan.jpg'
const PlanItem = () => {
    return (
        <section className="planItem">
            <div className="container center">
                <div className="plan-details">
                    <div className="grid">
                        <p className="left">Build cost ksh 5464648484</p>
                        <p>ID:43678</p>
                    </div>
                    <h1 className="title">$ bedroom Mansionette</h1>

                <div className="form">
                        <form>
                            <label className="label">Additional Module</label>
                            <input type="" className="form-control" placeholder="Select"/>
                        </form>
                    </div>
                </div>
                <div className="item-list left">
                    <h1>You'll get</h1>
                    <ul>
                        <li>Architectural drwaings in PDF format</li>
                        <li>Architectural drwaings in PDF format</li>
                        <li>Architectural drwaings in PDF format</li>
                        <li>Architectural drwaings in PDF format</li>
                    </ul>
                </div>
                <h1 className="left">Plan Price</h1>
                <p className="left">Ksh 20,000</p>
                <button className="primary-btn">Lets Start</button>
            </div>
        </section>
    )
}
export default PlanItem