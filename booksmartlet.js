javascript:booksmartlet();
function booksmartlet()
{
    var u = 'http://github.com/michaeltri/booksmartlet/raw/master/';
    var c = window.prompt('Booksmartlet:');
    
    if (c)
    {
        q = document.getElementById('booksmartlet');
        if (q) 
        {
            q.parentNode.removeChild(q);
        }
        
        s = document.createElement('script');
        s.src = u + c + '.js';
        s.id = 'booksmartlet';
        s.type = 'text/javascript';
        h = document.getElementsByTagName('head');
        void(h[0].appendChild(s));
    }
}
