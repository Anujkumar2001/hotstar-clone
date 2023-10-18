function slideShow(){
    let carousel=document.getElementById('carousel')
    let img=document.createElement('img')
    let images=[`https://th.bing.com/th/id/OIP.CK8I2_KT3yS-wt2utgCI1QHaEK?w=259&h=180&c=7&r=0&o=5&pid=1.7`,`https://th.bing.com/th/id/OIP.1B2NrOydzEsUdC-IbdEavQHaEK?w=258&h=180&c=7&r=0&o=5&pid=1.7`,`https://th.bing.com/th/id/OIP.ihiCUUDY4L1UsyeDTXldHwHaEK?w=322&h=181&c=7&r=0&o=5&pid=1.7`]
    let i=1
    img.src=images[0]
    carousel.append(img)
    setInterval(function(){
       if(i==images.length){
        i=0
       }
       img.src=images[i]
       console.log(i)
       carousel.append(img)
       i++
    },3000)
    carousel.append(img)

}

slideShow()

export default slideShow