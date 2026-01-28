document.querySelector('#images').addEventListener('click', function(e) {
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        let removeIt = e.target.parentNode;
        removeIt.remove(); //MTHOD1

    }

    //tag name because it identifies the tagname and remove only those list whicch will contain the same name as the condition is given 
    //parentNode-->it will do the hierarchal structure of tag-->ul>li>tag

    // removeIt.parentNode.removeChild(removeIt)METHOD2 both the mmethod but it remove entire ul tag 
})

//target-->linked to which id or target element
//parentNode -->in order to remove whole tag not just img