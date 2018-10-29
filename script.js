function showHideEdit() {
    const edit = document.getElementsByClassName('block-edit')[0];
    const button = document.getElementsByClassName('button-edit')[0];
    
    if (edit.style.visibility === 'hidden') {
        edit.style.visibility = 'visible';
        edit.style.width = '100%';
        edit.style.opacity = 1;
        button.innerHTML = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M12 24c6.618 0 12-5.382 12-12S18.618 0 12 0 0 5.382 0 12s5.382 12 12 12zM12 .97C18.083.97 23.03 5.918 23.03 12c0 6.083-4.947 11.03-11.03 11.03C5.917 23.03.97 18.082.97 12 .97 5.917 5.918.97 12 .97z" fill="#2C2F33" fill-rule="nonzero"/><g fill="#3C92CA"><path d="M8.147 8.177a.47.47 0 0 0-.137.33c0 .118.047.24.137.33l3.517 3.496a.467.467 0 0 0 .663 0l3.517-3.497a.468.468 0 0 0-.663-.659l-3.185 3.168L8.81 8.177a.476.476 0 0 0-.663 0z"/><path d="M8.146 15.83a.47.47 0 0 1-.137-.33.47.47 0 0 1 .137-.329l3.517-3.496a.467.467 0 0 1 .663 0l3.517 3.496a.468.468 0 0 1-.663.659l-3.185-3.167-3.186 3.167a.476.476 0 0 1-.663 0z"/></g></g></svg>';
    }
    else {
        edit.style.visibility = 'hidden';
        edit.style.width = 0;
        edit.style.opacity = 0;
        button.innerHTML = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M1.238 13.312a.478.478 0 0 0-.137.27L.384 18.59a.461.461 0 0 0 .526.526l5.008-.717a.478.478 0 0 0 .27-.137l9.194-9.194a.469.469 0 0 0 .006-.666.469.469 0 0 0-.666.006L5.64 17.491l-4.237.606.606-4.237 9.066-9.065a.469.469 0 0 0 .006-.666.469.469 0 0 0-.666.006l-9.177 9.177z" fill="#2C2F33"/><path d="M12.55 6.242l-8.515 8.516a.488.488 0 0 0 .015.692.488.488 0 0 0 .692.015l8.516-8.516a.488.488 0 0 0-.015-.692.488.488 0 0 0-.692-.015z" fill="#2C2F33"/><path d="M13.533 1.017L11.851 2.7c-.209.21-.23.523-.046.706l4.29 4.29c.183.183.497.163.706-.046l1.682-1.682c.813-.813.897-2.057.18-2.774L16.308.836c-.713-.713-1.957-.635-2.774.181zm4.293 4.293L16.52 6.617l-3.633-3.634 1.306-1.306c.399-.399 1.012-.439 1.362-.089l2.357 2.357c.353.353.317.963-.086 1.365z" fill="#3C92CA" fill-rule="nonzero"/></g></svg>';
    }
}