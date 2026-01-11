var arr = [
    {dp:"https://plus.unsplash.com/premium_photo-1664475954460-d504c35664b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFzaWFuJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1682867266045-c34b0310133d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXNpYW4lMjBjdXRlfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1682867265752-851b42f3f2ae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFzaWFuJTIwY3V0ZXxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1682867265716-107a1b7a981f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXNpYW4lMjBjdXRlfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1616325629936-99a9013c29c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXNpYW4lMjBnaXJsfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1498090890888-3df9298e7b84?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFzaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1541823709867-1b206113eafd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXNpYW4lMjBnaXJsfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1513097633097-329a3a64e0d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXNpYW4lMjBnaXJsfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1611459293885-f8e692ab0356?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW4lMjBib3l8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1562034078-b07bc3a1cd35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXNpYW4lMjBib3l8ZW58MHx8MHx8fDA%3D"},
]

var storiyan = document.querySelector("#storiyan")
var clutter = ""
 arr.forEach(function(elem,idx){
    clutter +=`<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
</div>`
 })
storiyan.innerHTML = clutter

storiyan.addEventListener("click",function(dets){
     document.querySelector("#full-screen").style.display = "block"
     document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

     setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
     },3000)
})
