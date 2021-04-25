// Step 1:  Create a list of names
// Step 2:  Create a randomizer
// Step 3:  Apply randomizer to list by index
// Step 4:  Return index value

function whoIsPaying()
{
  let names = ["Mariah", "Whitney", "Toni", "Aretha", "Patti"];
  let nameIndex = 0;
  nameIndex = Math.floor(Math.random(nameIndex) * 5);
  for(let i = 0; i <= names.length; i++)
  {
    return names[nameIndex];
  }
}
console.log(whoIsPaying());