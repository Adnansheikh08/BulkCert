import React from 'react';
function Navbar() {
  return (
    <div>
      <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a link="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span className='container text-xl font-mono'>BulkCert</span>
      </a>

      <ul class="nav nav-pills">
        <li class="font-mono nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
        <li class="font-mono nav-item"><a href="#" class="nav-link">Features</a></li>
        <li class="font-mono nav-item"><a href="#" class="nav-link">Pricing</a></li>
        <li class="font-mono nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="font-mono nav-item"><a href="#" class="nav-link">About</a></li>
      </ul>
    </header>
  </div>
    </div>
  )
}

export default Navbar;