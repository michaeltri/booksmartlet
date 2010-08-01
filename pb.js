function execBooksmartlet()
{
    q=location.href;
    if(document.getSelection)
    {
        d=document.getSelection();
    }
    else
    {
        d='';
    };
    p=document.title;
    void(open('http://pinboard.in/add?url='+encodeURIComponent(q)+'&description='+encodeURIComponent(d)+'&title='+encodeURIComponent(p),'Pinboard',%20'toolbar=no,width=700,height=350'));    
}
execBooksmartlet();
