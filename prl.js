function execBooksmartlet()
{
    q=location.href;
    p=document.title;
    t=open('http://pinboard.in/add?later=yes&noui=yes&jump=close&url='+encodeURIComponent(q)+'&title='+encodeURIComponent(p),'Pinboard','toolbar=no,width=100,height=100'));
    t.blur();
}
execBooksmartlet();
