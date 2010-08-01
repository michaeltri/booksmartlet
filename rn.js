function execBooksmartlet()
{
    function iptxt()
    {
        var d=document;
        try
        {
            if(!d.body)throw(0);
            window.location='http://www.instapaper.com/text?u='+encodeURIComponent(d.location.href);
            }
            catch(e)
            {
                alert('Please%20wait%20until%20the%20page%20has%20loaded.');
            }
        }
        iptxt();
        void(0)
}
execBooksmartlet();
