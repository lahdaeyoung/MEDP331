let myImages = [{'src': 'img/cat1.jpg', 'height': '200px', 'width': '250px', 'top': '150px', 'left': '40px', 'caption': 'A blue eyed boi'}, {'src': 'img/cat2.jpg', 'top': '150px', 'left': '300px', 'height': '250px', 'width': '300px', 'caption': 'A floofy boi'}, {'src': 'img/cat3.jpg', 'width': '250px', 'height': '180px', 'top': '495px', 'left': '80px', 'caption': 'sunny vibes' }, {'src': 'img/cat4.jpg', 'width': '300px', 'height': '300px', 'top': '475px', 'left': '350px', 'caption': 'A chilling boi' }, {'src': 'img/cat5.jpg', 'width': '420px', 'height': '275px', 'top': '150px', 'left': '650px', 'caption': 'Why is he driving?' },  ]

function addImages(imageArray) {
  let container = $('#image-container')
  for (let i=0; i < imageArray.length; i++) {
    let imgDiv = createImage(imageArray[i])
    imgDiv.append("<p class='caption'>" + imageArray[i].caption + "</p>")
    container.append(imgDiv)
  }
  addClick()
}

function createImage(imageObject) {
  // create the element to add to the page
  // we're using a div so we can add things like captions to it
  let containerDiv = $("<div></div>")    //set container div styles
  containerDiv.css({
    'top': imageObject.top,
    'left': imageObject.left
  })
  //set container class
  containerDiv.addClass("image-container")
  let img = $("<img />", {
      src: imageObject.src
  })

  //set image style
  img.css({height: imageObject.height})
  img.css({width: imageObject.width})
  //add the image to our container div
  containerDiv.append(img)
  return containerDiv;
}
// we have to add this click handler after we've added all the images to the page, otherwise jQuery won't detect them
function addClick() {
  $("img").click(function() {
    console.log('foo')
    $(this).addClass("grayscale")
  })
}


addImages(myImages)
