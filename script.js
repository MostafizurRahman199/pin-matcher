function generatePin()
{
  const pin = getPin();
  document.getElementById('display-pin').value = pin;
}

function getPin()
{
    const pin =  Math.round(Math.random() *10000);
    const pinString = pin + '';
    if(pinString.length == 4)
        {
            return pin;
        }
        else
        {
           
            return getPin();
        }
}

function showMessage(blockId, noneId)
{
    document.getElementById(`${blockId}-pin`).style.display = 'block';
    document.getElementById(`${noneId}-pin`).style.display = 'none';
    document.getElementById(`wrong-pin3`).style.display = 'none';
}

function verifyPin()
{
   const pin = document.getElementById('display-pin').value;
   const submitPin = document.getElementById('cal-display').value;

   if(pin == submitPin)
   { 
       showMessage('correct','wrong');
       
   }
   else{

       let numOfTry = document.getElementById('try');

    if(parseInt(numOfTry.innerText)>0)
    {
        numOfTry.innerText= parseInt(--numOfTry.innerText);
    }
 
       showMessage('wrong','correct');
       if(parseInt(numOfTry.innerText) <=0)
       {
        document.getElementById(`wrong-pin`).style.display = 'none';
        document.getElementById(`correct-pin`).style.display = 'none';
        document.getElementById(`wrong-pin3`).style.display = 'block';

        
       }

   }

}

document.getElementById('key-pad').addEventListener('click',function(event){
   const number = event.target.innerText;  
   const calDisplay = document.getElementById('cal-display');
   if(isNaN(number))
   {
       if(number == 'C')
        {
            calDisplay.value = '';
        }
   }
   else
   {
       calDisplay.value = calDisplay.value + number;
      
   }
   
   
 
})

