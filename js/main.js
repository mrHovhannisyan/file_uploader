$("#myUpload").bootstrapFileUpload({
    url: "upload.php",
    fileTypes: {
        images: ["bmp", "tif", "tiff", "gif", "jpeg", "jpg", "png", "svg", "ico", "raw"]
    },
    formMethod: 'post',
    minSize: 0.005,
    maxSize: 20,
});

let fileSelector = $('#myModal input');

$('#uploader').click(function () {
    fileSelector.click();
    fileSelector.change(function () {
        if(fileSelector.val() !== "") {
            $('#myModal').modal('show');
        }
    })
});

let dropContainer = document.documentElement;
let fileInputContainer = document.getElementById('myUpload');
let fileInput = fileInputContainer.getElementsByTagName('input')[0];

dropContainer.ondragover = dropContainer.ondragenter = function(evt) {
    evt.preventDefault();
};

dropContainer.ondrop = function(evt) {
    fileInput.files = evt.dataTransfer.files;
    $("#myModal").modal();
    evt.preventDefault();
};
