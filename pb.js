function execBooksmartlet(param1, param2)
{
    setTimeout(
        function()
        {
            if(document.getSelection)
            {
                s=document.getSelection();
            }
            else
            {
                s='';
            };
            document.location='http://pinboard.in/add?next=same&url='+encodeURIComponent(location.href)+'&description='+encodeURIComponent(s)+'&title='+encodeURIComponent(document.title)
        },
        0)
}
execBooksmartlet(gBooksmartletParam1, gBooksmartletParam2);
