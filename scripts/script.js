$(document).ready(function(){
    var imgs = ["images/logo.png", "images/me.png"];
    var imgCount = 0;
    $("#websum").append('<img class="display" src="'+ imgs[0] +'" width="400"/>');
    
    setInterval(changePic, 3000);
    
    function changePic() {
        imgCount++;
        
        if (imgCount == imgs.length) {
            imgCount = 0;
        }
        
        $("#websum").html("");
        $("#websum").append('<img class="display" src="'+ imgs[imgCount] +'" width="400"/>');
    }
  });