function required()
{
  event.preventDefault();
  var empt = document.forms["form1"]["text1"].value;
  if (empt == "")
  {
    alert("Invalid code: Code Denied !");
    return false;
  }
  else
  {
    alert('Valid Code: Code Accepted !');
    return true;
  }

}

function required()
{
  event.preventDefault();
  var empt = document.forms["form1"]["text2"].value;
  if (empt == "")
  {
    alert("Invalid Adress: Code Denied !");
    return false;
  }
  else
  {
    alert('Valid Adress: Code Accepted !');
    return true;
  }

}
