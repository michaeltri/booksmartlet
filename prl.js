function execBooksmartlet()
{
    if(document.getSelection)
    {
        s=document.getSelection();
    }
    else
    {
        s='';
    };
    document.location='http://pinboard.in/add?later=yes&noui=yes&next=same&url='+encodeURIComponent(location.href)+'&description='+encodeURIComponent(s)+'&title='+encodeURIComponent(document.title);
}
execBooksmartlet();
