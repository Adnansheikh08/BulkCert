import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="border p-3 flex flex-col justify-center items-center ">
     <Link to="/"> <div className="font-bold text-2xl text-gray-500 font-Inter">BulkCert</div></Link>
     <p className="font-bold text-2xl text-blue-500 font-Inter">Effortless Certificate Generation, At Scale</p>
      </div>
  );
}

export default Navbar;