let post_element = document.getElementById('post')

let post = post_element.innerHTML;
post = removeLeadingSpaces(post);
post = marked.parse(post);

post_element.innerHTML = post;