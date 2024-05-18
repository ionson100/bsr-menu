
export  const MapMenu=new Map<string,ResizeAction>();
export interface ResizeAction{
    _resizeWindows:()=>void;
}
window.addEventListener('resize', function() {
 MapMenu.forEach((value)=>{
     if(value){
        value._resizeWindows()
     }
 })
}, true);


