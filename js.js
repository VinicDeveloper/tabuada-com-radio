function exec(){
    let n = [0,1]
    n[0] = document.querySelector("input#n").value
   let tab = document.querySelector("select#tab")
   
    if(n[0].length == 0){
        alert('DIGITE ALGO')
    }
else{
    c=1
    n = Number(n[0])
    tab.innerHTML =``
  if(rad.checked){
      while(c<= 10){
      let item =  document.createElement('option')
      item.text = `${n} x ${c} = ${(n*c).toFixed(1)}`
      item.value =`tab${c}`
      tab.appendChild(item)
      c++
    }
}
    if(rad2.checked){
        while(c<= 10){
        let item =  document.createElement('option')
        item.text = `${n} + ${c} = ${(n+c).toFixed(1)}`
        item.value =`tab${c}`
        tab.appendChild(item)
        c++
      }
    }
      if(rad3.checked){
        while(c<= 10){
        let item =  document.createElement('option')
        item.text = `${n} - ${c} = ${(n-c).toFixed(1)}`
        item.value =`tab${c}`
        tab.appendChild(item)
        c++
      }
    }
      if(rad4.checked){
        while(c<= 10){
        let item =  document.createElement('option')
        item.text = `${n} : ${c} = ${(n/c).toFixed(1)}`
        item.value =`tab${c}`
        tab.appendChild(item)
        c++
      }
}
}


}