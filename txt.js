function execBooksmartlet(param1, param2)
{
    setTimeout(
        function()
        {
            location.href='http://www.aaronsw.com/2002/html2text/?url='+document.location.href;
        },
        0)
}
execBooksmartlet(gBooksmartletParam1, gBooksmartletParam2);
