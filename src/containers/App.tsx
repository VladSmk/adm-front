import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navbar from "../layout/Navbar";
import General from "./General";
import FullScreenAd from "../blocks/FullScreenAd";
import Loading from "../blocks/Loading";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <div>
                    <Routes>
                        <Route path="/" element={<General />} />
                        <Route path="/ad/:id" element={<AdWrapper />} />
                        <Route path="/about" element={<Loading />} />
                        <Route path="/contact" element={<Loading />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

const AdWrapper = () => {
    let { id } = useParams();
    return <FullScreenAd id={id as string} />;
};

export default App;
