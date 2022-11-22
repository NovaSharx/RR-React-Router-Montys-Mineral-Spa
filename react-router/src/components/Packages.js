import { Routes, Route, Link } from 'react-router-dom'
import Package from './Package'

export default function Packages(props) {

    const displayPackages = props.packages.map((eachPackage, index) => {
        return (
            <li key={index}>
                <Link to={`/packages/${eachPackage}`}>
                    <Package package={eachPackage} />
                </Link>
            </li>
        )
    })

    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                </div>
                <div>
                    <ul>
                        {displayPackages}
                    </ul>
                </div>
            </div>
            <div>
                <Routes>
                    <Route path='/packages/name' element={<Package />} />
                </Routes>
            </div>
        </div>
    )
}