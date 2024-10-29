var headers = document.getElementsByClassName('accordion-header');
        
        for (var i = 0; i < headers.length; i++) {
            headers[i].onclick = function() {
                var content = this.nextElementSibling;
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                } else {
                    content.style.display = 'block';
                }
            };
        }