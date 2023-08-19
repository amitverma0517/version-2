function myFunction() {
    document.getElementById("demo").innerHTML="Paragraph changed.";
}

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  })