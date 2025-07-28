async function aniFetch() {
    try{
        const anime=document.getElementById("animeName").value;
        const response=await fetch(`https://api.jikan.moe/v4/anime?q=${anime}`);
        const result=await response.json();
        if(!response.ok){
            alert("Anime not found");
        }
        const aniInfo=result.data[0].images.jpg.large_image_url;
        document.getElementById("pic").src=aniInfo;
        const pic=document.getElementById("pic").style;
        pic.display="block";
        pic.height="300px";
        pic.objectFit="cover";
     
    }
    catch(e){
        console.error(e);
    }
  
}