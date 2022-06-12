import React from 'react'

export default function Calculator() {

    function calculate(){
      
        var number1 = parseInt(document.getElementById('num1').value);
        var number2 = parseInt(document.getElementById('num2').value);
     var resultBox = document.getElementById('result');
        resultBox.innerHTML = '';

      
        var buttonAdd = document.getElementById('add');
        var buttonSubstract = document.getElementById('sub');
        var buttonMultiply = document.getElementById('mul');
        var buttonDivision = document.getElementById('div');

        if(buttonAdd.checked === true){
            resultBox.innerHTML = number1 + number2
        }
        else{
            if(buttonSubstract.checked === true){
                resultBox.innerHTML = number1 - number2
            }
            else{
                if(buttonMultiply.checked === true){
                    resultBox.innerHTML = number1 * number2
                }
                else{
                    if(buttonDivision.checked === true){
                        resultBox.innerHTML = number1 / number2
                    }
                }
            }
        }            
    }

  return (
    <div>
        <center>
        <h1>SIMPLE CALCULATOR USING REACTJS </h1></center><br/><br/>
        <form>
            <center>
            <div className='row'>
        
        <div className='col-md-12'>
        <div class="col-xs-4 col-lg-offset-4">
        <input type="number" className='form-control col-sm-4' id='num1'  placeholder=' Enter the value1'></input> </div>
   <br/><br/><br/>
   <div class="col-xs-4 col-lg-offset-4">
        <input type="number" className='form-control col-md-4'  id='num2'   placeholder=' Enter the value2'></input>  </div>    </div>
        </div><br/>
        
      <div className='ans'>
        <div id='result'>
         
        </div>
        <div id='result'>

        </div>
        <div id='result'>

        </div>
        <div id='result'>

        </div>
        <div id='result'>

        </div></div><br/>
      <div>




        <div class="btn-group" data-toggle="buttons">
      <label class="btn btn-primary">
        <input type="radio" name="options" id="add"/> add
      </label>
      <label class="btn btn-info">
        <input type="radio" name="options" id="sub"/> sub
      </label>
      <label class="btn btn-success">
        <input type="radio" name="options" id="mul" /> mul
      </label>
      <label class="btn btn-danger">
        <input type="radio" name="options" id="div" /> div
      </label>
</div>
        </div><br/>

        <button type="button"  className='btn btn-primary'onClick={() => calculate()}>RESULT</button>
        
        </center>
        </form>
        </div>
       
  )
}
