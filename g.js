function execBooksmartlet(param1, param2)
{
    setTimeout(
        function()
        {
            location.href="http://www.google.com/search?q="+param1;
        },
        0)
}
execBooksmartlet(gBooksmartletParam1, gBooksmartletParam2);