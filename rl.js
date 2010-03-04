function execBooksmartlet(param1, param2)
{
    setTimeout(
        function()
        {
            function iprl5()
            {
                var d=document,z=d.createElement('scr'+'ipt'),b=d.body;
                try
                {
                    if(!b)throw(0);
                    d.title='(Saving...)%20'+d.title;
                    z.setAttribute('src','http://www.instapaper.com/j/vIeRKDI16cqo?u='+encodeURIComponent(d.location.href)+'&t='+(new Date().getTime()));
                    b.appendChild(z);
                }
                catch(e)
                {
                    alert('Please%20wait%20until%20the%20page%20has%20loaded.');
                }
            }
            iprl5();
            void(0)
        },
        0)
}
execBooksmartlet(gBooksmartletParam1, gBooksmartletParam2);
