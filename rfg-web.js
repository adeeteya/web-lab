function generateImage() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://fakeface.rest/face/json");
    request.onreadystatechange = readyStateChanged;
    request.send(null);
    function readyStateChanged() {
        if (request.readyState == 4) {
            if (request.status == 200) {
                var response = JSON.parse(request.responseText);
                document.getElementById("imageView").src = response['image_url'];
            }
            else {
                alert("Error Ocurred");
            }
        }
    }
}
