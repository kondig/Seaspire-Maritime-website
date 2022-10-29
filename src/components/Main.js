import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {Body} from './Body';
import BackToTop from './scrollTop';


const Main = (props) => (
    <div>
        <Routes>
            <Route path="/" element={<Body />} />
        </Routes>
        <BackToTop />
    </div>
)

export {Main};
