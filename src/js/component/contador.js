import React from "react";

function Contador ({digito1, digito2, digito3, digito4, digito5, digito6,}){
    return(
<div class="row bg bg-black p-4 justify-content-center">

<div class="col-sm-1 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body bg-info border rounded">
        <p class="card-text text-dark display-2"><i class="fa fa-clock"></i></p>
        </div>
        </div>
        </div>


  <div class="col-sm-1 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body bg-info object-fit-fill border rounded">
        <p class="card-text text-white justify-conten display-2"><strong>{digito6}</strong></p>
        </div>
        </div>
        </div>

        <div class="col-sm-1 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body bg-info object-fit-fill border rounded">
        <p class="card-text text-white display-2"><strong>{digito5}</strong></p>
        </div>
        </div>
        </div>

        <div class="col-sm-1 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body bg-info object-fit-fill border rounded">
        <p class="card-text text-white display-2"><strong>{digito4}</strong></p>
        </div>
        </div>
        </div>

        <div class="col-sm-1 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body bg-info object-fit-fill border rounded">
        <p class="card-text text-white display-2"><strong>{digito3}</strong></p>
        </div>
        </div>
        </div>

        <div class="col-sm-1 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body bg-info object-fit-fill border rounded">
        <p class="card-text text-white display-2"><strong>{digito2}</strong></p>
        </div>
        </div>
        </div>

        <div class="col-sm-1 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body bg-info object-fit-fill border rounded">
        <p class="card-text text-white display-2"><strong>{digito1}</strong></p>
        </div>
        </div>
        </div>
 </div>
 );
}

export default Contador;