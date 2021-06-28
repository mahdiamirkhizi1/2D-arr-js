const twoD_arr=(data)=>{
  let newData=  data.split("\n").map(item=>item.split(","))
    console.log(newData);
    // document.write(newData)
}

twoD_arr("amir\nmahdiam,mahdi\nali")