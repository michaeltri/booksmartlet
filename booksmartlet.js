javascript:booksmartlet();
function booksmartlet()
{
    var c = window.prompt('Booksmartlet:');

    if (c)
    {
        var u = 'http://github.com/michaeltri/booksmartlet/raw/master/' + c;
        
        q = document.getElementById('booksmartlet');
        if (q) 
        {
            q.parentNode.removeChild(q);
        }
        
        sc = document.createElement('script');
        sc.src = u;
        sc.id = 'booksmartlet';
        sc.type = 'text/javascript';
        heads = document.getElementsByTagName('head');
        void(heads[0].appendChild(sc));
        
        booksmartlet_exec('giantbomb');
    }
}