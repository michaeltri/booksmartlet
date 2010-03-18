function execBooksmartlet(param1, param2)
{
    setTimeout(
        function()
        {
            q=location.href;
            p=document.title;
            void(t=open('http://pinboard.in/add?later=yes&noui=yes&jump=close&url='+encodeURIComponent(q)+'&title='+encodeURIComponent(p),'Pinboard','toolbar=no,width=100,height=100'));
            t.blur();
        },
        0)
}
execBooksmartlet(gBooksmartletParam1, gBooksmartletParam2);
