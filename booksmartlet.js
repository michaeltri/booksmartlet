javascript:
var bsl_c = window.prompt('Booksmartlet:');
var bsl_u = 'http://github.com/michaeltri/booksmartlet/raw/master/';

if (bsl_c)
{
    q = document.getElementById('booksmartlet');
    if (q) 
    {
        q.parentNode.removeChild(q);
    }
        
    sc = document.createElement('script');
    sc.src = bsl_u + bsl_c + '.js';
    sc.id = 'booksmartlet';
    sc.type = 'text/javascript';
    heads = document.getElementsByTagName('head');
    void(heads[0].appendChild(sc));
}