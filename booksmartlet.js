javascript:
var gBooksmartletParam1 = '';
var gBooksmartletParam2 = '';

Booksmartlet();
function Booksmartlet()
{
    var url = 'http://github.com/michaeltri/booksmartlet/raw/master/';
    var input = window.prompt('Booksmartlet:');
    
    if (input)
    {
        var params = input.split(" ");
        cmd = params[0];
        gBooksmartletParam1 = params[1];
        gBooksmartletParam2 = params[2];
        
        q = document.getElementById('booksmartlet');
        if (q) 
        {
            q.parentNode.removeChild(q);
        }
        
        sc = document.createElement('script');
        sc.src = url + cmd + '.js';
        sc.id = 'booksmartlet';
        sc.type = 'text/javascript';
        heads = document.getElementsByTagName('head');
        void(heads[0].appendChild(sc));
    }
}