

window.onload = function() {
    var banner = document.getElementById("banner");
    var closeButton = document.getElementById("closeButton");
  
    function showBanner() {
      banner.style.display = "block";
    }
  
    function closeBanner() {
      banner.style.display = "none";
    }
  
    closeButton.addEventListener("click", closeBanner);
  
    setTimeout(showBanner, 5000); 
  };
  















  document.addEventListener("DOMContentLoaded", function() {
    var notification = document.getElementById("notificationContainer");
    notification.style.display = "block";
});

function closeNotification() {
    var notification = document.getElementById("notificationContainer");
    notification.style.display = "none";
}





















