import React from 'react'
import Plan from './Plan.jpg'
import '../styles/main.scss'
const CardItem = () => {
    return(
        <section className="flexs">
            <div classsName="card">
            <div className="card-header">
                <img src={Plan} alt=""/>
                <h1 className="emd">1 person purchased this</h1>
            </div>
            <div classsName="card-body">
                <div className="plan-details">
                    <div className="grid">
                        <p className="left"><span className="bc">Build cost</span> <span className="custom-color">ksh 5,464,648</span> </p>
                        <p className="custom-color">ID:43678</p>
                    </div>
                    <div className="grids">
                        <ul>
                            <li><i class="fas fa-bed"></i>  4</li>
                            <li><i class="fas fa-lock"></i>  2</li>
                            <li><i class="fab fa-creative-commons"></i>  m2</li>
                        </ul>
                    </div>
                    <h1 className="mb custom-color">4 bedroom Mansionette</h1>

                <div className="form mb">
                        <form>
                            <label className="label mb">Add Additional Module <i class="fas fa-info-circle" ></i></label>
                            {/* <input type="" placeholder="Select"  /> */}
                            <select  className="form-control">
                                <option>Select</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="custom-color mb">
                    <h1 className="mb mr title">You'll get</h1>
                    <ul className="mr">
                        <li><i class="fas fa-check-circle"></i>  Architectural drawings in PDF format</li>
                        <li><i class="fas fa-check-circle"></i>Bills of materials and labour with budget costs</li>
                        <li><i class="fas fa-check-circle"></i>  Access to a project management tool to help you manage your build</li>
                        <li><i class="fas fa-check-circle"></i>  All engineering drawings</li>
                    </ul>
                </div>
                <h1 className="light-custom mb">Plan Price</h1>
                <p className="price custom-color mb-5">Ksh 20,000</p>
                <button className="primary-btn">Lets Start</button>
            </div>
            </div>
        </section>
    )
}
export default CardItem