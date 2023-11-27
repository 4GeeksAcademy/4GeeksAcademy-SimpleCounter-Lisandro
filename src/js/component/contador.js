import React from "react";

function Contador ({digito1, digito2, digito3, digito4, digito5, digito6,}){
    return(
<div class="row bg bg-black p-4">

<div class="col-sm-1 mb-3 mb-sm-0 bg-info">
<i class="fa fa-clock"></i>
</div>

  <div class="col-sm-1 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body bg-info">
        <p class="card-text text-white"><strong>{digito6}</strong></p>
        </div>
        </div>
        </div>

        <div class="col-sm-1 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body bg-info">
        <p class="card-text text-white"><strong>{digito5}</strong></p>
        </div>
        </div>
        </div>

        <div class="col-sm-1 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body bg-info">
        <p class="card-text text-white"><strong>{digito4}</strong></p>
        </div>
        </div>
        </div>

        <div class="col-sm-1 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body bg-info">
        <p class="card-text text-white"><strong>{digito3}</strong></p>
        </div>
        </div>
        </div>

        <div class="col-sm-1 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body bg-info">
        <p class="card-text text-white"><strong>{digito2}</strong></p>
        </div>
        </div>
        </div>

        <div class="col-sm-1 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body bg-info">
        <p class="card-text text-white"><strong>{digito1}</strong></p>
        </div>
        </div>
        </div>
 </div>
 );
}

export default Contador;